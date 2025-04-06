import { WATSONX_CONFIG } from '@/lib/env';

// 定义消息类型接口
interface ChatMessage {
  role: string;
  content: string;
}

// 添加系统消息，指导AI使用正确的Markdown格式
const SYSTEM_MESSAGE = {
  role: "system",
  content: `You are Sanicle's AI assistant. Format your responses using Markdown:
  - Use proper headers with ## for main titles and ### for subtitles
  - Format lists correctly with proper spacing
  - Use **bold** for emphasis
  - Separate paragraphs with blank lines
  - Use bullet points with * or - followed by a space
  - Number lists with 1. 2. etc. followed by a space
  - Format your response clearly and concisely`
};

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

    // 在消息列表的开头添加系统消息，指导AI使用正确的Markdown格式
    const messagesWithSystem = [SYSTEM_MESSAGE, ...messages];
    
    console.log("Sending to IBM watsonx.ai:", JSON.stringify({ messages: messagesWithSystem }));

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
        body: JSON.stringify({ messages: messagesWithSystem })
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