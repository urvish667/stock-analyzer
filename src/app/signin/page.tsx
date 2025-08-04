"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TopBar } from "@/components/top-bar"
import Link from "next/link"

export default function SignInPage({ onLoginSuccess }: { onLoginSuccess?: () => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email sign in - redirect to home with logged in state
    window.location.href = "/"
    onLoginSuccess()
  }

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    window.location.href = "/"
    onLoginSuccess()
  }

  const handleAppleSignIn = () => {
    // Handle Apple sign in
    window.location.href = "/"
    onLoginSuccess()
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar isLoggedIn={false} />
      <div className="flex items-center justify-center p-4 pt-20">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Social Sign In */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full bg-transparent" onClick={handleGoogleSignIn}>
              <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48" width="24" height="24">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.58 1.23 9.04 3.25l6.78-6.78C35.52 2.34 30.13 0 24 0 14.97 0 7.04 5.42 3.18 13.24l7.88 6.13C13.38 13.45 18.3 9.5 24 9.5z"/>
                <path fill="#34A853" d="M46.01 24.52c0-1.36-.12-2.68-.34-3.95H24v7.48h12.38c-.53 2.87-2.18 5.3-4.65 6.95l7.33 5.68c4.3-3.96 6.95-9.81 6.95-16.16z"/>
                <path fill="#FBBC05" d="M10.64 28.35a14.42 14.42 0 0 1-.77-4.35c0-1.51.27-2.97.77-4.35L2.76 13.24A23.933 23.933 0 0 0 0 24c0 3.75.87 7.3 2.41 10.47l7.85-6.12z"/>
                <path fill="#4285F4" d="M24 48c6.52 0 11.98-2.15 15.97-5.85l-7.33-5.68c-2.01 1.35-4.59 2.14-8.64 2.14-5.7 0-10.62-3.95-12.13-9.36l-7.85 6.12C7.04 42.58 14.97 48 24 48z"/>
              </svg>

              Continue with Google
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={handleAppleSignIn}>
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Continue with Apple
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          {/* Email Sign In */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
