import { WATSONX_CONFIG } from '@/lib/env';
import { COMBINED_SYSTEM_PROMPT } from '@/lib/prompts';

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

    // 准备消息数组
    const messagesForAPI = [
      {
        role: "system",
        content: COMBINED_SYSTEM_PROMPT
      }
    ];
    
    // 添加用户和助手的对话历史
    for (const msg of messages) {
      if (msg.role === 'user' || msg.role === 'assistant') {
        messagesForAPI.push({
          role: msg.role,
          content: msg.content
        });
      }
    }

    // 设置API端点
    const baseUrl = 'https://us-south.ml.cloud.ibm.com';
    const endpointUrl = `${baseUrl}/ml/v1/text/chat?version=2023-05-29`;
    
    // 准备请求体
    const requestBody = {
      messages: messagesForAPI,
      model_id: WATSONX_CONFIG.MODEL_ID,
      project_id: WATSONX_CONFIG.PROJECT_ID,
      frequency_penalty: 0,
      max_tokens: 2000,
      presence_penalty: 0,
      temperature: 0.7,
      top_p: 1
    };
    
    console.log("Sending to watsonx.ai chat API endpoint:", endpointUrl);
    console.log("Using model:", WATSONX_CONFIG.MODEL_ID);
    console.log("Messages count:", messagesForAPI.length);

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
        body: JSON.stringify(requestBody)
      }
    );

    if (!watsonxResponse.ok) {
      const errorText = await watsonxResponse.text();
      console.error("watsonx.ai error response:", errorText);
      throw new Error(`Failed to get response from watsonx ai: ${watsonxResponse.status} ${errorText}`);
    }

    // 处理响应
    const responseData = await watsonxResponse.json();
    console.log("watsonx.ai response:", JSON.stringify(responseData));
    
    // 直接返回watsonx.ai的完整响应
    return Response.json(responseData);
  } catch (error: unknown) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return Response.json(
      { error: 'Failed to get AI response', details: errorMessage },
      { status: 500 }
    );
  }
} 