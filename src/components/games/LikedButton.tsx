"use client"
import { Heart } from 'lucide-react';
import React, { useState } from 'react'
type Props = {
    initialStatus: boolean,
    gameId: number
}
export default function LikedButton({ initialStatus, gameId }: Props) {
    const [liked, setLiked] = useState(initialStatus);
    const handleClick = () => {
        setLiked(prev => !prev)
    }
    return (
        <button
            onClick={handleClick}
            className={`
        cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full shadow-md
        text-sm font-medium transition-all duration-200
        ${liked
                    ? 'bg-light-pink/40 text-pink-200 hover:bg-pink-500/30'
                    : 'bg-black/50 text-gray-200 border border-white/10 hover:bg-black/70'}
      `}
        >
            <Heart className={`w-5 h-5 transition-colors ${liked ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'}`} />
            {liked ? 'Liked' : 'Like'}
        </button>
    );
}
