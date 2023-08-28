import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

//const prisma = new PrismaClient();

export const authOptions = {
  //const prisma = new PrismaClient()
  adapter: PrismaAdapter(new PrismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/SignIn",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
