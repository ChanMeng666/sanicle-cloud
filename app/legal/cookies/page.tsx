import Link from "next/link";
import { ManageCookies } from "@/components/cookie/ManageCookies";

export default function CookiePolicy() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold mt-8 mb-4">What are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files stored in your browser that enable websites to remember your information and preferences,
          such as login status, language selection, or font size.
          Cookies are created by websites and stored on your device, and when you visit the same website again, your browser sends these cookies back to the site.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies to improve your experience on our website. This includes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Remembering your login status, avoiding the need to log in each time you visit</li>
          <li>Saving your preferences and personalization options</li>
          <li>Collecting statistics about website usage to help us improve functionality</li>
          <li>Providing content and advertisements relevant to your interests</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Essential Cookies</h3>
        <p className="mb-4">
          These cookies are necessary for the basic functionality of the website and cannot be disabled. They are typically only set in response to actions you take
          (such as setting privacy preferences, logging in, or filling out forms).
          They do not store any information that can identify you personally.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Functional Cookies</h3>
        <p className="mb-4">
          These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
          If you do not allow these cookies, some or all of these services may not function properly.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Analytics Cookies</h3>
        <p className="mb-4">
          These cookies help us understand how visitors interact with our website by collecting and reporting anonymous statistical data to improve site performance.
          They help us understand which pages are the most popular, which pages have low traffic, and how visitors navigate around the site.
        </p>
        
        <h3 className="text-lg font-medium mt-6 mb-2">Advertising Cookies</h3>
        <p className="mb-4">
          These cookies are used to track your browsing habits to enable us to show you relevant personalized advertisements.
          They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Managing Your Cookie Preferences</h2>
        <p className="mb-4">
          You can change your cookie preferences at any time by clicking on the "Manage Cookies" link at the bottom of the website.
          Additionally, most web browsers allow you to control cookies through their browser settings. Please check your browser's help pages to learn how to manage cookies.
        </p>
        
        <div className="mt-6 mb-8 p-4 bg-muted/20 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Manage Your Cookie Settings</h3>
          <p className="mb-4">You can review and change your cookie preferences at any time:</p>
          <ManageCookies />
        </div>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Cookie Policy, please contact us at:
        </p>
        <p>
          <Link href="/company/contact" className="text-primary hover:underline">
            Contact Us
          </Link>
        </p>
        
        <p className="mt-8 text-sm text-gray-500">
          Last updated: April 8, 2025
        </p>
      </div>
    </div>
  );
} 