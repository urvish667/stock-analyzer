"use client"

import { ChevronDown } from "lucide-react"

export function ScrollDownArrow() {
  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
      <p className="text-sm text-muted-foreground">Scroll for examples</p>
      <div className="animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </div>
  )
}
