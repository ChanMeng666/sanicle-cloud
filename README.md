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
  - [🧠 IBM watsonx AI Integration](#-ibm-watsonx-ai-integration)
    - [🤖 AI Chat Assistant](#-ai-chat-assistant)
    - [🔍 Intelligent Health Analytics](#-intelligent-health-analytics)
    - [🔗 Enterprise Integration](#-enterprise-integration)
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

## 🧠 IBM watsonx AI Integration

> [!HIGHLIGHT]
> **Sanicle Cloud is powered by IBM Cloud watsonx AI**, providing intelligent health assistance and personalized support for women's health in the workplace.

The platform features a cutting-edge AI integration that enhances the user experience in multiple ways:

### 🤖 AI Chat Assistant

- **24/7 Health Information**: Provides instant answers to women's health questions
- **Personalized Guidance**: Offers tailored advice based on individual health profiles
- **Markdown-Formatted Responses**: Clean, well-structured health information
- **Streaming Responses**: Real-time AI interaction with minimal latency
- **Privacy-Focused**: All conversations handled with enterprise-grade security

### 🔍 Intelligent Health Analytics

- **Pattern Recognition**: Identifies trends in health data to provide better support
- **Predictive Insights**: Anticipates health needs based on historical data
- **Custom Recommendations**: Suggests resources and accommodations based on individual needs

### 🔗 Enterprise Integration

- **HR System Connection**: Seamlessly integrates with existing HR infrastructure
- **Secure API Implementation**: Enterprise-grade security for all AI interactions
- **Scalable Architecture**: Handles growing user bases with consistent performance

Our IBM watsonx AI integration follows best practices for both technical implementation and ethical AI use, ensuring that all health information is accurate, private, and beneficial to users.

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
