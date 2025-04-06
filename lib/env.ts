// 这个文件用于处理环境变量，确保环境变量存在并具有默认值

// IBM watsonx AI配置
export const WATSONX_CONFIG = {
  API_KEY: process.env.WATSONX_API_KEY || '',
  DEPLOYMENT_ID: process.env.WATSONX_DEPLOYMENT_ID || '',
  API_URL: process.env.NEXT_PUBLIC_WATSONX_API_URL || 'https://us-south.ml.cloud.ibm.com/ml/v4/deployments',
  TOKEN_URL: process.env.WATSONX_TOKEN_URL || 'https://iam.cloud.ibm.com/identity/token',
  VERSION: process.env.WATSONX_VERSION || '2021-05-01'
}; 