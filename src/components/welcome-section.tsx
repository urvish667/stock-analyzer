"use client"

import { UseCaseCards } from "@/components/use-case-cards"
import { SuggestionQueries } from "@/components/suggestion-queries"
import { cn } from "@/lib/utils"

interface WelcomeSectionProps {
  userName?: string | null
  onQuerySelect: (query: string) => void
  className?: string
}

export function WelcomeSection({ 
  userName, 
  onQuerySelect, 
  className 
}: WelcomeSectionProps) {
  return (
    <div className={cn("w-full max-w-6xl space-y-12", className)}>
      {/* Welcome Header */}
      <div className="text-left space-y-4">
        <h1 className="text-4xl font-bold text-foreground font-space-grotesk">
          Hello {userName || "Guest"}
        </h1>
        <p className="text-xl text-muted-foreground font-space-grotesk max-w-2xl mx-auto">
          I'm your AI-powered stock market analyst. Ask me anything about stocks, 
          market trends, or investment strategies.
        </p>
      </div>

      {/* Use Case Cards */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            What can I help you with?
          </h2>
          <p className="text-muted-foreground">
            Choose from these popular analysis types or ask your own question
          </p>
        </div>
        <UseCaseCards onUseCaseClick={onQuerySelect} />
      </div>

      {/* Quick Suggestions */}
      <div className="space-y-6">
        <SuggestionQueries 
          onQueryClick={onQuerySelect} 
          variant="default"
        />
      </div>
    </div>
  )
}