"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, BotIcon, Loader2 } from "lucide-react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === "" || isLoading) return;
    
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      // Send all conversation history for better context
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
      console.log("Response data:", data); // Debug the response
      
      // Extract the assistant message from IBM watsonx AI response format
      let assistantContent = "Sorry, I couldn't process your request. Please try again.";
      
      // Check for error message from API
      if (data.error) {
        console.error("Error from API:", data.error, data.details);
        assistantContent = `Error: ${data.error}`;
      } 
      // 处理不同格式的API响应
      else if (data.generated_text) {
        assistantContent = data.generated_text;
      }
      // 如果响应包含choices数组（OpenAI格式）
      else if (data.choices && data.choices.length > 0) {
        const choice = data.choices[0];
        if (choice.message && choice.message.content) {
          assistantContent = choice.message.content;
        } else if (choice.text) {
          assistantContent = choice.text;
        }
      }
      // 如果响应直接包含文本内容
      else if (typeof data === 'string') {
        assistantContent = data;
      }
      // 如果响应是直接从watsonx.ai传回的
      else if (data.results && data.results.length > 0) {
        assistantContent = data.results[0].generated_text || data.results[0].content || assistantContent;
      }
      
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: assistantContent
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
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
  };

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
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
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