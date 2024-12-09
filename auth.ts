import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import GitHub from "next-auth/providers/github";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email:",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        let user = null;
        const parsedCredentials = signInSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          console.error("Invalid credentials:", parsedCredentials.error.errors);
          return null;
        }

        user = {
          id: "1",
          name: "Berna",
          email: "bernasimsek@gmail.com",
          role: "admin",
        };

        if (!user) {
          console.log("Invalid credentials");
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      // const role = auth?.user.role || 'user';

      if (!isLoggedIn) {
        return Response.redirect(new URL("/splash", nextUrl));
      }
      if (pathname.startsWith("/signin") && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }
      // if(pathname.startsWith('/something') && role !== 'admin'){
      //     return Response.redirect(new URL('/',nextUrl));
      // }

      return !!auth;
    },

    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role as string;
      }
      return token;
    },

    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
