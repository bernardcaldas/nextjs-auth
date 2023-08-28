// app/api/userData/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const prisma = new PrismaClient();
    const url = new URL(request.url);
    const email = url.searchParams.get('email');

    // Verificar se email é null ou vazio
    if (!email) {
      return NextResponse.json({ message: 'Email parameter is missing or empty' }, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
    }
}
