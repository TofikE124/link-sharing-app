import bcrypt from "bcrypt";
import {
  EditProfileSchema,
  SignUpSchema,
} from "@/app/validationSchemas/Schemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = SignUpSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { email, password } = body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (user)
    return NextResponse.json(
      { messsage: "User already exists" },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({ data: { email, hashedPassword } });
  return NextResponse.json(newUser, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const email = request.headers.get("email") || "";
  const validation = EditProfileSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const session = await getServerSession();

  if (!session?.user)
    return NextResponse.json(
      { error: "You are not authroized to do that." },
      { status: 401 }
    );

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { firstName, lastName, contactEmail, profileImage } = body;

  const newUser = await prisma.user.update({
    where: { email },
    data: { firstName, lastName, contactEmail, image: profileImage },
  });

  return NextResponse.json(newUser, { status: 201 });
}

export async function GET(request: NextRequest) {
  const email = request.headers.get("email") || "";
  const uniqueLink = request.headers.get("uniqueLink") || "";

  if (uniqueLink) {
    const user = await prisma.user.findUnique({
      where: { uniqueLinkId: uniqueLink },
      select: {
        contactEmail: true,
        platforms: true,
        firstName: true,
        lastName: true,
        image: true,
      },
    });
    if (!user)
      return NextResponse.json({ error: "User not found " }, { status: 404 });
    return NextResponse.json(user);
  }

  if (email) {
    const session = await getServerSession();

    if (!session?.user)
      return NextResponse.json(
        { error: "You are not authroized to do that." },
        { status: 401 }
      );
    const user = await prisma.user.findUnique({
      where: { email },
      include: { platforms: true },
    });
    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json(user);
  }
}
