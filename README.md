<div align="center">
 <h1><img src="public/logo/sanicle_logo.svg" width="200px"><br/><small>Women's Health Platform for Workplace Wellness</small></h1>
 <img src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
 <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
 <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
 <img src="https://img.shields.io/badge/IBM%20Cloud-%231261FE.svg?style=for-the-badge&logo=ibm&logoColor=white"/>
</div>

> [!IMPORTANT]
> Sanicle Cloud is a comprehensive platform designed to support women's health in the workplace, focusing on menstrual health management, menopause support, and overall workplace wellness. **Powered by IBM Cloud watsonx AI** for intelligent health insights and personalized support.



https://github.com/user-attachments/assets/d64a35c1-3ef1-4d5d-9584-869ecb99b1fc



# 🌟 Introduction

Sanicle Cloud is a revolutionary women's health platform specifically designed for workplace wellness. The platform offers comprehensive menstrual health support, menopause management, and mental well-being resources for female employees while providing HR departments with tools to create more inclusive and supportive work environments. With the power of **IBM Cloud watsonx AI**, Sanicle provides intelligent health insights and personalized support to all users.

## ✨ Key Features

- 🩸 **Comprehensive Period Care** - Smart dispensers and quality menstrual products
- 📊 **Data-Driven Insights** - Usage patterns and employee needs analysis
- 🤝 **Inclusive Workplace Support** - Creating environments where everyone feels valued
- 🧠 **Mental Wellbeing Integration** - Supporting psychological aspects of hormonal health
- 👩‍💼 **Menopause Transition Support** - Resources and workplace accommodations 
- 🔒 **Enhanced Data Privacy** - Enterprise-grade protection of sensitive health data
- 🔄 **Seamless HR Integration** - Easy implementation with existing HR systems
- 🌿 **Sustainability Focus** - Eco-friendly products aligned with company values
- 🤖 **AI-Powered Analytics** - Advanced insights for personalized health support

> [!NOTE]
> - Node.js >= 18.0.0 required
> - Next.js 15.0 framework
> - React 19 framework

## 📚 Table of Contents

