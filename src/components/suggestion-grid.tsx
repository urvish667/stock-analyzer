"use client"

import { SuggestionCard } from "./suggestion-card"

const suggestionQueries = [
  "What are the top-performing tech stocks this month?",
  "Show me the latest news on NVDA.",
  "Compare the financial health of Coca-Cola vs. PepsiCo.",
  "What is the current P/E ratio for Amazon?",
  "Give me a summary of the latest earnings report for Netflix.",
  "Analyze the volatility of Bitcoin in the last 30 days.",
  "What are the most traded stocks on the NYSE today?",
  "Find stocks with a dividend yield above 4%.",
  "Show me the price history for the S&P 500 index over the last year.",
]

interface SuggestionGridProps {
  onSuggestionClick: (query: string) => void
}

export function SuggestionGrid({ onSuggestionClick }: SuggestionGridProps) {
  return (
    <div className="w-full max-w-2xl mx-auto py-24">
      <h2 className="text-2xl font-bold text-center mb-8">Or try one of these examples</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {suggestionQueries.map((query) => (
          <SuggestionCard
            key={query}
            query={query}
            onClick={() => onSuggestionClick(query)}
          />
        ))}
      </div>
    </div>
  )
}
