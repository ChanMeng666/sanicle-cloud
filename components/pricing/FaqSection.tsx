"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "如何选择最适合我公司的计划？",
      answer:
        "选择计划时，主要考虑您的员工数量和所需的功能。入门版最适合小型企业（不超过50名员工），专业版适合需要更多功能的中型企业，而企业版则适合大型组织或有特殊需求的公司。您也可以联系我们的销售团队获取个性化建议。",
    },
    {
      question: "我可以随时更改我的订阅计划吗？",
      answer:
        "是的，您可以随时升级您的计划以获得更多功能。如果您需要降级，可以在当前订阅周期结束时进行更改。所有更改都会在您下一个计费周期生效。",
    },
    {
      question: "价格是基于什么计算的？",
      answer:
        "我们的价格是基于每位活跃员工按月计费的。活跃员工是指在您的组织中被添加到平台并有权访问服务的员工。您只需为使用平台的员工付费。",
    },
    {
      question: "是否提供免费试用？",
      answer:
        "是的，我们提供14天的免费试用，让您可以在做出决定前体验我们的平台。试用期间您可以访问所有专业版功能，无需信用卡信息。",
    },
    {
      question: "我的员工数据安全吗？",
      answer:
        "是的，我们将数据安全视为首要任务。我们采用行业标准的加密技术，遵守严格的隐私政策，并定期进行安全审计。我们的平台符合HIPAA和SOC 2 Type II标准，确保您员工的敏感健康数据得到最高级别的保护。",
    },
    {
      question: "我可以获得发票而不是在线支付吗？",
      answer:
        "企业版客户可以选择通过发票付款。对于其他计划，我们通常使用信用卡或其他在线支付方式进行自动计费，但如果您有特殊需求，请联系我们的销售团队讨论可能的安排。",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2c3e50]">常见问题</h2>
          <p className="text-[#7f8c8d] mt-2 max-w-2xl mx-auto">
            关于我们价格和订阅的常见问题解答。如果您有其他问题，请随时联系我们。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-1">
                <AccordionTrigger className="px-4 text-left font-medium text-[#2c3e50] hover:text-[#167d83]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 text-[#7f8c8d]">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10 bg-[#e6f5f6]/30 py-8 px-4 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">还有其他问题？</h3>
          <p className="text-[#7f8c8d] mb-4">
            我们的团队随时准备帮助您解答有关我们产品和价格的任何问题。
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#167d83] text-[#167d83] hover:bg-[#167d83] hover:text-white transition-colors"
            >
              联系销售
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#167d83] text-[#167d83] hover:bg-[#167d83] hover:text-white transition-colors"
            >
              查看文档
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 