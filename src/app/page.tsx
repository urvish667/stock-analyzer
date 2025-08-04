"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { TopBar } from "@/components/top-bar"
import { SideDock } from "@/components/side-dock"
import { ChatMessage } from "@/components/chat-message"
import { InputComponent } from "@/components/input-component"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export default function LandingPage() {
  const [stockQuery, setStockQuery] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isDockOpen, setIsDockOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSearch = useCallback(async () => {
    if (stockQuery.trim()) {
      // Add user message
      const userMessage: Message = {
        id: Date.now().toString(),
        content: stockQuery,
        isUser: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setIsLoading(true)

      // Clear input
      const query = stockQuery
      setStockQuery("")

      // Simulate API response
      setTimeout(() => {
        const systemMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `Here's the analysis for ${query}:\n\n📈 **Current Price**: $175.43 (+2.34%)\n💭 **Sentiment**: Positive (0.65/1.0)\n📊 **Volume**: 45.2M\n🎯 **Recommendation**: BUY\n\nThe stock shows strong bullish momentum with positive market sentiment. Recent earnings beat expectations by 12%.`,
          isUser: false,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, systemMessage])
        setIsLoading(false)
      }, 2000)
    }
  }, [stockQuery])

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSearch()
      }
    },
    [handleSearch],
  )

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStockQuery(e.target.value)
  }, [])

  const toggleListening = useCallback(() => {
    setIsListening(!isListening)
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false)
        setStockQuery("Apple Inc. AAPL")
      }, 3000)
    }
  }, [isListening])

  const handleSignOut = useCallback(() => {
    setIsLoggedIn(false)
    setIsDockOpen(false)
    setMessages([])
  }, [])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + "px"
    }
  }, [stockQuery])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const suggestions = ['Try "Show me Tesla"', "Compare Microsoft vs Google", "What's TCS doing today?"]
  const userName = isLoggedIn ? "John Doe" : null
  const hasMessages = messages.length > 0

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopBar
        isLoggedIn={isLoggedIn}
        onSignOut={handleSignOut}
        onToggleDock={() => setIsDockOpen(!isDockOpen)}
        isDockOpen={isDockOpen}
      />

      <SideDock
        isOpen={isDockOpen}
        onClose={() => setIsDockOpen(false)}
        onNewTask={() => {
          setIsDockOpen(false)
          setMessages([])
          setStockQuery("")
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {!hasMessages ? (
          // Initial Welcome Screen with Centered Input - Absolute Center
          <div className="fixed inset-0 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl space-y-8">
              <div className="text-left space-y-4">
                <h1 className="text-4xl font-bold text-foreground font-space-grotesk">Hello {userName || "Guest"}</h1>
                <p className="text-2xl text-muted-foreground font-space-grotesk">
                  What stock can I analyze for you today?
                </p>
              </div>

              {/* Centered Input */}
              <div className="flex justify-center">
                <InputComponent
                  textareaRef={textareaRef}
                  stockQuery={stockQuery}
                  handleInputChange={handleInputChange}
                  handleKeyPress={handleKeyPress}
                  toggleListening={toggleListening}
                  handleSearch={handleSearch}
                  isListening={isListening}
                  isLoading={isLoading}
                />
              </div>

              <div className="text-center">
                <TypewriterEffect texts={suggestions} />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Chat Messages - Flows under top bar */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 pt-20 pb-18">
              <div className="max-w-2xl mx-auto space-y-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-4 max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Bottom Input - Only shown when chat has started */}
            <div className="fixed bottom-0 left-0 w-full bg-background p-4 shadow-md z-10">
              <div className="max-w-2xl mx-auto flex justify-center">
                <InputComponent
                  textareaRef={textareaRef}
                  stockQuery={stockQuery}
                  handleInputChange={handleInputChange}
                  handleKeyPress={handleKeyPress}
                  toggleListening={toggleListening}
                  handleSearch={handleSearch}
                  isListening={isListening}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
