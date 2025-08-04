"use client"

import { Home, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BarChart3, label: "My Stocks", path: "/watchlist" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ]

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-60 bg-background border-r border-border">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path

          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "ghost"}
              className={cn("w-full justify-start gap-3", isActive && "bg-primary text-primary-foreground")}
              onClick={() => router.push(item.path)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          )
        })}
      </nav>
    </aside>
  )
}
