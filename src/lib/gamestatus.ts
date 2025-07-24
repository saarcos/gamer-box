import { prisma } from "@/prisma";

export async function getUserGameStatus(userId: string, gameId: number) {
    const statuses = await prisma.userGameStatus.findMany({
        where: { userId, gameId }
    });
    return {
        played: statuses.some((s) => s.status === 'played'),
        liked: statuses.some((s) => s.status === 'liked')
    }
}
export async function getUserReview(userId: string, gameId: number) {
    const review = await prisma.review.findFirst({
        where: { userId, gameId }
    });
    return review
}