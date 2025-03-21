"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"

// In a real implementation, you might fetch this from an API
const verses = [
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
  },
  {
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
  },
  {
    text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
  },
  {
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
  },
]

export function BibleVerse() {
  const [verse, setVerse] = useState(verses[0])

  useEffect(() => {
    // In a real implementation, you might fetch a verse from an API
    const randomIndex = Math.floor(Math.random() * verses.length)
    setVerse(verses[randomIndex])
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-start max-w-3xl">
        <Quote className="h-8 w-8 text-amber-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <p className="text-lg text-gray-700 italic">{verse.text}</p>
          <p className="text-right font-semibold text-sky-700 mt-2">{verse.reference}</p>
        </div>
      </div>
    </div>
  )
}

