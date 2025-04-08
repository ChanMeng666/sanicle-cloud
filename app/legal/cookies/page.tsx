import Link from "next/link";

export default function CookiePolicy() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Cookie 政策</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold mt-8 mb-4">什么是 Cookie?</h2>
        <p className="mb-4">
          Cookie 是存储在您的浏览器中的小型文本文件，
          它们使网站能够记住您的信息和偏好，比如登录状态、语言选择或字体大小等。
          Cookie 由网站创建并存储在您的设备上，当您再次访问同一网站时，您的浏览器会将这些 Cookie 发送回该网站。
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">我们如何使用 Cookie</h2>
        <p className="mb-4">
          我们使用 Cookie 来改善您在我们网站上的体验。这包括：
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>记住您的登录状态，避免每次访问都需要重新登录</li>
          <li>保存您的偏好设置和个性化选项</li>
          <li>收集关于网站使用情况的统计数据，帮助我们改进网站功能</li>
          <li>提供与您兴趣相关的内容和广告</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">我们使用的 Cookie 类型</h2>
        
        <h3 className="text-lg font-medium mt-6 mb-2">必要 Cookie</h3>
        <p className="mb-4">
          这些 Cookie 对网站的基本功能是必需的，不能被禁用。它们通常只在您执行某些操作（如设置隐私偏好、登录或填写表单）时设置。
          它们不存储任何可以识别您身份的信息。
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">功能性 Cookie</h3>
        <p className="mb-4">
          这些 Cookie 使网站能够提供增强的功能和个性化设置。它们可能由我们或我们页面上集成的第三方服务提供商设置。
          如果您不允许这些 Cookie，部分或全部服务可能无法正常工作。
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">分析 Cookie</h3>
        <p className="mb-4">
          这些 Cookie 帮助我们了解访问者如何与我们的网站互动，收集匿名统计数据来改进网站性能。
          它们通过收集和报告信息来帮助我们了解哪些页面最受欢迎，哪些页面访问量低，以及访问者如何在网站上导航。
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">广告 Cookie</h3>
        <p className="mb-4">
          这些 Cookie 用于跟踪您在网站上的浏览习惯，以便向您展示相关的个性化广告。
          它们还用于限制您看到广告的次数，以及帮助衡量广告活动的效果。
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">管理您的 Cookie 偏好</h2>
        <p className="mb-4">
          您可以随时通过点击网站底部的"管理 Cookie"链接来更改您的 Cookie 偏好。
          此外，大多数网络浏览器允许您通过浏览器设置控制 Cookie。请查阅您的浏览器帮助页面以了解如何管理 Cookie。
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">联系我们</h2>
        <p className="mb-4">
          如果您对我们的 Cookie 政策有任何疑问，请通过以下方式与我们联系：
        </p>
        <p>
          <Link href="/company/contact" className="text-primary hover:underline">
            联系我们
          </Link>
        </p>
        
        <p className="mt-8 text-sm text-gray-500">
          最后更新时间：2023年10月1日
        </p>
      </div>
    </div>
  );
} 