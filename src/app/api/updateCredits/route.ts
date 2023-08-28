// import { PrismaClient } from '@prisma/client';
// import { NextResponse, NextRequest } from 'next/server';

// export async function POST(request: NextRequest) {
//   const prisma = new PrismaClient();
//   try {
//     const { email } = JSON.parse(request.body);
//     console.log("Email:", email); // Log temporário

//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user) {
//       return NextResponse.json({ message: 'User not found' }, { status: 404 });
//     }

//     const updatedUser = await prisma.user.update({
//       where: { email: email },
//       data: { credits: user.credits - 1 }
//     });

//     return NextResponse.json({ credits: updatedUser.credits });
//   } catch (error) {
//     console.error("Erro na atualização dos créditos:", error.message); // Log de erro
//     return NextResponse.json({ message: error.message }, { status: 500 }); // Propagando a mensagem real do erro
//   } finally {
//     await prisma.$disconnect(); // Fechando a conexão com o Prisma
//   }
// }


import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

// Crie uma instância única do Prisma fora da função
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
    const { email } = body;
    console.log("Email:", email); // Log temporário

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
    console.error("Erro na atualização dos créditos:", error.message); // Log de erro
    return NextResponse.json({ message: error.message }, { status: 500 }); // Propagando a mensagem real do erro
  }
}
