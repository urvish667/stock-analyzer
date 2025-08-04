"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SuggestionQuery {
  id: string
  text: string
  category: "trending" | "analysis" | "comparison" | "quick"
}

interface SuggestionQueriesProps {
  onQueryClick: (query: string) => void
  className?: string
  variant?: "default" | "compact"
}

const SUGGESTION_QUERIES: SuggestionQuery[] = [
  // Trending queries
  { id: "trending-1", text: "What's moving the market today?", category: "trending" },
  { id: "trending-2", text: "Show me top gainers in tech sector", category: "trending" },
  { id: "trending-3", text: "Analyze NVIDIA's recent earnings impact", category: "trending" },
  
  // Analysis queries
  { id: "analysis-1", text: "Is Apple stock overvalued right now?", category: "analysis" },
  { id: "analysis-2", text: "Analyze Tesla's growth prospects", category: "analysis" },
  { id: "analysis-3", text: "What's driving Microsoft's performance?", category: "analysis" },
  
  // Comparison queries
  { id: "comparison-1", text: "Compare Amazon vs Google stock", category: "comparison" },
  { id: "comparison-2", text: "Tesla vs Ford: which is better?", category: "comparison" },
  { id: "comparison-3", text: "Compare all major tech stocks", category: "comparison" },
  
  // Quick queries
  { id: "quick-1", text: "Show me S&P 500 performance", category: "quick" },
  { id: "quick-2", text: "What's Bitcoin doing today?", category: "quick" },
  { id: "quick-3", text: "Find dividend stocks above 5%", category: "quick" }
]

const CATEGORY_COLORS = {
  trending: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
  analysis: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  comparison: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  quick: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
}

export function SuggestionQueries({ 
  onQueryClick, 
  className, 
  variant = "default" 
}: SuggestionQueriesProps) {
  // Show different queries based on variant
  const displayQueries = variant === "compact" 
    ? SUGGESTION_QUERIES.slice(0, 6) 
    : SUGGESTION_QUERIES

  return (
    <div className={cn("space-y-4", className)}>
      {variant === "default" && (
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            Try these popular queries
          </h3>
          <p className="text-sm text-muted-foreground">
            Click on any suggestion to get started with your stock analysis
          </p>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 justify-center">
        {displayQueries.map((query) => (
          <Button
            key={query.id}
            variant="outline"
            size={variant === "compact" ? "sm" : "default"}
            onClick={() => onQueryClick(query.text)}
            className={cn(
              "transition-all duration-200 hover:scale-105",
              CATEGORY_COLORS[query.category]
            )}
          >
            {query.text}
          </Button>
        ))}
      </div>
      
      {variant === "default" && (
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Or type your own question about stocks, markets, or investments
          </p>
        </div>
      )}
    </div>
  )
}

export { SUGGESTION_QUERIES }
export type { SuggestionQuery }