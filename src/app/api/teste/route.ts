import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const prisma = new PrismaClient();

  try {
    // Ler o ReadableStream
    const rawData = await request.body.getReader().read();
    const bodyString = new TextDecoder().decode(rawData.value);
    console.log("Dados brutos:", bodyString);

    const body = JSON.parse(bodyString);
    const { email } = body;

    console.log("Email extraído:", email);

    if (!email) {
      return NextResponse.json({ message: 'Email is missing or undefined' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { credits: user.credits - 1 }
    });

    return NextResponse.json({ credits: updatedUser.credits });
  } catch (error) {
    console.error("Erro na atualização dos créditos:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
