"use client"

import { Button } from "@/components/ui/button"
import { SuggestionQueries } from "@/components/suggestion-queries"
import { cn } from "@/lib/utils"

interface QuickActionsBarProps {
  onQueryClick: (query: string) => void
  className?: string
  isVisible?: boolean
}

const FOLLOW_UP_QUERIES = [
  "Show me more details",
  "Compare with competitors", 
  "What's the market sentiment?",
  "Analyze the risks",
  "Show technical indicators",
  "Get price targets"
]

export function QuickActionsBar({ 
  onQueryClick, 
  className, 
  isVisible = true 
}: QuickActionsBarProps) {
  if (!isVisible) return null

  return (
    <div className={cn(
      "border-t border-border bg-background/95 backdrop-blur-sm p-4",
      className
    )}>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {FOLLOW_UP_QUERIES.map((query, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => onQueryClick(query)}
              className="text-xs hover:scale-105 transition-all duration-200"
            >
              {query}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export { FOLLOW_UP_QUERIES }