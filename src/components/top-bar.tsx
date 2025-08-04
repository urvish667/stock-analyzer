"use client"

import { Bell, User, CreditCard, Crown, LayoutPanelLeft, Settings, Home, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

interface TopBarProps {
  isLoggedIn: boolean
  onSignOut?: () => void
  onToggleDock?: () => void
  isDockOpen?: boolean
}

export function TopBar({ isLoggedIn, onSignOut, onToggleDock, isDockOpen }: TopBarProps) {
  const router = useRouter()
  const unreadCount = 3
  const credits = 150
  const userEmail = "john.doe@example.com"
  const userName = "John Doe"
  const accountType = "free"

  if (!isLoggedIn) {
    return (
      <>
        {/* Website Name - Left Corner */}
        <div className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
          <h1 className="text-xl font-semibold text-primary font-libre-baskerville">BearBullLens</h1>
        </div>

        {/* Auth Buttons - Right Corner */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <Button variant="outline" onClick={() => router.push("/signin")}>
            Sign In
          </Button>
          <Button onClick={() => router.push("/signup")}>Sign Up</Button>
        </div>
      </>
    )
  }

  return (
    <>
      {/* Fixed Top Bar Background - No bottom border */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm z-40" />

      {/* Left Side - Website Name and Dock Button */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-3">
        <div className="relative">
          <Button variant="ghost" size="icon" onMouseEnter={() => onToggleDock && onToggleDock()} className="h-8 w-8">
            <LayoutPanelLeft className="h-5 w-5" />
          </Button>
        </div>
        <h1 className="text-xl font-semibold text-primary font-libre-baskerville">BearBullLens</h1>
      </div>

      {/* Right Side - User Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        {/* Bell Icon */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="rounded-full">
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

        {/* Credits & Upgrade */}
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 border">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">{credits}</span>
          {accountType === "free" && (
            <Button size="sm" variant="outline" className="h-6 text-xs bg-transparent">
              <Crown className="h-3 w-3 mr-1" />
              Upgrade
            </Button>
          )}
        </div>

        {/* User Avatar Menu - Made Bigger */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-12 w-12 rounded-full">
              <Avatar className="h-12 w-12">
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userName}</p>
                <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={accountType === "free" ? "secondary" : "default"}>{accountType.toUpperCase()}</Badge>
                  {accountType === "free" && (
                    <Button size="sm" variant="outline" className="h-5 text-xs bg-transparent">
                      Upgrade
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{credits} credits remaining</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/account")}>
              <User className="mr-2 h-4 w-4" />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/")}>
              <Home className="mr-2 h-4 w-4" />
              Home Page
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              Get Help
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={onSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
