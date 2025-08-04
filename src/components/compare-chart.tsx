"use client"

interface CompareChartProps {
  ticker1: string
  ticker2: string
}

export function CompareChart({ ticker1, ticker2 }: CompareChartProps) {
  return (
    <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
      <p className="text-muted-foreground">
        Comparison Chart: {ticker1} vs {ticker2}
      </p>
    </div>
  )
}
