"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart3, GitCompare, Search, PieChart, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface UseCase {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  examples: string[]
  category: "analysis" | "comparison" | "monitoring" | "research"
}

interface UseCaseCardsProps {
  onUseCaseClick: (example: string) => void
  className?: string
}

const USE_CASES: UseCase[] = [
  {
    id: "stock-analysis",
    title: "Stock Analysis",
    description: "Deep dive into individual stock performance and metrics",
    icon: TrendingUp,
    category: "analysis",
    examples: [
      "Analyze Apple's recent performance and key metrics",
      "What's driving Tesla's stock price movement this week?",
      "Show me Microsoft's financial health and growth prospects"
    ]
  },
  {
    id: "market-comparison",
    title: "Stock Comparison",
    description: "Compare multiple stocks across various metrics",
    icon: GitCompare,
    category: "comparison",
    examples: [
      "Compare Apple vs Microsoft performance over the last year",
      "Which is better: Tesla or Ford for long-term investment?",
      "Compare tech giants: Google, Amazon, and Meta"
    ]
  },
  {
    id: "sentiment-analysis",
    title: "Market Sentiment",
    description: "Understand market sentiment and social media buzz",
    icon: BarChart3,
    category: "analysis",
    examples: [
      "What's the current sentiment around NVIDIA stock?",
      "Show me social media buzz for GameStop",
      "Analyze news sentiment for cryptocurrency stocks"
    ]
  },
  {
    id: "stock-screening",
    title: "Stock Screening",
    description: "Find stocks based on specific criteria",
    icon: Search,
    category: "research",
    examples: [
      "Find undervalued tech stocks with strong fundamentals",
      "Show me dividend stocks with yield above 4%",
      "Which growth stocks have the best momentum?"
    ]
  },
  {
    id: "portfolio-analysis",
    title: "Portfolio Insights",
    description: "Analyze portfolio performance and diversification",
    icon: PieChart,
    category: "analysis",
    examples: [
      "Analyze my portfolio's sector allocation",
      "How is my portfolio performing vs S&P 500?",
      "Suggest portfolio rebalancing strategies"
    ]
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    description: "Evaluate investment risks and volatility",
    icon: AlertTriangle,
    category: "monitoring",
    examples: [
      "What are the main risks for investing in TSLA?",
      "Show me volatility analysis for my watchlist",
      "Assess market risk for tech sector investments"
    ]
  }
]

export function UseCaseCards({ onUseCaseClick, className }: UseCaseCardsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {USE_CASES.map((useCase) => {
        const IconComponent = useCase.icon
        return (
          <Card 
            key={useCase.id} 
            className="hover:shadow-lg transition-all duration-200 cursor-pointer group border-border/50 hover:border-primary/20"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Try asking:
                </p>
                <div className="space-y-1">
                  {useCase.examples.slice(0, 2).map((example, index) => (
                    <button
                      key={index}
                      onClick={() => onUseCaseClick(example)}
                      className="block w-full text-left text-xs text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted/50"
                    >
                      "{example}"
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export { USE_CASES }
export type { UseCase }