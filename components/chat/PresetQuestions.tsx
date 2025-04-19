import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { HelpCircle, MessageSquareIcon, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the preset questions that will be displayed to visitors
const PRESET_QUESTIONS = [
  "What is Sanicle.cloud?",
  "When will Sanicle.cloud launch?",
  "How does Sanicle use IBM WatsonX.ai?",
  "What pricing plans does Sanicle offer?",
  "Who founded Sanicle?",
  "What problem is Sanicle trying to solve?",
  "What is the \"Buy One, Donate One\" model?",
  "Who is on Sanicle's leadership team?",
  "What benefits does Sanicle offer to employers?",
  "How secure is Sanicle's platform?"
];

// Define type for preset answers with string keys
export type PresetAnswerKey = typeof PRESET_QUESTIONS[number];

// Predefined answers for preset questions
export const PRESET_ANSWERS: Record<PresetAnswerKey, string> = {
  "What is Sanicle.cloud?": 
    "Sanicle.cloud is a B2B-B2G SaaS platform revolutionizing workplace health equity through AI-powered solutions that address critical gaps in menstrual and menopause health. The platform is designed to help employers improve workplace wellness and reduce productivity losses tied to menstrual and menopause-related absenteeism. We leverage IBM's WatsonX.ai technology to streamline access to menstrual health resources within the workplace, while empowering HR professionals to provide tailored, data-driven support for employee well-being and productivity.",

  "When will Sanicle.cloud launch?": 
    "According to our most recent roadmap, Sanicle.cloud's MVP beta launch is scheduled for April 2025. The platform has already garnered interest from 80+ enterprise clients and has a waitlist of 1,200+ users. Currently, we're piloting with IBM's 3,000-employee workforce, and moving forward with HIPAA compliance for health data handling. For the most current information on our launch timeline, please reach out to hello@sanicle.us.",

  "How does Sanicle use IBM WatsonX.ai?": 
    "Sanicle.cloud seamlessly integrates with IBM's WatsonX.ai foundation models, including cutting-edge tools like Granite and Merlinite. Our platform leverages WatsonX.ai in several ways:\n\n1. Enhanced data unification and analysis for tailored menstrual health support\n2. Providing deeper insights and support for women's health initiatives\n3. Powering our AI Chatbot for personalized health guidance\n4. Predictive analytics to help employers develop inclusive workplace policies\n5. Supporting decision-making for HR professionals with evidence-based insights\n\nThrough our IBM Build Lab Partnership, we've acquired product features to supercharge our AI capabilities with IBM Watson, making sophisticated AI techniques readily available to organizations of all sizes.",

  "What pricing plans does Sanicle offer?": 
    "Sanicle.cloud offers three main pricing tiers:\n\n**Basic: $10 per month/user**\n- Personalized Cycle Management\n- AI Chatbot - Ask Sani\n- Financial Wellness & Support\n\n**Premium: $15 per month/user**\n- Everything in Basic plus:\n- Educational Resources\n- Social Impact & Employee Rewards\n- Menstrual Syndrome Identification Support\n\n**Enterprise: Custom pricing**\n- Everything in Premium plus:\n- Personalized Training and Consulting\n- Custom Features\n\nFor larger organizations, we also offer employer subscriptions at $10K-50K/year (fixed tiers) and white-label custom solutions for large enterprises ($1K+/month).",

  "Who founded Sanicle?": 
    "Sanicle was founded by Chaste Inegbedion, a social entrepreneur and advocate, who initially launched Padman Africa in Nigeria. In 2021, Sanicle.cloud emerged to address systemic gaps in menstrual healthcare, and by 2024, pivoted to workplace wellness. Chaste is known as \"Mr. Padman\" and is a global leader in femtech, using his expertise in product management and social entrepreneurship to build inclusive, user-friendly solutions and establish key partnerships. Dr. Omopeju Afanu serves as the Chief Executive Officer, bringing her expertise as a passionate advocate for women's health with a user-first, insight-driven approach to product innovation.",

  "What problem is Sanicle trying to solve?": 
    "Sanicle addresses the critical gap in menstrual and menopause health support in workplace benefits. Studies show that 80% of employees who menstruate experience productivity losses related to their symptoms, costing employers $150 billion per year in workplace absenteeism. Despite this:\n\n- 25% of women consider quitting their jobs due to menopause and menstrual health struggles\n- Most employers have no data on how hormonal health affects their workforce\n- Employees face barriers such as out-of-pocket costs for basic healthcare supplies\n- Lack of inclusive policies that address menstrual and menopause care\n- Insufficient access to tailored healthcare resources\n\nDespite the $1.5 trillion self-funded employee health plan industry, menstrual and menopause health remains largely overlooked in workplace benefits, creating both health and business challenges with real financial consequences.",

  "What is the \"Buy One, Donate One\" model?": 
    "Sanicle's \"Buy One, Donate One\" model is a direct tie between product sales and social impact. For every product purchased, Sanicle donates menstrual kits to underserved communities. To date, we've matched 1.3 million products across Nigeria, Kenya, and underserved regions in the United States. This model is part of our broader commitment as a social enterprise that merges profit with purpose, reinvesting 100% of profits into eradicating period poverty and advancing menstrual health policies. The model supports our mission to ensure access to menstrual health education, sustainable products, and inclusive policies—bridging grassroots impact with global systemic change.",

  "Who is on Sanicle's leadership team?": 
    "Sanicle's leadership team includes:\n\n1. Dr. Omopeju Afanu - Chief Executive Officer (CEO)\n2. Chaste Inegbedion - Chief Product Officer (CPO)\n3. Daryll Hall - Chief AI Officer\n4. Cecilia Omole - Chief Operating Officer (COO)\n5. Gabby Hurst - Chief Experience Officer (CXO)\n6. Chan Meng - Senior AI/ML Infrastructure Engineer\n7. Chime Ifediniru - Chief Technology Officer (CTO)\n\nThe team brings diverse expertise in healthcare, AI/ML, product development, social entrepreneurship, and user experience design. 85% of the leadership team identifies as women, driving solutions rooted in lived experience. The company is also supported by an Advisory Board of visionaries in healthcare, AI, and ESG who guide long-term growth.",

  "What benefits does Sanicle offer to employers?": 
    "Sanicle offers employers numerous tangible benefits:\n\n- **Reduced Absenteeism**: We help reduce absenteeism by 20%, saving $7/hour per employee\n- **Workplace Analytics**: Integrated dashboards visualizing health-related productivity trends and absenteeism patterns\n- **HR Empowerment**: Predictive analytics to guide inclusive workplace policies\n- **Employee Retention**: Better support for menstrual and menopause health, reducing the 25% of women who consider quitting due to these issues\n- **Enhanced Benefits Package**: Attractive benefits that prioritize female well-being without vendor fatigue\n- **Policy & Benefits Support**: Help developing informed wellness strategies aligned with evolving employee needs\n- **Simplified Administration**: Hassle-free administration for HR teams with flexible, on-demand access to solutions\n- **AI-Powered Insights**: Using IBM WatsonX.ai for data-driven decision making and workforce management",

  "How secure is Sanicle's platform?": 
    "Sanicle prioritizes security and privacy with comprehensive measures including:\n\n- **HIPAA Compliance**: Currently underway for health data handling\n- **User Privacy**: HIPAA compliant for maximum privacy protection\n- **Consent**: No employer data sharing without employee consent\n- **Security**: Secure cloud storage with encryption\n- **Anonymity**: Anonymized data for insights, with consent\n- **Access**: Multi-factor authentication for secure access\n- **Control**: User control over data access, edits, and deletions\n\nThese security measures are outlined in the Product Requirements Document (PRD) and are essential for our platform that handles sensitive health information while still providing valuable insights for users and organizations."
};

// Additional categories of questions that could be shown if we expand
const QUESTION_CATEGORIES = {
  "About Sanicle": [
    "What is Sanicle.cloud?",
    "Who founded Sanicle?",
    "What is Sanicle's mission?"
  ],
  "Platform": [
    "When will Sanicle.cloud launch?",
    "How does Sanicle use IBM WatsonX.ai?",
    "How secure is Sanicle's platform?"
  ],
  "Benefits": [
    "What benefits does Sanicle offer to employers?",
    "What benefits does Sanicle provide for employees?",
    "What pricing plans does Sanicle offer?"
  ],
  "Impact": [
    "What problem is Sanicle trying to solve?",
    "What is the \"Buy One, Donate One\" model?",
    "What is the Period Passport Book?"
  ]
};

interface PresetQuestionsProps {
  onSelectQuestion: (question: string) => void;
  className?: string;
  isHidden: boolean;
  onToggleVisibility?: () => void;
}

export function PresetQuestions({ 
  onSelectQuestion, 
  className, 
  isHidden,
  onToggleVisibility 
}: PresetQuestionsProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  if (isHidden) {
    return (
      <div className="px-3 py-1.5 text-center border-b border-primary/10">
        <Button
          onClick={onToggleVisibility}
          variant="ghost"
          size="sm"
          className={cn(
            "text-xs inline-flex items-center gap-1 rounded-md py-1 h-auto",
            isDarkTheme 
              ? "text-primary-light hover:bg-neutral-700 hover:text-white" 
              : "text-primary hover:bg-primary/10"
          )}
        >
          <HelpCircle className="w-3 h-3" />
          <span>Show suggested questions</span>
        </Button>
      </div>
    );
  }

  return (
    <div className={cn(
      "py-3 px-3",
      "border-b border-primary/10",
      isDarkTheme ? "bg-neutral-800" : "bg-white/50",
      className
    )}>
      <div className={cn(
        "flex items-center justify-between mb-2 px-1",
      )}>
        <h3 className={cn(
          "text-xs font-medium flex items-center gap-1",
          isDarkTheme ? "text-white" : "text-primary"
        )}>
          <MessageSquare className="w-3 h-3" />
          <span>Suggested questions:</span>
        </h3>
        {onToggleVisibility && (
          <Button
            onClick={onToggleVisibility}
            variant="ghost"
            size="sm"
            className={cn(
              "h-6 w-6 p-0 rounded-full",
              isDarkTheme ? "text-neutral-400 hover:bg-neutral-700" : "text-slate-400 hover:bg-tertiary/30"
            )}
          >
            <span className="sr-only">Hide questions</span>
            <span aria-hidden="true">×</span>
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-2 max-h-[180px] overflow-y-auto pr-1 -mx-1 px-1">
        {PRESET_QUESTIONS.map((question, index) => (
          <button
            key={index}
            onClick={() => onSelectQuestion(question)}
            className={cn(
              "text-xs px-3 py-2 rounded-md text-left transition-all",
              "hover:bg-primary hover:text-white hover:shadow-md",
              "active:scale-98 transform duration-75",
              "flex items-start",
              isDarkTheme
                ? "bg-neutral-700/70 text-white/90 hover:text-white border border-neutral-600/50"
                : "bg-white text-slate-700 border border-primary/10 shadow-sm hover:border-primary/30"
            )}
          >
            <span className="leading-tight">{question}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 