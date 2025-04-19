// 这个文件用于处理环境变量，确保环境变量从.env.local文件加载

// IBM watsonx AI配置
export const WATSONX_CONFIG = {
  API_KEY: process.env.WATSONX_API_KEY || '',
  DEPLOYMENT_ID: process.env.WATSONX_DEPLOYMENT_ID || '',
  API_URL: process.env.NEXT_PUBLIC_WATSONX_API_URL || '',
  TOKEN_URL: process.env.WATSONX_TOKEN_URL || '',
  VERSION: process.env.WATSONX_VERSION || '',
  PROJECT_ID: process.env.WATSONX_PROJECT_ID || '',
  ASSET_ID: process.env.WATSONX_ASSET_ID || '',
  MODEL_ID: process.env.WATSONX_MODEL_ID || '',
}; 

// 应用配置
export const APP_CONFIG = {
  NAME: process.env.NEXT_PUBLIC_APP_NAME || '',
  DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION || '',
  URL: process.env.NEXT_PUBLIC_APP_URL || '',
} as const;

// API配置
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
} as const;

// 验证必需的环境变量
const requiredEnvVars = [
  'WATSONX_API_KEY',
  'WATSONX_DEPLOYMENT_ID',
  'NEXT_PUBLIC_WATSONX_API_URL',
  'WATSONX_TOKEN_URL',
  'WATSONX_VERSION',
  'WATSONX_PROJECT_ID',
  'WATSONX_ASSET_ID',
  'WATSONX_MODEL_ID',
] as const;

// 在开发环境中验证环境变量
if (process.env.NODE_ENV === 'development') {
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      console.warn(`Warning: Missing required environment variable: ${envVar}`);
    }
  }
} 