- [🌟 Introduction](#-introduction)
  - [✨ Key Features](#-key-features)
  - [📚 Table of Contents](#-table-of-contents)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📂 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Setup](#environment-setup)
    - [Running the Application](#running-the-application)
  - [🖥️ Platform Overview](#️-platform-overview)
    - [For Employees](#for-employees)
    - [For HR Managers](#for-hr-managers)
    - [For Health Brokers](#for-health-brokers)
  - [🧠 IBM Cloud Watson X AI Integration](#-ibm-cloud-watson-x-ai-integration)
    - [Overview](#overview)
    - [Features](#features)
    - [Architecture](#architecture)
    - [Authentication Flow](#authentication-flow)
    - [API Integration](#api-integration)
    - [Configuration](#configuration)
    - [Setup Instructions](#setup-instructions)
    - [System Prompt Implementation](#system-prompt-implementation)
    - [Technical Implementation Details](#technical-implementation-details)
    - [Error Handling and Fallbacks](#error-handling-and-fallbacks)
    - [Security Considerations](#security-considerations)
  - [🔒 Privacy \& Security](#-privacy--security)
  - [📄 License](#-license)
  - [🙋‍♀ Author](#-author)

## 🛠️ Tech Stack

<div align="center">
  <table>
    <tr>
      <td align="center" width="96">
        <img src="https://cdn.simpleicons.org/next.js" width="48" height="48" alt="Next.js" />
        <br>Next.js
      </td>
      <td align="center" width="96">
        <img src="https://cdn.simpleicons.org/react" width="48" height="48" alt="React" />
        <br>React
      </td>
      <td align="center" width="96">
        <img src="https://cdn.simpleicons.org/typescript" width="48" height="48" alt="TypeScript" />
        <br>TypeScript
      </td>
      <td align="center" width="96">
        <img src="https://cdn.simpleicons.org/tailwindcss" width="48" height="48" alt="Tailwind CSS" />
        <br>Tailwind
      </td>
      <td align="center" width="96">
        <img src="https://cdn.simpleicons.org/radixui" width="48" height="48" alt="Radix UI" />
        <br>Radix UI
      </td>
      <td align="center" width="96">
        <img src="https://cdn.simpleicons.org/shadcnui" width="48" height="48" alt="shadcn/ui" />
        <br>shadcn/ui
      </td>
      <td align="center" width="96">
        <img src="https://cdn.simpleicons.org/ibm" width="48" height="48" alt="IBM Cloud" />
        <br>IBM Cloud
      </td>
    </tr>
  </table>
</div>

> [!TIP]
> Our tech stack leverages modern frameworks and libraries to provide a seamless, accessible, and responsive user experience. The combination of Next.js, React, and TypeScript ensures a robust and maintainable codebase.

## 📂 Project Structure

```
sanicle-cloud/
├── app/                  # Next.js app directory
│   ├── platform/         # Platform features, benefits, security, and integration
│   ├── solution/         # Solution pages for employers, employees, and brokers
│   ├── company/          # Company information pages
│   ├── pricing/          # Pricing information
│   ├── api/              # API routes including watsonx AI chat integration
│   └── demo/             # Demo request pages
├── components/           # Reusable UI components
│   ├── home/             # Homepage components (HeroSection, ValueProposition, HowItWorks)
│   ├── platform/         # Platform-specific components
│   ├── solution/         # Solution-specific components for different stakeholders
│   ├── chat/             # AI Chat widget powered by IBM watsonx
│   ├── layout/           # Layout components
│   ├── ui/               # UI library components
│   └── shared/           # Shared utility components
├── public/               # Static assets
│   ├── images/           # Image assets
│   ├── logo/             # Logo files including leaf decorations
│   └── docs/             # Documentation files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and shared code
├── styles/               # Global styles and Tailwind configuration
└── watsonx-docs/         # Documentation for IBM Cloud watsonx AI integration
```

## 🚀 Getting Started

### Prerequisites

> [!IMPORTANT]
> Before you begin, ensure you have the following installed:
> - Node.js 18.0.0 or higher
> - npm, pnpm, or yarn
> - Git
> - IBM Cloud account with watsonx AI access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/sanicle-cloud.git
cd sanicle-cloud
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Environment Setup

1. Create a `.env.local` file based on the `.env.example`:
```bash
cp .env.example .env.local
```

2. Update the `.env.local` file with your environment configuration, including IBM watsonx AI credentials:
```
# IBM watsonx AI configuration
NEXT_PUBLIC_WATSONX_API_URL=https://us-south.ml.cloud.ibm.com/ml/v4/deployments
WATSONX_API_KEY=your_api_key_here
WATSONX_DEPLOYMENT_ID=your_deployment_id_here
WATSONX_TOKEN_URL=https://iam.cloud.ibm.com/identity/token
WATSONX_VERSION=2021-05-01
```

### Running the Application

1. Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🖥️ Platform Overview

### For Employees

- **Period Care Access**: Convenient access to quality menstrual products
- **Menopause Support**: Resources and guidance for navigating menopause in the workplace
- **Mental Health Integration**: Support for psychological aspects connected to hormonal health
- **Educational Resources**: Access to information about women's health topics
- **Health Tracking**: Tools to monitor and manage hormonal health cycles
- **AI Health Assistant**: 24/7 access to AI-powered health information and guidance

### For HR Managers

- **Inclusive Workplace Tools**: Resources to address women's health comprehensively
- **Data-Driven Insights**: Anonymous usage data to optimize health offerings
- **Easy Implementation**: Turnkey solution with simple integration
- **Benefits Management**: Tools to better manage women's health benefits
- **Employee Satisfaction Metrics**: Track improvements in workplace satisfaction and retention
- **AI-Powered Analytics**: Gain intelligent insights from workplace health data

### For Health Brokers

- **Network Building**: Connect employers with leading healthcare providers
- **Comprehensive Solutions**: Offer complete women's health packages to clients
- **Value Demonstration**: Show clear ROI for implementing women's health programs
- **Analytics Dashboard**: Access to aggregated health benefits performance data
- **AI-Enhanced Recommendations**: Intelligent suggestions for health benefits packages

## 🧠 IBM Cloud Watson X AI Integration

### Overview

The platform leverages IBM's Watson X AI to provide comprehensive women's health support through a convenient chat widget located in the bottom-right corner of the employee dashboard. This integration uses the Meta Llama 4 Maverick model (17B parameters) hosted on IBM's watsonx.ai platform to deliver intelligent, contextually relevant responses to women's health inquiries.

### Features

- **Accessible Chat Widget**: Floating chat interface in the bottom-right corner of the employee dashboard
- **Specialized Health Focus**: Custom system prompt trained for women's health in the workplace
- **Real-time Streaming Responses**: Both standard and streaming API options for responsive interactions
- **Enterprise-Grade Security**: Server-side token authentication with IBM Cloud IAM
- **Contextual Understanding**: Maintains conversation history for more relevant responses
- **Mobile-Responsive Design**: Automatically adapts to different screen sizes (disables on small mobile screens)
- **Preset Question Templates**: Frequently asked health questions for quick access

### Architecture

The Watson X AI integration follows a comprehensive client-server architecture:

#### Frontend Implementation

- **ChatWidgetWrapper.tsx**: Handles widget mounting, mobile detection, and collapse state
- **ChatWidget.tsx**: Main UI component with expandable chat interface, message history, and input handling
- **ChatMessage.tsx**: Renders individual messages with Markdown formatting support
- **PresetQuestions.tsx**: Provides templated questions for common user inquiries
- **Responsive Design**: Automatically disables on mobile devices with small screens
- **Dynamic Typing Indicator**: Visual feedback during AI response generation

#### Backend Implementation

- **Authentication Route** (`/api/ibm-token`): Securely obtains IBM Cloud IAM tokens
- **Standard Chat API** (`/api/chat`): Processes non-streaming chat requests
- **Streaming Chat API** (`/api/chat-stream`): Handles Server-Sent Events for real-time responses
- **System Prompt Management**: Comprehensive company and health context in `lib/prompts.ts`
- **Environment Configuration**: Centralized credential and endpoint management in `lib/env.ts`

### Authentication Flow

The integration implements a secure token-based authentication flow:

1. Backend API routes fetch an IBM Cloud IAM token using the configured API key
2. The token is obtained by making a POST request to IBM's IAM token endpoint: `https://iam.cloud.ibm.com/identity/token`
3. This token is then used to authenticate subsequent API calls to watsonx.ai services
4. All authentication happens server-side, ensuring API keys never reach client browsers
5. Tokens are refreshed as needed, with built-in error handling for authentication failures

### API Integration

The platform integrates with two primary watsonx.ai endpoints:

#### Standard Chat API
```
POST https://us-south.ml.cloud.ibm.com/ml/v1/text/chat?version=2023-05-29
```

#### Streaming Chat API
```
POST https://us-south.ml.cloud.ibm.com/ml/v4/deployments/{deployment_id}/ai_service_stream?version={version}
```

Both endpoints receive a structured payload including:
- System prompt defining the assistant's capabilities and knowledge
- Conversation history for contextual understanding
- User's current message
- Model parameters (temperature, max tokens, etc.)

### Configuration

To use the IBM watsonx AI feature, you need to configure the following environment variables in your `.env.local` file:

```env
# IBM watsonx AI Configuration
NEXT_PUBLIC_WATSONX_API_URL=https://us-south.ml.cloud.ibm.com/ml/v4/deployments
WATSONX_API_KEY=your_watsonx_api_key
WATSONX_DEPLOYMENT_ID=your_deployment_id
WATSONX_TOKEN_URL=https://iam.cloud.ibm.com/identity/token
WATSONX_VERSION=2021-05-01
WATSONX_PROJECT_ID=your_project_id
WATSONX_ASSET_ID=your_asset_id
WATSONX_MODEL_ID=meta-llama/llama-4-maverick-17b-128e-instruct-fp8
```

### Setup Instructions

1. **Create an IBM Cloud Account**: Sign up at [IBM Cloud](https://cloud.ibm.com/)
2. **Provision watsonx.ai Service**: Navigate to AI/Machine Learning services and provision watsonx.ai
3. **Create a Project**: Set up a new project in the watsonx.ai dashboard
4. **Deploy the Llama 4 Model**: Deploy the meta-llama/llama-4-maverick-17b-128e-instruct-fp8 model
5. **Generate API Credentials**: Create an IBM Cloud API key with appropriate permissions
6. **Note Configuration Details**: Record your deployment ID, project ID, and other required parameters
7. **Configure Environment Variables**: Add all variables to your project's `.env.local` file
8. **Restart Application**: Ensure the application loads the new environment variables

### System Prompt Implementation

The chat system uses a comprehensive prompt structure defined in `lib/prompts.ts`:

- **Company Background**: Information about Sanicle's mission and history
- **Platform Details**: Technical specifications and capabilities
- **Product Offerings**: Available services and subscription tiers
- **Leadership Team**: Information about company executives
- **Problem Statement**: The women's health challenges being addressed
- **Formatting Instructions**: Guidelines for consistent Markdown formatting
- **Example Q&A Pairs**: Sample interactions for training response patterns

This structured prompt ensures the assistant provides accurate, consistent information about women's health in the workplace context.

### Technical Implementation Details

#### Client-Side Implementation

1. **Widget Initialization**:
   - Dynamically loaded with Next.js for optimal performance
   - Suspense and fallback handling for smooth loading
   - Mobile detection to disable on small screens

2. **User Interaction Flow**:
   - Message input handling with both textarea and button submission
   - Message history management with React state
   - Responsive UI that expands/collapses on demand

3. **Response Rendering**:
   - Markdown parsing for formatted responses
   - Type-safe message handling
   - Scroll management to follow new messages

#### Server-Side Implementation

1. **API Route Handlers**:
   - Next.js API routes with proper error handling
   - Request validation and sanitization
   - Response formatting for compatibility with frontend

2. **IBM Cloud Integration**:
   - Token acquisition and management
   - API request formatting according to IBM specifications
   - Error handling with appropriate fallbacks

3. **Context Management**:
   - System prompt injection
   - Conversation history tracking
   - Dynamic parameter adjustment

### Error Handling and Fallbacks

The system implements comprehensive error handling at multiple levels:

- **Authentication Errors**: Detailed logging and appropriate HTTP status codes
- **API Request Failures**: Graceful degradation with user-friendly error messages
- **Response Parsing Issues**: Format detection and fallback handling
- **Network Problems**: Timeout management and retry logic
- **Mobile Compatibility**: Automatic feature disabling on incompatible devices

### Security Considerations

- **API Key Protection**: All sensitive credentials stored server-side only
- **Token Management**: Short-lived access tokens with proper refresh mechanisms
- **Request Validation**: Input sanitization to prevent injection attacks
- **Response Sanitization**: Output processing to prevent XSS vulnerabilities
- **Rate Limiting**: Protection against excessive API usage
- **Error Exposure Control**: Limited error details in production environments
- **Logging Security**: Sensitive information omitted from logs

## 🔒 Privacy & Security

Sanicle Cloud prioritizes user privacy with the following measures:

- **Data Protection**: Enterprise-grade security for all sensitive health information
- **Compliance**: Adherence to relevant health data regulations
- **Secure Implementation**: Protection of all user data across the platform
- **Anonymized Analytics**: Ensuring individual health data remains private while providing valuable insights
- **AI Ethics**: Responsible use of IBM watsonx AI with transparency and privacy

## 📄 License

This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](LICENSE) file for details.

## 🙋‍♀ Author

**Chan Meng**
- <img src="https://cdn.simpleicons.org/linkedin/0A66C2" width="16" height="16"> LinkedIn: [chanmeng666](https://www.linkedin.com/in/chanmeng666/)
- <img src="https://cdn.simpleicons.org/github/181717" width="16" height="16"> GitHub: [ChanMeng666](https://github.com/ChanMeng666)

---

<div align="center">
Made with ❤️ for women's health in the workplace
<br/>
⭐ Star us on GitHub | 📖 Read the Docs | 🐛 Report an Issue
</div>
