"use client"
import React, { useEffect, useState } from 'react'
import ReviewStars from './ReviewStars'
import { CircleUser, Gamepad2, Heart, SquarePen } from 'lucide-react'
import Image from 'next/image'
import AddReviewButton from './AddReviewButton'
import { GameDetail, Review } from '@/types'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
const mockReviews: Review[] = [
    {
        id: "1",
        userId: "sebastian",
        username: "SebasDev",
        gameId: 58617,
        rating: 4.5,
        userLiked: true,
        review: "Great gameplay and humor, but repetitive in parts.",
        createdAt: "2024-11-04T12:45:00Z"
    },
    {
        id: "2",
        userId: "alex",
        username: "AlexGamer",
        gameId: 58617,
        rating: 4,
        userLiked: false,
        review: "Best game ever, goty 100%",
        createdAt: "2025-01-10T08:20:00Z"
    },
    {
        id: "3",
        userId: "alex",
        username: "AlexGamer",
        gameId: 58617,
        rating: 4,
        userLiked: true,
        review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
        createdAt: "2025-01-10T08:20:00Z"
    },
    {
        id: "4",
        userId: "alex",
        username: "AlexGamer",
        gameId: 58617,
        rating: 4,
        userLiked: false,
        review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
        createdAt: "2025-01-10T08:20:00Z"
    },
    {
        id: "5",
        userId: "alex",
        username: "AlexGamer",
        gameId: 58617,
        rating: 4,
        userLiked: false,
        review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
        createdAt: "2025-01-10T08:20:00Z"
    },
    {
        id: "6",
        userId: "alex",
        username: "AlexGamer",
        gameId: 58617,
        rating: 4,
        userLiked: false,
        review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
        createdAt: "2025-01-10T08:20:00Z"
    },
    {
        id: "7",
        userId: "alex",
        username: "AlexGamer",
        gameId: 58617,
        rating: 4,
        userLiked: false,
        review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
        createdAt: "2025-01-10T08:20:00Z"
    },
    {
        id: "8",
        userId: "alex",
        username: "AlexGamer",
        gameId: 58617,
        rating: 4,
        userLiked: false,
        review: "Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100% Best game ever, goty 100%",
        createdAt: "2025-01-10T08:20:00Z"
    },
]
export default function ReviewsSection({ gameDetail }: { gameDetail: GameDetail }) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [page, setPage] = useState(1);
    const reviewsPerPage = 5;
    const totalReviews = mockReviews.length;
    console.log("Total reviews:", totalReviews);
    const totalPages = Math.ceil(totalReviews / reviewsPerPage);
    useEffect(() => {
        const start = (page - 1) * reviewsPerPage;
        const end = start + reviewsPerPage;
        setReviews(mockReviews.filter(review => review.gameId === gameDetail.id).slice(start, end));
    }, [page, gameDetail.id]);
    const handleLikeReview = (reviewId: string) => {
        setReviews(prevReviews => prevReviews.map(review => {
            if (review.id === reviewId) {
                return { ...review, userLiked: !review.userLiked }
            }
            return review;
        }))
    }
    return (
        <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-[1fr_250px]">
            <div className="flex flex-col gap-3">
                <h3 className="font-title text-2xl capitalize text-white">
                    Popular <span className="text-light-purple">Reviews</span>
                </h3>
                {reviews.map((review) => (
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
                            <button className="flex items-center text-xs gap-1 text-neutral-400 cursor-pointer hover:text-white transition" onClick={() => handleLikeReview(review.id)}>
                                {review.userLiked ? (
                                    <Heart className="w-3 h-3 text-light-pink" />) : <Heart className="w-3 h-3 text-neutral-400" />}
                                <span className={`${review.userLiked ? 'text-light-pink' : 'text-neutral-400'}`}>{review.userLiked ? "Liked" : "Like review"}</span>
                            </button>
                        </div>
                    </div>
                ))}
                <Pagination className="mt-6 flex justify-center">
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
                </Pagination>
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
