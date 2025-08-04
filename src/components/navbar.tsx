"use client"

import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const unreadCount = 3

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background border-b border-border">
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="text-xl font-semibold text-primary">StockSentiment</h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            {unreadCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {unreadCount}
              </Badge>
            )}
          </div>

          <ThemeToggle />

          <Avatar className="cursor-pointer">
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
