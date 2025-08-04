"use client"

import React from "react"
import { Mic, MicOff, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"


export function InputComponent({
  className = "",
  textareaRef,
  stockQuery,
  handleInputChange,
  handleKeyPress,
  toggleListening,
  handleSearch,
  isListening,
  isLoading,
}: {
  className?: string
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  stockQuery: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleKeyPress: (e: React.KeyboardEvent) => void
  toggleListening: () => void
  handleSearch: () => void
  isListening: boolean
  isLoading: boolean
}) {
  return (
    <div className={cn("relative w-full max-w-2xl", className)}>
      <Textarea
        ref={textareaRef}
        placeholder="Type ticker or company name, e.g. AAPL or Reliance Industries"
        value={stockQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="pr-20 max-h-[150px] resize-none text-base rounded-xl shadow-md border border-input bg-background"
        rows={3}
      />

      <Button
        variant="ghost"
        size="icon"
        className={cn("absolute bottom-2 right-12 h-8 w-8", isListening && "text-red-500 animate-pulse")}
        onClick={toggleListening}
      >
        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
      </Button>

      <Button
        size="icon"
        className="absolute bottom-2 right-2 h-8 w-8"
        onClick={handleSearch}
        disabled={!stockQuery?.trim() || isLoading}
      >
        <Send className="h-4 w-4" />
      </Button>

      {isListening && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      )}
    </div>
  )
}
