import { WATSONX_CONFIG } from '@/lib/env';

// 定义消息类型接口
interface ChatMessage {
  role: string;
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages, streaming = false } = await req.json();
    
    // 获取IBM Cloud IAM token
    const tokenResponse = await fetch(WATSONX_CONFIG.TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${WATSONX_CONFIG.API_KEY}`
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to get IAM token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 选择正确的端点URL（流式或非流式）
    const endpointUrl = streaming
      ? `${WATSONX_CONFIG.API_URL}/${WATSONX_CONFIG.DEPLOYMENT_ID}/ai_service_stream?version=${WATSONX_CONFIG.VERSION}`
      : `${WATSONX_CONFIG.API_URL}/${WATSONX_CONFIG.DEPLOYMENT_ID}/ai_service?version=${WATSONX_CONFIG.VERSION}`;

    // IBM watsonx.ai期望的请求格式
    // 基于提供的API示例，watsonx.ai可能期望一个简单的messages数组
    // 我们保持原始格式，以防这是正确的
    
    console.log("Sending to IBM watsonx.ai:", JSON.stringify({ messages }));

    // 调用watsonx ai接口
    const watsonxResponse = await fetch(
      endpointUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ messages })
      }
    );

    if (!watsonxResponse.ok) {
      const errorText = await watsonxResponse.text();
      console.error("watsonx.ai error response:", errorText);
      throw new Error(`Failed to get response from watsonx ai: ${watsonxResponse.status} ${errorText}`);
    }

    // 根据是否是流式请求处理响应
    if (streaming) {
      // 如果是流式传输，直接返回响应流
      return new Response(watsonxResponse.body, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        }
      });
    } else {
      // 如果不是流式传输，返回JSON响应
      const responseData = await watsonxResponse.json();
      console.log("watsonx.ai response:", JSON.stringify(responseData));
      return Response.json(responseData);
    }
  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return Response.json(
      { error: 'Failed to get AI response', details: errorMessage },
      { status: 500 }
    );
  }
} 