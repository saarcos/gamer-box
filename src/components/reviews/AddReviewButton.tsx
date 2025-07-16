"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { GameDetail } from '@/types'
import Image from 'next/image'
import { Gamepad2, Heart } from 'lucide-react'
import StarRating from '../games/StarRating'
import { Textarea } from '../ui/textarea'

export default function AddReviewButton({ gameDetail }: { gameDetail: GameDetail }) {
    const [open, setOpen] = useState(false)
    const [played, setPlayed] = useState(false)
    const [liked, setLiked] = useState(false)

    return (
        <>
            <Button
                variant="outline"
                className="w-full border-2 border-light-purple text-white font-title text-lg px-4 py-3 rounded-lg transition hover:bg-light-purple/20 hover:text-white bg-transparent cursor-pointer"
                onClick={() => setOpen(true)}
            >
                + Add Review
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="bg-gradient-to-b from-[#100120] via-[#0C001A] to-[#170233] border border-neutral-700 w-full !max-w-4xl max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-white font-title text-3xl">Write a Review</DialogTitle>
                    </DialogHeader>

                    <form className="flex flex-col gap-6 mt-2">
                        <div className="flex flex-col md:flex-row gap-6 text-white">
                            <div className="hidden sm:block relative w-full max-w-[140px] aspect-[2/3] overflow-hidden rounded-lg border border-neutral-700 shadow-md">
                                <Image
                                    src={gameDetail.background_image}
                                    alt="Game cover"
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col gap-4 flex-1 font-body">
                                <h3 className="font-title text-2xl text-center sm:text-left text-light-purple">
                                    {gameDetail.name}
                                </h3>

                                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                    <button
                                        type="button"
                                        onClick={() => setPlayed(!played)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all shadow-sm font-medium ${played
                                                ? 'bg-light-purple text-black'
                                                : 'bg-[#1a1a2e] hover:bg-[#292945] text-white'
                                            }`}
                                    >
                                        <Gamepad2 className="w-5 h-5" />
                                        Played
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setLiked(!liked)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all shadow-sm font-medium ${liked
                                                ? 'bg-pink-500 text-black'
                                                : 'bg-[#1a1a2e] hover:bg-[#3c2c3e] text-white'
                                            }`}
                                    >
                                        <Heart className="w-5 h-5" />
                                        Like
                                    </button>

                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a2e] hover:bg-[#292945] text-sm text-white shadow-sm">
                                        Your rating:
                                        <StarRating />
                                    </div>
                                </div>

                                <Textarea
                                    className="w-full h-32 p-3 rounded-lg bg-[#1a1a2e] text-white border border-neutral-700 resize-none focus:outline-none focus:ring-2 focus:ring-light-purple/60"
                                    placeholder="Write your review..."
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <Button type="submit" className="border-2 border-light-purple text-white font-title text-lg px-4 py-3 rounded-lg transition hover:bg-light-purple/20 hover:text-white bg-transparent cursor-pointer">
                                Submit Review
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
