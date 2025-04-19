import { NextResponse } from 'next/server';
import { WATSONX_CONFIG } from '@/lib/env';

export async function GET() {
  try {
    const response = await fetch(WATSONX_CONFIG.TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: new URLSearchParams({
        'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
        'apikey': WATSONX_CONFIG.API_KEY,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('IBM token error:', errorData);
      return NextResponse.json(
        { error: 'Failed to fetch IBM token' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ access_token: data.access_token });
  } catch (error) {
    console.error('Error fetching IBM token:', error);
    return NextResponse.json(
      { error: 'Failed to fetch IBM token' },
      { status: 500 }
    );
  }
} 