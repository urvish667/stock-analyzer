"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function StockChart() {
  const [timeRange, setTimeRange] = useState("1D")
  const timeRanges = ["1D", "1W", "1M", "1Y"]

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {timeRanges.map((range) => (
          <Button
            key={range}
            variant={timeRange === range ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeRange(range)}
          >
            {range}
          </Button>
        ))}
      </div>
      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Stock Price Chart ({timeRange})</p>
      </div>
    </div>
  )
}
