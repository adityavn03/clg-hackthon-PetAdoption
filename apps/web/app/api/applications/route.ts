import { NextResponse } from "next/server";
import {prisma} from "@repo/db/client";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const application = await prisma.application.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        address: body.address,
        message: body.message,
        petId: body.petId,
      },
    });

    return NextResponse.json(application);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create application" },
      { status: 500 }
    );
  }
}