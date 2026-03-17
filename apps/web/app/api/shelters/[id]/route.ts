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

  const updated = await prisma.shelter.update({
    where: { id },
    data: {
      name: typeof b.name === "string" ? b.name.trim() : undefined,
      slug: typeof b.slug === "string" ? b.slug.trim() : undefined,
      email: typeof b.email === "string" ? b.email.trim() : undefined,
      phone: typeof b.phone === "string" ? b.phone.trim() : undefined,
      website: typeof b.website === "string" ? b.website.trim() : undefined,
      address:
        typeof b.address === "object" && b.address !== null
          ? {
              upsert: {
                create: {
                  line1: asString((b.address as AddressInput).line1)?.trim() ?? "",
                  line2: asString((b.address as AddressInput).line2)?.trim() ?? null,
                  city: asString((b.address as AddressInput).city)?.trim() ?? "",
                  state: asString((b.address as AddressInput).state)?.trim() ?? null,
                  postal: asString((b.address as AddressInput).postal)?.trim() ?? null,
                  country: asString((b.address as AddressInput).country)?.trim() ?? "IN",
                },
                update: {
                  line1:
                    typeof (b.address as AddressInput).line1 === "string"
                      ? ((b.address as AddressInput).line1 as string).trim()
                      : undefined,
                  line2:
                    typeof (b.address as AddressInput).line2 === "string"
                      ? ((b.address as AddressInput).line2 as string).trim()
                      : undefined,
                  city:
                    typeof (b.address as AddressInput).city === "string"
                      ? ((b.address as AddressInput).city as string).trim()
                      : undefined,
                  state:
                    typeof (b.address as AddressInput).state === "string"
                      ? ((b.address as AddressInput).state as string).trim()
                      : undefined,
                  postal:
                    typeof (b.address as AddressInput).postal === "string"
                      ? ((b.address as AddressInput).postal as string).trim()
                      : undefined,
                  country:
                    typeof (b.address as AddressInput).country === "string"
                      ? ((b.address as AddressInput).country as string).trim()
                      : undefined,
                },
              },
            }
          : undefined,
    },
    include: { address: true },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.shelter.update({ where: { id }, data: { deletedAt: new Date() } });
  return NextResponse.json({ ok: true });
}

