"use client"
import { Gamepad2 } from 'lucide-react'
import React, { useState } from 'react'
type Props = {
    initialStatus: boolean,
    gameId: number
}
export default function PlayedButton({ initialStatus, gameId }: Props) {
    const [played, setPlayed] = useState(initialStatus);
    const handleClick = () => {
        setPlayed(prev => !prev);
    }
    return (
        <button
            onClick={handleClick}
            className={`
        cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full shadow-lg
        text-sm font-semibold transition-all duration-200 backdrop-blur
        ${played
                    ? 'bg-indigo-500/40 text-indigo-100 hover:bg-indigo-500/50'
                    : 'bg-black/50 text-gray-200 border border-white/10 hover:bg-black/70'}
      `}
        >
            <Gamepad2
                className={`w-5 h-5 transition-colors ${played ? 'text-indigo-200' : 'text-gray-400 hover:text-indigo-200'
                    }`}
            />
            {played ? 'Played' : 'Played?'}
        </button>
    );
}
