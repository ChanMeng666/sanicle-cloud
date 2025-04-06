"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage, Message } from "./ChatMessage";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
            className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "h-6 w-6 transition-transform",
                isOpen ? "rotate-45" : ""
              )}
            >
              {isOpen ? (
                <line x1="18" y1="6" x2="6" y2="18" />
              ) : (
                <>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <line x1="9" y1="10" x2="15" y2="10" />
                  <line x1="12" y1="7" x2="12" y2="13" />
                </>
              )}
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          side="top" 
          align="end" 
          className="w-[350px] sm:w-[450px] h-[500px] p-0 overflow-hidden flex flex-col"
        >
          <div className="bg-primary p-4 text-primary-foreground font-semibold">
            Sanicle AI Assistant
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || input.trim() === ""}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
} 