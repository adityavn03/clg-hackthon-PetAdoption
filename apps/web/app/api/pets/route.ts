import { NextResponse } from "next/server";
import { prisma } from "@repo/db/client";

function asString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  const published = url.searchParams.get("published");
  const shelterId = url.searchParams.get("shelterId");

  const pets = await prisma.pet.findMany({
    where: {
      deletedAt: null,
      ...(status === "AVAILABLE" ||
      status === "RESERVED" ||
      status === "ADOPTED" ||
      status === "ARCHIVED"
        ? { status }
        : {}),
      ...(published === "true" ? { isPublished: true } : {}),
      ...(asString(shelterId) ? { shelterId: shelterId! } : {}),
    },
    orderBy: { createdAt: "desc" },
    include: { shelter: true, media: { orderBy: { sortOrder: "asc" } } },
  });

  return NextResponse.json(pets);
}

export async function POST(req: Request) {
  const body: unknown = await req.json();
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const b = body as Record<string, unknown>;

  const name = asString(b.name)?.trim();
  const species = asString(b.species);
  const breed = asString(b.breed)?.trim() ?? null;
  const ageMonths =
    typeof b.ageMonths === "number" ? b.ageMonths : Number(b.ageMonths);
  const shelterId = asString(b.shelterId)?.trim();
  const description = asString(b.description)?.trim() ?? null;
  const isPublished =
    typeof b.isPublished === "boolean" ? b.isPublished : undefined;
  const status = asString(b.status);

  if (
    !name ||
    (species !== "DOG" && species !== "CAT" && species !== "OTHER") ||
    !shelterId ||
    (b.ageMonths !== undefined && !Number.isFinite(ageMonths))
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const shelter = await prisma.shelter.findFirst({
    where: { id: shelterId, deletedAt: null },
  });
  if (!shelter) {
    return NextResponse.json({ error: "Shelter not found" }, { status: 404 });
  }

  const pet = await prisma.pet.create({
    data: {
      name,
      species,
      breed,
      ageMonths:
        b.ageMonths === undefined ? null : Math.max(0, Math.floor(ageMonths)),
      description,
      shelterId: shelter.id,
      isPublished: isPublished ?? true,
      status:
        status === "AVAILABLE" ||
        status === "RESERVED" ||
        status === "ADOPTED" ||
        status === "ARCHIVED"
          ? status
          : undefined,
      media: asString(b.imageUrl)?.trim()
        ? { create: [{ url: asString(b.imageUrl)!.trim(), kind: "IMAGE" }] }
        : undefined,
    },
    include: { shelter: true, media: { orderBy: { sortOrder: "asc" } } },
  });

  return NextResponse.json(pet, { status: 201 });
}

