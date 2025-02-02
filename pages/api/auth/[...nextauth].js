import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      }),
    ],
    session: {
      strategy: "jwt", // Ensure you are using JWT sessions
    },
    jwt: {
      secret: process.env.NEXTAUTH_SECRET, // Optional but recommended
      encryption: true, // Add this to force encryption
    },
}

export default NextAuth(authOptions)