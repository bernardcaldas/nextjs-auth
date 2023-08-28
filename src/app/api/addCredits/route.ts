// app/api/addCredits.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const prisma = new PrismaClient();
  const { email, creditsToAdd } = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: { email: email }
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { credits: user.credits + creditsToAdd }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ message: 'Error updating user credits' }, { status: 500 });
  }
}
