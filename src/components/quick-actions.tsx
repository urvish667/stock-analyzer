"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface QuickActionsProps {
  isFavorite: boolean
  onToggleFavorite: () => void
}

export function QuickActions({ isFavorite, onToggleFavorite }: QuickActionsProps) {
  const router = useRouter()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="outline" className="w-full bg-transparent" onClick={() => router.push("/compare")}>
          Compare vs...
        </Button>
        <Button variant="outline" className="w-full bg-transparent" onClick={onToggleFavorite}>
          {isFavorite ? "Remove from Watchlist" : "Add to Watchlist"}
        </Button>
        <Button variant="outline" className="w-full bg-transparent">
          Set Alert
        </Button>
      </CardContent>
    </Card>
  )
}
