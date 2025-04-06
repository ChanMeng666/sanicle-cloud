"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, BotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage, Message } from "./ChatMessage";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I'm Sanicle's AI assistant. How can I help you today?",
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 使用非流式API
  async function handleSubmitStandard(e: React.FormEvent) {
    e.preventDefault();
    
    if (input.trim() === "") return;
    
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          streaming: false,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response");
      }
      
      const data = await response.json();
      console.log("API response:", data); // 日志记录完整响应
      
      // 根据watsonx.ai返回的数据结构调整解析逻辑
      let assistantMessage = "Sorry, I couldn't process your request. Please try again.";
      
      // 根据错误信息添加日志
      if (data.error) {
        console.error("Error from API:", data.error, data.details);
        assistantMessage = `Error: ${data.error}`;
      } else {
        // 检查不同的可能响应结构
        if (data.results && data.results[0]?.generated_text) {
          assistantMessage = data.results[0].generated_text;
        } else if (data.generated_text) {
          assistantMessage = data.generated_text;
        } else if (data.result && data.result.generated_text) {
          assistantMessage = data.result.generated_text;
        } else if (data.choices && data.choices[0]?.message?.content) {
          assistantMessage = data.choices[0].message.content;
        }
      }
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantMessage },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, there was an error processing your request. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  // 使用流式API
  async function handleSubmitStreaming(e: React.FormEvent) {
    e.preventDefault();
    
    if (input.trim() === "") return;
    
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // 创建一个初始的AI响应消息
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "" },
    ]);
    
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          streaming: true,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response");
      }
      
      // 处理SSE响应
      const reader = response.body?.getReader();
      if (!reader) throw new Error("Response body is null");
      
      let partialResponse = "";
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        // 解码chunk
        const chunk = new TextDecoder().decode(value);
        console.log("Streaming chunk:", chunk); // 日志记录流式响应
        
        // 解析SSE数据
        const lines = chunk.split('\n');
        let parsedChunk = "";
        
        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const jsonData = JSON.parse(line.substring(5));
              if (jsonData.generated_text) {
                parsedChunk += jsonData.generated_text;
              } else if (jsonData.choices && jsonData.choices[0]?.delta?.content) {
                parsedChunk += jsonData.choices[0].delta.content;
              }
            } catch (e) {
              console.error("Failed to parse JSON from SSE", e);
            }
          }
        }
        
        // 更新partialResponse
        partialResponse += parsedChunk;
        
        // 更新最后一条消息
        setMessages((prev) => {
          const updatedMessages = [...prev];
          updatedMessages[updatedMessages.length - 1] = {
            role: "assistant",
            content: partialResponse,
          };
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // 更新错误消息
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1] = {
          role: "assistant",
          content: "Sorry, there was an error processing your request. Please try again later.",
        };
        return updatedMessages;
      });
    } finally {
      setIsLoading(false);
    }
  }

  // 使用标准API，如果实现流式API遇到问题，可以切换为handleSubmitStreaming
  const handleSubmit = handleSubmitStandard;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            size="icon" 
            className={cn(
              "h-14 w-14 rounded-full shadow-button hover:shadow-button-hover transition-all duration-300",
              "bg-primary hover:bg-primary-deep text-white",
              "flex items-center justify-center relative",
              !isOpen && "animate-bounce-subtle"
            )}
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform duration-300" />
            ) : (
              <div className="relative">
                <MessageSquare className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          side="top" 
          align="end" 
          className={cn(
            "w-[350px] sm:w-[450px] h-[500px] p-0 overflow-hidden flex flex-col",
            "border border-primary/20 shadow-card-hover rounded-xl",
            "animate-slide-up",
            isDarkTheme ? "bg-neutral-900" : "bg-white"
          )}
        >
          <div className={cn(
            "p-4 text-white font-semibold rounded-t-xl flex justify-between items-center",
            isDarkTheme 
              ? "bg-primary-deep" 
              : "bg-gradient-to-r from-primary to-primary-deep"
          )}>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span>Sanicle AI Assistant</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-white/20 rounded-full -mr-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className={cn(
            "flex-1 overflow-y-auto p-4 space-y-4",
            isDarkTheme ? "bg-neutral-800" : "bg-tertiary/20"
          )}>
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex w-full items-start gap-4">
                <Avatar className="h-8 w-8 ring-2 ring-primary/20 shadow-sm">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary-deep text-white">
                    <BotIcon className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <TypingIndicator />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className={cn(
            "p-4 border-t border-primary/10",
            isDarkTheme ? "bg-neutral-900" : "bg-white"
          )}>
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className={cn(
                  "flex-1 focus-visible:ring-primary focus-visible:border-primary rounded-lg",
                  isDarkTheme 
                    ? "bg-neutral-800 border-primary/30 text-white placeholder:text-neutral-400" 
                    : "border-primary/20"
                )}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || input.trim() === ""}
                className={cn(
                  "bg-primary hover:bg-primary-deep text-white rounded-lg",
                  "transition-all duration-300",
                  isLoading && "opacity-70"
                )}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className={cn(
              "text-[10px] mt-2 text-center",
              isDarkTheme ? "text-neutral-400" : "text-muted-foreground"
            )}>
              Powered by Sanicle AI | IBM watsonx.ai
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400 my-2 px-2">
      <div className="flex space-x-1">
        <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '300ms' }}></div>
        <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '600ms' }}></div>
      </div>
      <span className="text-xs text-primary dark:text-primary-light ai-assistant-typing">Sanicle AI is thinking</span>
    </div>
  );
} 