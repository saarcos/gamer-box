import { getGameReview } from "@/lib/gameReviews";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: Promise<{ gameId: string }> }) {
    try {
        const { gameId } = await context.params;
        const gameIdNumber = Number(gameId);
        if (isNaN(gameIdNumber)) {
            return new Response("Invalid game ID", { status: 400 });
        }

        const user = await currentUser();
        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const userId = user.id;
        const review = await getGameReview(gameIdNumber, userId);
        return NextResponse.json(review);
    } catch (error) {
        console.error("Error fetching game review:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }



}