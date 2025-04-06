import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BotIcon, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { useTheme } from "next-themes";

// 定义消息类型
export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

// 优化markdown格式化以处理IBM watsonx.ai返回的各种markdown问题
function formatMarkdown(text: string): string {
  if (!text) return "";

  let formattedText = text;

  // 处理=====标题格式（==== 或者 -----下划线标题格式）变为 ## 标题
  formattedText = formattedText.replace(/\*\*(.*?)\*\*\s*\n=+/g, '## $1');
  formattedText = formattedText.replace(/\*\*(.*?)\*\*\s*\n-+/g, '### $1');

  // 处理列表项前缺少空格的问题
  formattedText = formattedText.replace(/^(\d+)\.([^\s])/gm, '$1. $2');
  formattedText = formattedText.replace(/^-([^\s])/gm, '- $1');

  // 处理错误的链接格式 [text](url 变为 [text](url)
  formattedText = formattedText.replace(/\[([^\]]+)\]\(([^)]+)(?!\))/g, '[$1]($2)');

  // 处理粗体文本中间的空格问题
  formattedText = formattedText.replace(/\*\* (.*?) \*\*/g, '**$1**');
  
  // 处理被引号包裹的代码块，将其转换为标准的代码块格式
  formattedText = formattedText.replace(/\"```([\s\S]*?)```\"/g, '```$1```');

  return formattedText;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full items-start gap-4",
        isUser
          ? "animate-zoom-in justify-end"
          : "animate-slide-up"
      )}
    >
      {!isUser && (
        <Avatar className={cn(
          "h-8 w-8 shadow-md",
          "ring-2 ring-primary/20",
          isDarkTheme ? "bg-primary-deep/80" : "bg-gradient-to-br from-primary to-primary-deep"
        )}>
          <AvatarFallback className="text-white">
            <BotIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "rounded-lg px-4 py-3 max-w-[85%]",
          isUser
            ? "bg-gradient-to-br from-primary/90 to-primary-deep text-white shadow-lg"
            : isDarkTheme 
              ? "bg-neutral-800 border border-neutral-700 text-white" 
              : "bg-white border border-primary/10 text-slate-700 shadow-sm"
        )}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 
                className={cn(
                  "text-2xl font-bold my-4",
                  isUser ? "text-white" : isDarkTheme ? "text-white" : "text-primary-deep"
                )} 
                {...props} 
              />
            ),
            h2: ({ node, ...props }) => (
              <h2 
                className={cn(
                  "text-xl font-bold my-3",
                  isUser ? "text-white" : isDarkTheme ? "text-white" : "text-primary-deep"
                )} 
                {...props} 
              />
            ),
            h3: ({ node, ...props }) => (
              <h3 
                className={cn(
                  "text-lg font-bold my-2",
                  isUser ? "text-white" : isDarkTheme ? "text-white" : "text-primary"
                )} 
                {...props} 
              />
            ),
            p: ({ node, ...props }) => (
              <p 
                className="my-2" 
                {...props} 
              />
            ),
            ul: ({ node, ...props }) => (
              <ul 
                className="list-disc pl-5 my-2" 
                {...props} 
              />
            ),
            ol: ({ node, ...props }) => (
              <ol 
                className="list-decimal pl-5 my-2" 
                {...props} 
              />
            ),
            li: ({ node, ...props }) => (
              <li 
                className="my-1" 
                {...props} 
              />
            ),
            a: ({ node, ...props }) => (
              <a 
                className={cn(
                  "underline hover:no-underline",
                  isUser 
                    ? "text-white/90 hover:text-white" 
                    : isDarkTheme 
                      ? "text-blue-300 hover:text-blue-200" 
                      : "text-blue-600 hover:text-blue-800"
                )}
                target="_blank"
                rel="noopener noreferrer" 
                {...props} 
              />
            ),
            code: ({ node, inline, ...props }: any) => (
              inline ? (
                <code 
                  className={cn(
                    "px-1 py-0.5 rounded text-sm font-mono",
                    isUser 
                      ? "bg-black/20 text-white" 
                      : isDarkTheme 
                        ? "bg-neutral-700 text-neutral-200" 
                        : "bg-neutral-100 text-primary-deep"
                  )}
                  {...props} 
                />
              ) : (
                <code 
                  className={cn(
                    "block p-3 rounded-md text-sm font-mono overflow-x-auto my-3",
                    isUser 
                      ? "bg-black/20 text-white" 
                      : isDarkTheme 
                        ? "bg-neutral-900 text-neutral-200 border border-neutral-700" 
                        : "bg-neutral-100 text-primary-deep border border-neutral-200"
                  )}
                  {...props} 
                />
              )
            ),
            pre: ({ node, ...props }) => (
              <pre 
                className={cn(
                  "my-4 rounded-md overflow-x-auto",
                  isUser 
                    ? "bg-black/20" 
                    : isDarkTheme 
                      ? "bg-neutral-900" 
                      : "bg-neutral-100"
                )}
                {...props} 
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote 
                className={cn(
                  "border-l-4 pl-4 my-4 italic",
                  isUser 
                    ? "border-white/30 text-white/90" 
                    : isDarkTheme 
                      ? "border-neutral-600 text-neutral-400" 
                      : "border-neutral-300 text-neutral-600"
                )}
                {...props} 
              />
            ),
            // 表格样式
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-4">
                <table 
                  className={cn(
                    "min-w-full divide-y rounded-md",
                    isUser 
                      ? "divide-white/20" 
                      : isDarkTheme 
                        ? "divide-neutral-700" 
                        : "divide-neutral-200"
                  )}
                  {...props} 
                />
              </div>
            ),
            thead: ({ node, ...props }) => (
              <thead 
                className={cn(
                  isUser 
                    ? "bg-black/10" 
                    : isDarkTheme 
                      ? "bg-neutral-800" 
                      : "bg-neutral-100"
                )}
                {...props} 
              />
            ),
            th: ({ node, ...props }) => (
              <th 
                className="px-4 py-2 text-left font-medium text-sm" 
                {...props} 
              />
            ),
            td: ({ node, ...props }) => (
              <td 
                className="px-4 py-2 text-sm border-t" 
                {...props} 
              />
            ),
            tr: ({ node, ...props }) => (
              <tr 
                className={cn(
                  isUser 
                    ? "border-t border-white/10" 
                    : isDarkTheme 
                      ? "border-t border-neutral-800" 
                      : "border-t border-neutral-200"
                )}
                {...props} 
              />
            ),
            // 强调
            strong: ({ node, ...props }) => (
              <strong 
                className="font-bold" 
                {...props} 
              />
            ),
            em: ({ node, ...props }) => (
              <em 
                className="italic" 
                {...props} 
              />
            ),
            hr: ({ node, ...props }) => (
              <hr 
                className={cn(
                  "my-4",
                  isUser 
                    ? "border-white/20" 
                    : isDarkTheme 
                      ? "border-neutral-700" 
                      : "border-neutral-200"
                )}
                {...props} 
              />
            ),
          }}
        >
          {formatMarkdown(message.content)}
        </ReactMarkdown>
      </div>
      
      {isUser && (
        <Avatar className={cn(
          "h-8 w-8 shadow-md",
          "ring-2 ring-secondary/30",
          isDarkTheme ? "bg-secondary/80" : "bg-gradient-to-br from-secondary/80 to-secondary"
        )}>
          <AvatarFallback className="text-white">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
} 