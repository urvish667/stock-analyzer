"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TopBar } from "@/components/top-bar"
import { SideDock } from "@/components/side-dock"
import { ThemeToggle } from "@/components/theme-toggle"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isDockOpen, setIsDockOpen] = useState(false)
  const [settings, setSettings] = useState({
    email: "",
    refreshInterval: "15min",
    language: "English",
  })

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  const handleSignOut = useCallback(() => {
    setIsLoggedIn(false)
    setIsDockOpen(false)
    router.push("/")
  }, [router])

  return (
    <div className="min-h-screen bg-background">
      <TopBar
        isLoggedIn={isLoggedIn}
        onSignOut={handleSignOut}
        onToggleDock={() => setIsDockOpen(!isDockOpen)}
        isDockOpen={isDockOpen}
      />

      <SideDock
        isOpen={isDockOpen}
        onClose={() => setIsDockOpen(false)}
        onNewTask={() => {
          setIsDockOpen(false)
          router.push("/")
        }}
      />

      <main className="pt-20 p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Settings</h1>

          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="theme">Theme</Label>
                <ThemeToggle />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Notification Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="refresh">Data Refresh Interval</Label>
                <Select
                  value={settings.refreshInterval}
                  onValueChange={(value) => setSettings({ ...settings, refreshInterval: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5min">5 minutes</SelectItem>
                    <SelectItem value="15min">15 minutes</SelectItem>
                    <SelectItem value="30min">30 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={settings.language}
                  onValueChange={(value) => setSettings({ ...settings, language: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Japanese">Japanese</SelectItem>
                    <SelectItem value="German">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleSave} className="w-full">
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
