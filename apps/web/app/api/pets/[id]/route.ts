import { NextResponse } from "next/server";
import { prisma } from "@repo/db/client";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const pet = await prisma.pet.findFirst({
    where: { id, deletedAt: null },
    include: { shelter: true, media: { orderBy: { sortOrder: "asc" } } },
  });
  if (!pet) return NextResponse.json({ error: "Pet not found" }, { status: 404 });
  return NextResponse.json(pet);
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body: unknown = await req.json();
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const b = body as Record<string, unknown>;

  const status = b.status;
  if (
    status !== undefined &&
    status !== "AVAILABLE" &&
    status !== "RESERVED" &&
    status !== "ADOPTED" &&
    status !== "ARCHIVED"
  ) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const updated = await prisma.pet.update({
    where: { id },
    data: {
      name: typeof b.name === "string" ? b.name.trim() : undefined,
      breed: typeof b.breed === "string" ? b.breed.trim() : undefined,
      species:
        typeof b.species === "string" &&
        (b.species === "DOG" || b.species === "CAT" || b.species === "OTHER")
          ? b.species
          : undefined,
      ageMonths:
        typeof b.ageMonths === "number"
          ? Math.max(0, Math.floor(b.ageMonths))
          : b.ageMonths !== undefined
            ? Math.max(0, Math.floor(Number(b.ageMonths)))
            : undefined,
      description: typeof b.description === "string" ? b.description.trim() : undefined,
      isPublished: typeof b.isPublished === "boolean" ? b.isPublished : undefined,
      status:
        status === "AVAILABLE" ||
        status === "RESERVED" ||
        status === "ADOPTED" ||
        status === "ARCHIVED"
          ? status
          : undefined,
    },
    include: { shelter: true, media: { orderBy: { sortOrder: "asc" } } },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.pet.update({ where: { id }, data: { deletedAt: new Date() } });
  return NextResponse.json({ ok: true });
}

