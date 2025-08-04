"use client"

import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={cn("flex", message.isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-xs lg:max-w-md xl:max-w-lg rounded-lg p-3 shadow-sm",
          message.isUser 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground border border-border"
        )}
      >
        <div className="text-sm whitespace-pre-wrap">{message.content}</div>
      </div>
    </div>
  )
}
