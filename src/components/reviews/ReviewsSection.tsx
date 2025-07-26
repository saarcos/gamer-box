"use client"
import React from 'react'
import ReviewStars from './ReviewStars'
import { CircleUser, Cog, Gamepad2, Heart, SquarePen } from 'lucide-react'
import Image from 'next/image'
import AddReviewButton from './AddReviewButton'
import { GameDetail, ReviewWithUserMeta, } from '@/types'
import axios from 'axios'
import { useQuery, useQueryClient } from '@tanstack/react-query'
// import {
//     Pagination,
//     PaginationContent,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"
type Props = {
    gameDetail: GameDetail;
};
export default function ReviewsSection({ gameDetail  }: Props) {
    const queryClient = useQueryClient();
    const { data: reviews, isLoading } = useQuery<ReviewWithUserMeta[]>({
        queryKey: ['gameReviews', gameDetail.id],
        queryFn: async () => {
            const { data } = await axios.get(`/api/reviews/${gameDetail.id}`);
            return data;
        }
    });
    const handleLikeReview = (reviewId: string) => {
        queryClient.setQueryData<ReviewWithUserMeta[]>(['gameReviews', gameDetail.id], (old) => {
            if (!old) return old;
            return old.map((review) =>
                review.id === reviewId ? { ...review, userLiked: !review.userLiked } : review
            );
        });
    };

    return (
        <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-[1fr_250px]">
            <div className="flex flex-col gap-3">
                <h3 className="font-title text-2xl capitalize text-white">
                    Popular <span className="text-light-purple">Reviews</span>
                </h3>
                {isLoading ?
                    <div className="flex items-center justify-center h-[400px]">
                        <div className="flex flex-col gap-3 items-center justify-center text-indigo-300" aria-busy={isLoading}>
                            <Cog className="w-12 h-12 animate-spin text-light-purple" />
                            <p className="text-sm font-medium">Loading reviews...</p>
                        </div>
                    </div>
                    : (reviews && reviews.length > 0 ? reviews.map((review) => (
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
                                    <ReviewStars rating={review.rating || 0} />
                                </div>
                                <p className="text-sm text-neutral-300 leading-relaxed">{review.comment}</p>
                                <button className="flex items-center text-xs gap-1 text-neutral-400 cursor-pointer hover:text-white transition" onClick={() => handleLikeReview(review.id)}>
                                    {review.userLiked ? (
                                        <Heart className="w-3 h-3 text-light-pink" />) : <Heart className="w-3 h-3 text-neutral-400" />}
                                    <span className={`${review.userLiked ? 'text-light-pink' : 'text-neutral-400'}`}>{review.userLiked ? "Liked" : "Like review"}</span>
                                </button>
                            </div>
                        </div>
                    )) : (
                        <div className="flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-light-purple rounded-lg bg-transparent text-indigo-300 p-8 text-center">
                            <p className="mb-4 text-xl font-semibold">
                                No reviews yet.
                            </p>
                            <p className="mb-6 max-w-md text-sm leading-relaxed">
                                Be the first to write a review and share your thoughts about this game!
                            </p>
                            <button
                                onClick={() => {/* lógica para abrir modal o formulario de review aquí */ }}
                                className="border-2 border-light-purple text-white font-title text-lg px-4 py-3 rounded-lg transition hover:bg-light-purple/20 hover:text-white bg-transparent cursor-pointer"
                                aria-label="Write a review"
                            >
                                Write a Review
                            </button>
                        </div>
                    ))}
                {/* {reviews.length > 0 && <Pagination className="mt-6 flex justify-center">
                    <PaginationContent className="gap-2">
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage((p) => Math.max(p - 1, 1))
                                }}
                                className="bg-dark-purple text-white px-3 py-1.5 rounded-md border border-white/10 hover:bg-light-purple hover:text-white transition-colors disabled:opacity-50"
                            />
                        </PaginationItem>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(index + 1)
                                    }}
                                    isActive={index + 1 === page}
                                    className={`
            px-3 py-1.5 rounded-md border border-white/10 transition-colors
            ${index + 1 === page
                                            ? 'bg-light-purple text-white hover:bg-light-purple hover:text-white'
                                            : 'bg-dark-purple text-white hover:bg-light-purple hover:text-white'}
          `}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage((p) => Math.min(p + 1, totalPages))
                                }}
                                className="bg-dark-purple text-white px-3 py-1.5 rounded-md border border-white/10 hover:bg-light-purple hover:text-white transition-colors disabled:opacity-50"
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>} */}
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
                        <AddReviewButton gameDetail={gameDetail} />
                    </div>
                </div>
            </div>
        </div>
    )
}
