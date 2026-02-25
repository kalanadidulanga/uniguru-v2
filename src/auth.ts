import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/clients";
import { compare } from "bcryptjs";
import { signInSchema } from "./lib/zod";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = signInSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          console.error("Invalid credentials:", parsedCredentials.error.errors);
          return null;
        }

        const { email, password } = parsedCredentials.data;

        const user = await prisma.user.findUnique({
          where: { email },
          select: {
            password: true,
            role: true,
            id: true,
            name: true,
            email: true,
            isBlock: true,
          },
        });

        if (!user || user.isBlock) {
          return null;
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
          return null;
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
          isBlock: user.isBlock,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },

  trustHost: true,

  debug: true,
});
