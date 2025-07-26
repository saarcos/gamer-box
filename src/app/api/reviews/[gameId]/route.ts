import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { getGameReviewsWithUserLikes } from "@/lib/gameReviews";
import { prisma } from "@/prisma";
import z from 'zod'

const ReviewSchema = z.object({
  rating: z.number().min(0.5).max(5),
  comment: z.string().optional(),
})
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
    const userId = user?.id || "";

    const reviews = await getGameReviewsWithUserLikes(gameIdNumber, userId);
    return Response.json(reviews);
  } catch (error) {
    console.error("Error fetching game reviews:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
export async function POST(req: NextRequest, context: { params: Promise<{ gameId: string }> }) {
  try {
    const { gameId } = await context.params;
    const gameIdNumber = Number(gameId);
    if (isNaN(gameIdNumber)) {
      return new NextResponse("Invalid game ID", { status: 400 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const userId = user.id;
    const body = await req.json();
    const parsedBody = ReviewSchema.parse(body);
    const { rating, comment } = parsedBody;

    const existingReview = await prisma.review.findFirst({
      where: {
        gameId: gameIdNumber,
        userId,
      },
    });
    if (existingReview) {
      const updateData: { rating: number; comment?: string | null } = { rating };
      if ("comment" in parsedBody) {
        updateData.comment = comment ?? null;
      }

      const updatedReview = await prisma.review.update({
        where: { id: existingReview.id },
        data: updateData,
      });

      return NextResponse.json(updatedReview);
    } else {
      const newReview = await prisma.review.create({
        data: {
          userId,
          gameId: gameIdNumber,
          rating,
          comment: comment ?? null,
        }
      });
      return NextResponse.json(newReview);
    }
  } catch (error) {
    console.error("Error updating review:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
