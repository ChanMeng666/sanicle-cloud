"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, X, MessageSquare, BotIcon, Loader2, RefreshCw, Maximize2, Minimize2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage, Message } from "./ChatMessage";
import { PresetQuestions, PRESET_ANSWERS, PresetAnswerKey } from "./PresetQuestions";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { Textarea } from "@/components/ui/textarea";

export function ChatWidget({
  isCollapsed,
  toggleCollapsed,
  className,
}: {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  className?: string;
}) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPresetQuestions, setShowPresetQuestions] = useState(true);
  const { theme } = useTheme();
  const [messages, setMessages] = useState<{ role: "user" | "assistant", content: string }[]>([]);
  const [content, setContent] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isDarkTheme = theme === "dark";
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const togglePresetQuestions = useCallback(() => {
    setShowPresetQuestions((prev) => !prev);
  }, []);

  const handleSelectPresetQuestion = useCallback((question: string) => {
    const userMessage: Message = { role: "user", content: question };
    setMessages(prev => [...prev, userMessage]);
    
    if (Object.keys(PRESET_ANSWERS).includes(question)) {
      const presetQuestion = question as PresetAnswerKey;
      const assistantMessage: Message = { 
        role: "assistant", 
        content: PRESET_ANSWERS[presetQuestion]
      };
      
      setTimeout(() => {
        setMessages(prev => [...prev, assistantMessage]);
      }, 500);
      
      setShowPresetQuestions(false);
    } else {
      setInput(question);
    }
  }, []);

  const handleSendMessage = async (messageText: string) => {
    if (messageText.trim() === "" || isLoading) return;
    
    const userMessage: Message = { role: "user", content: messageText };
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
      console.log("Response data:", data);
      
      let assistantContent = "Sorry, I couldn't process your request. Please try again.";
      
      if (data.error) {
        console.error("Error from API:", data.error, data.details);
        assistantContent = `Error: ${data.error}`;
      } 
      else if (data.generated_text) {
        assistantContent = data.generated_text;
      }
      else if (data.choices && data.choices.length > 0) {
        const choice = data.choices[0];
        if (choice.message && choice.message.content) {
          assistantContent = choice.message.content;
        } else if (choice.text) {
          assistantContent = choice.text;
        }
      }
      else if (typeof data === 'string') {
        assistantContent = data;
      }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSendMessage(input);
  };

  const clear = useCallback(() => {
    setMessages([]);
    setInput("");
    setShowPresetQuestions(true);
  }, []);

  // If collapsed, just show the chat button
  if (isCollapsed) {
    return (
      <button
        onClick={toggleCollapsed}
        className={cn(
          "fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full",
          "bg-primary text-primary-foreground flex items-center justify-center",
          "shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50",
          className
        )}
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    );
  }
  
  // Expanded chat interface
  return (
    <div className={cn(
      "fixed bottom-5 right-5 z-50 w-[380px] max-w-[95vw]",
      "rounded-2xl flex flex-col shadow-xl",
      "h-[550px] max-h-[80vh]",
      "bg-background border border-border",
      className
    )}>
      {/* Header */}
      <div 
        className={cn(
          "flex items-center justify-between p-4",
          "bg-primary text-primary-foreground rounded-t-2xl"
        )}
      >
        <div className="flex items-center space-x-3">
          <BotAvatar />
          <div>
            <p className="font-semibold">
              Sanicle AI Assistant
            </p>
            <p className="text-xs opacity-90">
              Ask me anything about Sanicle
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={clear}
            className="h-8 w-8 p-0"
            variant="ghost"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Reset conversation</span>
          </Button>
          <Button
            onClick={toggleCollapsed}
            className="h-8 w-8 p-0"
            variant="ghost"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>

      {/* Chat messages area with proper scrolling */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 scroll-smooth"
      >
        {messages.length === 0 ? (
          <div className="flex flex-col h-full">
            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-center">
                Welcome to Sanicle AI Assistant
              </h3>
              <p className="text-muted-foreground text-sm text-center">
                Get immediate answers about Sanicle's platform, benefits, and services.
              </p>
            </div>
            
            <PresetQuestions
              isHidden={!showPresetQuestions}
              onSelectQuestion={handleSelectPresetQuestion}
              onToggleVisibility={togglePresetQuestions}
              className="mt-2"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <ChatMessage 
                key={`${message.role}-${index}`}
                message={message}
              />
            ))}
            {isLoading && (
              <ChatMessage
                message={{
                  role: "assistant",
                  content: content || "Thinking..."
                }}
                isLoading={true}
              />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-4 border-t">
        {messages.length > 0 && !isLoading && showPresetQuestions && (
          <PresetQuestions
            isHidden={false}
            onSelectQuestion={handleSelectPresetQuestion}
            onToggleVisibility={togglePresetQuestions}
            className="mb-3 -mx-1"
          />
        )}
        <form onSubmit={handleSubmit} className="flex gap-2 items-end">
          <Textarea
            disabled={isLoading}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Sanicle..."
            className="resize-none flex-1 py-2 px-3 min-h-[44px] max-h-[120px]"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
          />
          <Button
            disabled={isLoading || !input.trim()}
            type="submit"
            size="icon"
            className="h-[44px] w-[44px] shrink-0"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
        {messages.length > 0 && !showPresetQuestions && (
          <Button
            onClick={togglePresetQuestions}
            variant="ghost"
            size="sm"
            className="text-xs mt-2 h-auto py-1 w-full text-muted-foreground hover:text-foreground gap-1.5"
          >
            <HelpCircle className="h-3 w-3" />
            <span>Show suggested questions</span>
          </Button>
        )}
      </div>
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

function BotAvatar() {
  return (
    <Avatar className="h-10 w-10 ring-2 ring-primary/20 shadow-sm">
      <AvatarFallback className="bg-gradient-to-br from-primary to-primary-deep text-white">
        <BotIcon className="h-5 w-5" />
      </AvatarFallback>
    </Avatar>
  );
} 