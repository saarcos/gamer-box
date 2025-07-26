import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma";
import z from "zod";
import { currentUser } from "@clerk/nextjs/server";

const userGameStatusSchema = z.object({
  gameId: z.number().min(1),
  status: z.enum(["played", "liked"]),
});

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const json = await req.json();
    const parsed = userGameStatusSchema.safeParse(json);

    if (!parsed.success) {
      return new NextResponse("Invalid body", { status: 400 });
    }

    const { gameId, status } = parsed.data;
    const userId = user.id;

    const existing = await prisma.userGameStatus.findFirst({
      where: { userId, gameId, status },
    });

    if (existing) {
      await prisma.userGameStatus.delete({
        where: { id: existing.id },
      });
      return NextResponse.json({ toggled: false });
    } else {
      await prisma.userGameStatus.create({
        data: { userId, gameId, status },
      });
      return NextResponse.json({ toggled: true });
    }
  } catch (error) {
    console.error("Error in toggle game status:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
