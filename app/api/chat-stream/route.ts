import { NextRequest, NextResponse } from 'next/server';
import { WATSONX_CONFIG } from '@/lib/env';
import { COMBINED_SYSTEM_PROMPT } from '@/lib/prompts';

// IBM watsonx AI Service Streaming Endpoint
const AI_SERVICE_STREAM_URL = `https://us-south.ml.cloud.ibm.com/ml/v4/deployments/${WATSONX_CONFIG.DEPLOYMENT_ID}/ai_service_stream?version=${WATSONX_CONFIG.VERSION}`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400 }
      );
    }

    // Get IBM Cloud IAM token
    const tokenResponse = await fetch(WATSONX_CONFIG.TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${WATSONX_CONFIG.API_KEY}`
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      console.error('IBM token error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get IAM token' },
        { status: tokenResponse.status }
      );
    }

    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;

    // Add system prompt to messages if not already present
    const messagesWithSystemPrompt = [
      { role: "system", content: COMBINED_SYSTEM_PROMPT },
      ...messages.filter((msg: any) => msg.role !== "system")
    ];

    const response = await fetch(AI_SERVICE_STREAM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ messages: messagesWithSystemPrompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('IBM watsonx AI error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get response from AI service' },
        { status: response.status }
      );
    }

    // Return the streaming response
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error processing chat stream request:', error);
    return NextResponse.json(
      { error: 'Failed to process chat stream request' },
      { status: 500 }
    );
  }
} 