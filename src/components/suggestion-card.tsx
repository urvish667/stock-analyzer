"use client"

import { Card, CardContent } from "@/components/ui/card"

interface SuggestionCardProps {
  query: string;
  onClick: () => void;
}

export function SuggestionCard({ query, onClick }: SuggestionCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:bg-muted/50 transition-colors h-full"
    >
      <CardContent className="p-4 flex items-center justify-center text-center">
        <p className="text-sm font-medium">{query}</p>
      </CardContent>
    </Card>
  )
}
