import { NextResponse } from "next/server";
import { prisma } from "@repo/db/client";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body: unknown = await req.json();

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const status = (body as Record<string, unknown>).status;
  if (
    status !== "SUBMITTED" &&
    status !== "IN_REVIEW" &&
    status !== "APPROVED" &&
    status !== "REJECTED" &&
    status !== "WITHDRAWN"
  ) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const updated = await prisma.$transaction(async (tx) => {
    const app = await tx.application.update({
      where: { id },
      data: { status, reviewedAt: new Date() },
      include: {
        pet: { include: { shelter: true } },
        shelter: true,
        user: { select: { id: true, username: true } },
      },
    });

    if (status === "APPROVED") {
      await tx.pet.update({
        where: { id: app.petId },
        data: { status: "ADOPTED" },
      });
    }
    return app;
  });

  return NextResponse.json(updated);
}

