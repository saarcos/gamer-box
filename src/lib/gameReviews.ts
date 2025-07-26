import { prisma } from "@/prisma";
import { ReviewWithUserMeta } from "@/types";

export async function getGameReviewsWithUserLikes(gameId: number, userId: string) {
    const reviews = await prisma.review.findMany({
        where: {
            gameId,
            deletedAt: null,
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            user: {
                select: {
                    id: true,
                    username: true,
                }
            },
            likes: {
                where: {
                    userId
                },
            },
            _count: {
                select: {
                    likes: true
                }
            }
        },
    });
    const parsedReviews: ReviewWithUserMeta[] = reviews.map((r) => ({
        id: r.id,
        userId: r.user.id,
        username: r.user.username,
        gameId: r.gameId,
        rating: r.rating.toNumber(),
        comment: r.comment ?? undefined,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
        userLiked: r.likes.length > 0,
        likeCount: r._count.likes,
    }));
    return parsedReviews;
}
export async function getGameReview(gameId: number, userId: string) {
    const review = await prisma.review.findFirst({
        where: {
            gameId,
            userId,
            deletedAt: null,
        },
        include: {
            user: {
                select: {
                    id: true,
                    username: true,
                },
            },
            likes: {
                where: {
                    userId,
                },
            },
            _count: {
                select: {
                    likes: true,
                },
            },
        },
    });

    if (!review) return null;
    const parsedReview: ReviewWithUserMeta = {
        id: review.id,
        userId: review.user.id,
        username: review.user.username,
        gameId: review.gameId,
        rating: review.rating.toNumber(),
        comment: review.comment ?? undefined,
        createdAt: review.createdAt.toISOString(),
        updatedAt: review.updatedAt.toISOString(),
        userLiked: review.likes.length > 0,
        likeCount: review._count.likes,
    };

    return parsedReview;
}