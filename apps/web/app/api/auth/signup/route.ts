import { NextResponse } from "next/server";
import { prisma } from "@repo/db/client";
import { hashPassword, signToken, setAuthCookie } from "../../../../lib/auth";

export async function POST(req: Request) {
  try {
    const { email, username, password, role: requestedRole } = await req.json();

    if (!email || !username || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const userCount = await prisma.user.count();

    // First user is always ADMIN, otherwise use requested role (defaulting to USER)
    const role = userCount === 0 ? "ADMIN" : (requestedRole === "ADMIN" ? "ADMIN" : "USER");

    const user = await prisma.user.create({
      data: {
        email,
        username,
        passwordHash: hashedPassword,
        role: role as any,
      },
    });

    const token = await signToken({
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    });

    await setAuthCookie(token);

    return NextResponse.json(
      { id: user.id, username: user.username, email: user.email, role: user.role },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to sign up" }, { status: 500 });
  }
}
