"use client"
import { Star, StarHalf } from 'lucide-react'
import React, { useState } from 'react'

export default function StarRating({ initialRating }: { initialRating: number }) {
  const [rating, setRating] = useState(initialRating)
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (value: number) => {
    setRating(value)
  }

  const handleHover = (value: number) => {
    setHoverRating(value)
  }

  const handleLeave = () => {
    setHoverRating(0)
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const leftValue = star - 0.5
        const rightValue = star

        const isHalfActive = hoverRating
          ? hoverRating === leftValue
          : rating === leftValue

        const isFullActive = hoverRating
          ? hoverRating >= rightValue
          : rating >= rightValue

        return (
          <div key={star} className="relative w-6 h-6 group">
            <div
              className="absolute left-0 top-0 w-1/2 h-full z-10"
              onMouseEnter={() => handleHover(leftValue)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(leftValue)}
            />
            <div
              className="absolute right-0 top-0 w-1/2 h-full z-10"
              onMouseEnter={() => handleHover(rightValue)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(rightValue)}
            />
            {isFullActive ? (
              <Star className="w-6 h-6 text-yellow-400 transition-transform group-hover:scale-110" fill="#facc15" />
            ) : isHalfActive ? (
              <StarHalf className="w-6 h-6 text-yellow-400 transition-transform group-hover:scale-110" fill="#facc15" />
            ) : (
              <Star className="w-6 h-6 text-white/40 transition-transform group-hover:scale-110" />
            )}
          </div>
        )
      })}
    </div>
  )
}
