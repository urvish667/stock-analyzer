"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function RelatedStocks() {
  const router = useRouter()
  const relatedStocks = [
    { name: "Microsoft Corp.", ticker: "MSFT" },
    { name: "Google Inc.", ticker: "GOOGL" },
    { name: "Amazon Inc.", ticker: "AMZN" },
    { name: "Tesla Inc.", ticker: "TSLA" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Related Stocks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {relatedStocks.map((stock) => (
          <Button
            key={stock.ticker}
            variant="ghost"
            className="w-full justify-start"
            onClick={() => router.push(`/dashboard?stock=${stock.ticker}`)}
          >
            {stock.name} ({stock.ticker})
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
