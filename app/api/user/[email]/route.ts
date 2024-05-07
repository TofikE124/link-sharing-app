import { EditProfileSchema } from "@/app/validationSchemas/Schemas";
import prisma from "@/prisma/client";
import { profile } from "console";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { email: string };
}

export async function PATCH(
  request: NextRequest,
  { params: { email } }: Props
) {
  const body = await request.json();

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

export async function GET(request: NextRequest, { params: { email } }: Props) {
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
    return NextResponse.json(
      { error: "You are not authroized to do that" },
      { status: 401 }
    );

  return NextResponse.json(user);
}
