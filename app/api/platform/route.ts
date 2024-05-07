import { Platform } from "@/app/constants/platforms";
import { CreatePlatformSchema as createPlatformSchema } from "@/app/validationSchemas/Schemas";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession();
  if (!session?.user)
    return NextResponse.json(
      { error: "You are not authroized to do that" },
      { status: 401 }
    );
  const user = await prisma?.user.findUnique({
    where: { email: session.user.email || "" },
  });

  const platforms = await prisma?.platform.findMany({
    where: { userId: user?.id },
    orderBy: { index: "asc" },
  });

  return NextResponse.json(platforms, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createPlatformSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  const session = await getServerSession();
  if (!session?.user)
    return NextResponse.json(
      { error: "You are not authorized to do that" },
      { status: 401 }
    );
  const user = await prisma?.user.findUnique({
    where: { email: session.user.email || "" },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma?.platform.deleteMany({
    where: { user },
  });

  let platforms = body.platforms as Prisma.PlatformCreateManyInput[];

  platforms = platforms.map((platform, index) => ({
    ...platform,
    userId: user.id,
    index,
  }));

  const result = await prisma?.platform.createMany({
    data: platforms,
  });
  return NextResponse.json(result, { status: 200 });
}
