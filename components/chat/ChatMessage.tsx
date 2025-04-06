import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BotIcon, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

// 定义消息类型
export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 p-4",
        isUser ? "justify-end" : ""
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-white">
            <BotIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "rounded-lg px-4 py-3 max-w-[80%]",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        {isUser ? (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="text-sm markdown-content prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-lg font-bold mt-2 mb-2" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-md font-bold mt-2 mb-2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-base font-semibold mt-2 mb-1" {...props} />,
                p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                a: ({ node, ...props }) => <a className="text-blue-600 underline" {...props} />,
                code: ({ node, className, children, ...props }: any) => {
                  const isInline = !className;
                  if (isInline) {
                    return <code className="bg-gray-200 dark:bg-gray-800 px-1 py-0.5 rounded" {...props}>{children}</code>;
                  }
                  return (
                    <pre className="bg-gray-200 dark:bg-gray-800 p-2 rounded mb-2 overflow-auto">
                      <code className="text-xs" {...props}>{children}</code>
                    </pre>
                  );
                },
                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-3 italic mb-2" {...props} />,
                table: ({ node, ...props }) => <table className="border-collapse w-full mb-2" {...props} />,
                th: ({ node, ...props }) => <th className="border border-gray-300 p-2 bg-gray-100 dark:bg-gray-700" {...props} />,
                td: ({ node, ...props }) => <td className="border border-gray-300 p-2" {...props} />,
              }}
            >
              {formatMarkdown(message.content)}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-white">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

// 转换不标准的markdown格式
function formatMarkdown(text: string): string {
  // 替换类似 **标题** ===== 的模式为正确的 ## 标题
  text = text.replace(/\*\*(.*?)\*\*\s*=+/g, '## $1');
  
  // 替换已经存在的星号列表项但没有空格的 (*text) 为正确的 (* text)
  text = text.replace(/\*\s*([^\s])/g, '* $1');
  
  // 确保标题后有换行
  text = text.replace(/(#{1,6}.*?)(?:\n|$)/g, '$1\n\n');
  
  // 确保列表项之间有适当的空格
  text = text.replace(/(\* .*?)(?:\n)(?!\n)(?=\*)/g, '$1\n');
  
  // 替换错误的标题格式，如 **标题**，改为 ## 标题
  text = text.replace(/^\*\*(.*?)\*\*$/mg, '## $1');
  
  // 处理常见的错误列表格式
  text = text.replace(/^[ \t]*\*[ \t]*(.*?)$/mg, '* $1');
  
  // 修复没有空格的破折号列表
  text = text.replace(/^[ \t]*-([^\s])/mg, '- $1');
  
  // 修复紧凑的列表项，确保它们有换行
  text = text.replace(/(\n[*-] .*?)(\n[*-] )/g, '$1\n$2');
  
  // 处理数字列表没有空格的情况
  text = text.replace(/^(\d+)\.([^\s])/mg, '$1. $2');
  
  // 修复错误的链接格式
  text = text.replace(/\[(.*?)\]\s*\((.*?)\)/g, '[$1]($2)');
  
  // 处理错误的粗体格式
  text = text.replace(/\*{3,}(.*?)\*{3,}/g, '**$1**');
  
  // 处理使用引号包裹的代码块，将其转换为适当的代码格式
  text = text.replace(/\"```([\s\S]*?)```\"/g, '```$1```');
  
  return text;
} 