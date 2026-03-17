import { NextResponse } from "next/server";
import { prisma } from "@repo/db/client";

function asString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

type AddressInput = Partial<{
  line1: unknown;
  line2: unknown;
  city: unknown;
  state: unknown;
  postal: unknown;
  country: unknown;
}>;

export async function GET() {
  const shelters = await prisma.shelter.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: "desc" },
    include: { address: true },
  });
  return NextResponse.json(shelters);
}

export async function POST(req: Request) {
  const body: unknown = await req.json();
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const b = body as Record<string, unknown>;

  const name = asString(b.name)?.trim();
  const slug = asString(b.slug)?.trim();
  if (!name || !slug) {
    return NextResponse.json({ error: "name and slug required" }, { status: 400 });
  }

  const shelter = await prisma.shelter.create({
    data: {
      name,
      slug,
      email: asString(b.email)?.trim() ?? null,
      phone: asString(b.phone)?.trim() ?? null,
      website: asString(b.website)?.trim() ?? null,
      address:
        typeof b.address === "object" && b.address !== null
          ? {
              // If you want strict validation, enforce line1+city required
              create: {
                line1: asString((b.address as AddressInput).line1)?.trim() ?? "",
                line2: asString((b.address as AddressInput).line2)?.trim() ?? null,
                city: asString((b.address as AddressInput).city)?.trim() ?? "",
                state: asString((b.address as AddressInput).state)?.trim() ?? null,
                postal: asString((b.address as AddressInput).postal)?.trim() ?? null,
                country: asString((b.address as AddressInput).country)?.trim() ?? "IN",
              },
            }
          : undefined,
    },
    include: { address: true },
  });

  if (shelter.address && (!shelter.address.line1 || !shelter.address.city)) {
    // avoid creating empty address records
    await prisma.address.delete({ where: { id: shelter.address.id } }).catch(() => {});
  }

  const fresh = await prisma.shelter.findUnique({
    where: { id: shelter.id },
    include: { address: true },
  });

  return NextResponse.json(fresh, { status: 201 });
}

