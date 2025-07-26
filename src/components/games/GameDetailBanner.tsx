"use client"
import React from 'react'
import StarRating from './StarRating'
import Image from 'next/image'
import { GameDetail } from '@/types'
import PlayedButton from './PlayedButton'
import LikedButton from './LikedButton'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type Props = {
    gameDetail: GameDetail;
};
export default function GameDetailBanner({ gameDetail }: Props) {
    const { data: gameStatus } = useQuery({
        queryKey: ['gameStatus', gameDetail.id],
        queryFn: async () => {
            const { data } = await axios.get(`/api/user-game-status/${gameDetail.id}`);
            return data;
        }
    });
    const { data: review, isLoading } = useQuery({
        queryKey: ['review', gameDetail.id],
        queryFn: async () => {
            const { data } = await axios.get(`/api/reviews/${gameDetail.id}/my-review`)
            return data
        }
    })

    return (
        <div className="relative h-[60vh] w-full overflow-hidden">
            <Image
                src={gameDetail.background_image}
                alt="Fondo"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/70 via-black/10 to-transparent" />
            </div>
            <div className="relative z-20 px-4 sm:px-8 lg:px-16 pt-[120px] max-w-7xl mx-auto text-center">
                <h1 className="font-title text-5xl sm:text-6xl drop-shadow-xl mb-6">
                    {gameDetail.name}
                </h1>
                <div className="flex justify-center gap-6 flex-wrap mb-6">
                    {!gameStatus ? (
                        <div className="flex items-center gap-4 animate-pulse">
                            <div className="h-10 w-28 bg-white/10 rounded-full" />
                            <div className="h-10 w-28 bg-white/10 rounded-full" />
                        </div>
                    ) : (
                        <>
                            <PlayedButton gameId={gameDetail.id} initialStatus={gameStatus.played} />
                            <LikedButton gameId={gameDetail.id} initialStatus={gameStatus.liked} />
                        </>
                    )}
                    {isLoading ?
                        <div className="flex items-center gap-4 animate-pulse">
                            <div className="h-10 w-28 bg-white/10 rounded-full flex-1" />
                        </div>
                        : (
                            <div className="cursor-pointer flex items-center gap-3 bg-black/60 text-gray-200 border border-white/10 hover:bg-black/70 px-4 py-2 rounded-full">
                                {review ? "Your Rating" : "Rate this game"}
                                <StarRating review={review} gameId={gameDetail.id} />
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}
