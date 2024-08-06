import nextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: (_credentials) => {
        const user = {
            name: 'dzaki',
            id: '1',
            email: ''
        }
        return user;
      }
    }),
  ],
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
