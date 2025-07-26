import { prisma } from "@/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: Promise<{ gameId: string }> }) {
    try {
        const user = await currentUser();
        if (!user) return new NextResponse('Unauthorized', { status: 401 });

        const userId = user.id;
        const { gameId } = await context.params;
        const gameIdNumber = Number(gameId);

        const statuses = await prisma.userGameStatus.findMany({
            where: { gameId: gameIdNumber, userId }
        });
        return NextResponse.json({
            played: statuses.some((s) => s.status === 'played'),
            liked: statuses.some((s) => s.status === 'liked')
        })
    } catch (error) {
        console.error(error);
        return new NextResponse('Error', { status: 500 });
    }
}