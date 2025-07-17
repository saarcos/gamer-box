"use client"
import { ReviewWithGame } from '@/types';
import React, { useEffect, useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import ReviewStars from '../reviews/ReviewStars';
import { Heart } from 'lucide-react';
const mockPaginatedReviews: ReviewWithGame[] = [{
    id: 'r101',
    createdAt: '2025-07-15T14:23:00Z',
    content: 'Una experiencia increíble con una historia envolvente y un mundo muy vivo.',
    rating: 4.5,
    likesCount: 123,
    userLiked: true,
    game: {
        id: 3498,
        name: "Grand Theft Auto V",
        slug: "grand-theft-auto-v",
        background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        released: "2013-09-17"
    }
},
{
    id: 'r102',
    createdAt: '2025-07-12T10:00:00Z',
    content: 'Uno de los mejores shooters que he jugado este año.',
    rating: 5,
    likesCount: 89,
    userLiked: false,
    game: {
        id: 5679,
        name: "DOOM Eternal",
        slug: "doom-eternal",
        background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        released: "2020-03-20"
    }
},
{
    id: 'r103',
    createdAt: '2025-07-10T19:45:00Z',
    content: 'Divertido, aunque repetitivo en algunas partes.',
    rating: 3.5,
    likesCount: 45,
    userLiked: true,
    game: {
        id: 4200,
        name: "Fall Guys",
        slug: "fall-guys",
        background_image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
        released: "2020-08-04"
    }
},
{
    id: 'r104',
    createdAt: '2025-07-08T21:12:00Z',
    content: 'Un RPG impresionante con mucho contenido y excelentes personajes.',
    rating: 4,
    likesCount: 200,
    userLiked: false,
    game: {
        id: 3328,
        name: "The Witcher 3: Wild Hunt",
        slug: "the-witcher-3-wild-hunt",
        background_image: "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        released: "2015-05-18"
    }
}];
export default function ProfileReviews() {
    const [reviews, setReviews] = useState<ReviewWithGame[]>([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(mockPaginatedReviews.length / itemsPerPage);
    useEffect(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setReviews(mockPaginatedReviews.slice(start, end));
    }, [page])
    return (
        <>
            <h3 className="font-title text-xl">Your Reviews</h3>
            {reviews.map((review) => (
                <div key={review.id} className="flex items-start gap-4 py-4 border-b border-white/10">
                    <div className="hidden sm:block relative aspect-[2/3] w-[80px] sm:w-[100px] md:w-[120px] rounded-lg overflow-hidden border border-white/10 shadow-md">
                        <Image
                            src={review.game.background_image}
                            alt={review.game.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-2 font-body text-sm sm:text-base">
                        <Link href={`/games/${review.game.id}`}>
                            <h3 className="font-title text-lg sm:text-xl text-white hover:underline transition capitalize">
                                {review.game.name} <span className="text-light-purple">{dayjs(review.game.released).format('YYYY')}</span>
                            </h3>
                        </Link>
                        <p className='text-slate-400 text-sm italic'>Reviewed on {dayjs(review.createdAt).format('MMMM D, YYYY')}</p>
                        <div className="flex items-center gap-2 text-neutral-300">
                            <ReviewStars rating={review.rating} />
                            <div className="flex items-center gap-1 text-light-purple">
                                <Heart className="w-4 h-4 opacity-80 hover:opacity-100" />
                                <span className="text-sm font-medium">{review.likesCount}</span>
                                <span className="text-sm">Likes</span>
                            </div>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                            {review.content}
                        </p>
                    </div>
                </div>
            ))}
            <Pagination className="mt-6 flex justify-center">
                <PaginationContent className="gap-2">
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            className="bg-dark-purple text-white px-3 py-1.5 rounded-md border border-white/10 hover:bg-light-purple hover:text-white transition-colors disabled:opacity-50"
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                onClick={() => setPage(index + 1)}
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
                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                            className="bg-dark-purple text-white px-3 py-1.5 rounded-md border border-white/10 hover:bg-light-purple hover:text-white transition-colors disabled:opacity-50"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}
