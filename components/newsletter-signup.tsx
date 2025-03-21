"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to your backend
    console.log("Subscribing email:", email)
    setIsSubmitted(true)
    setEmail("")

    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-sky-100 rounded-full mb-4">
        <Mail className="h-6 w-6 text-sky-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
      <p className="text-lg text-gray-600 mb-6">
        Subscribe to our newsletter for weekly devotionals, church updates, and upcoming events.
      </p>

      {isSubmitted ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
          Thank you for subscribing! You'll receive our next newsletter soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">We respect your privacy and will never share your information.</p>
        </form>
      )}
    </div>
  )
}

