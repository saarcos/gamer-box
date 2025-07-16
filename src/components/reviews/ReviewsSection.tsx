import React from 'react'
import ReviewStars from './ReviewStars'
import { CircleUser, Gamepad2, Heart, SquarePen } from 'lucide-react'
import Image from 'next/image'
import { GameDetail } from '@/types'
import AddReviewButton from './AddReviewButton'

export default function ReviewsSection({ gameDetail }: { gameDetail: GameDetail }) {
    return (
        <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-[1fr_250px]">
            <div className="flex flex-col gap-3">
                <h3 className="font-title text-2xl capitalize text-white">
                    Popular <span className="text-light-purple">Reviews</span>
                </h3>
                {gameDetail.reviews.map((review) => (
                    <div
                        key={review.id}
                        className="flex items-start gap-3 py-4 px-1 border-b border-neutral-800 last:border-b-0"
                    >
                        <CircleUser className="w-7 h-7 shrink-0 text-neutral-400" />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <p className="text-xs text-neutral-400">
                                    Review by <span className="text-white">{review.username}</span>
                                </p>
                                <ReviewStars rating={review.rating} />
                            </div>
                            <p className="text-sm text-neutral-300 leading-relaxed">{review.review}</p>
                            <p className="flex items-center text-xs gap-1 text-neutral-400 cursor-pointer hover:text-white transition">
                                <Heart className="w-3 h-3 text-neutral-400" /> Like review
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative">
                <div className="sticky top-0 w-full">
                    <div className="overflow-hidden rounded-lg shadow-md border border-neutral-700">
                        <div className="relative w-full h-[360px]">
                            <Image
                                src={gameDetail.background_image}
                                alt="Game cover"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 mt-3 text-sm text-neutral-300">
                        <p className="flex items-center gap-1">
                            <Gamepad2 className="w-4 h-4 text-light-purple" /> 20
                        </p>
                        <p className="flex items-center gap-1">
                            <Heart className="w-4 h-4 text-pink-500" /> 50
                        </p>
                        <p className="flex items-center gap-1">
                            <SquarePen className="w-4 h-4 text-yellow-300" /> 20
                        </p>
                    </div>
                    <div className="w-full mt-4">
                        <AddReviewButton gameDetail={gameDetail}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
