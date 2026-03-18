import { NextResponse } from "next/server";
import { prisma } from "@repo/db/client";
import { getCurrentUser } from "../../../lib/auth";

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function GET() {
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      pet: { include: { shelter: true } },
      shelter: true,
      user: { select: { id: true, username: true } },
    },
  });
  return NextResponse.json(applications);
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
    const b = body as Record<string, unknown>;

    if (
      !isNonEmptyString(b.applicantName) ||
      !isNonEmptyString(b.applicantEmail) ||
      !isNonEmptyString(b.petId)
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const pet = await prisma.pet.findFirst({
      where: { id: b.petId, deletedAt: null, isPublished: true },
    });
    if (!pet) {
      return NextResponse.json({ error: "Pet not found" }, { status: 404 });
    }
    if (pet.status !== "AVAILABLE") {
      return NextResponse.json(
        { error: "Pet is not available" },
        { status: 409 }
      );
    }

    const user = await getCurrentUser();

    const application = await prisma.application.create({
      data: {
        applicantName: b.applicantName.trim(),
        applicantEmail: b.applicantEmail.trim(),
        applicantPhone: isNonEmptyString(b.applicantPhone) ? b.applicantPhone.trim() : null,
        applicantAddress: isNonEmptyString(b.applicantAddress) ? b.applicantAddress.trim() : null,
        message: isNonEmptyString(b.message) ? b.message.trim() : null,
        petValue: b.petValue ? parseFloat(String(b.petValue)) : null,
        petId: pet.id,
        shelterId: pet.shelterId,
        userId: user ? (user.id as string) : null,
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create application" },
      { status: 500 }
    );
  }
}