import React from 'react'
import StarRating from './StarRating'
import { Gamepad2, Heart } from 'lucide-react'
import Image from 'next/image'
import { GameDetail } from '@/types'

export default function GameDetailBanner({ gameDetail }: { gameDetail: GameDetail }) {
    return (
        <div className="relative h-[60vh] w-full overflow-hidden">
            <Image
                src={gameDetail.background_image}
                alt="Fondo"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10" />
            <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black/80 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black/80 to-transparent z-10" />
            <div className="relative z-20 px-4 sm:px-8 lg:px-16 pt-[120px] max-w-7xl mx-auto text-center">
                <h1 className="font-title text-5xl sm:text-6xl drop-shadow-xl mb-6">
                    {gameDetail.name}
                </h1>
                <div className="flex justify-center gap-6 flex-wrap mb-6">
                    <button className="cursor-pointer flex items-center gap-2 bg-neutral-800/60 hover:bg-neutral-700 px-4 py-2 rounded-full text-sm text-white transition-all shadow">
                        <Gamepad2 className="w-5 h-5 text-discord-blue" />
                        Played
                    </button>
                    <button className="cursor-pointer flex items-center gap-2 bg-neutral-800/60 hover:bg-neutral-700 px-4 py-2 rounded-full text-sm text-white transition-all shadow">
                        <Heart className="w-5 h-5 text-pink-500" />
                        Like
                    </button>
                    <div className="cursor-pointer flex items-center gap-3 bg-neutral-800/60 px-4 py-2 rounded-full shadow">
                        <span className="text-sm text-white-300">Your Rating</span>
                        <StarRating />
                    </div>
                </div>
            </div>
        </div>
    )
}
