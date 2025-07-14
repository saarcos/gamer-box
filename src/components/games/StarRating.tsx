"use client"
import { Star } from 'lucide-react'
import React, { useState } from 'react'

export default function StarRating() {
    const [rating, setRating] = useState(0)

    return (
        <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                >
                    <Star
                        className={`w-6 h-6 ${star <= rating ? 'text-yellow-400' : 'text-white/40'
                            }`}
                        fill={star <= rating ? '#facc15' : 'none'}
                    />
                </button>
            ))}
        </div>
    )
}
