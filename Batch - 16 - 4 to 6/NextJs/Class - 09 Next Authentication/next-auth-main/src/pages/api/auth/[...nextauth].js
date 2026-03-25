import { getByEmail, verifyPassword } from "@/services/user"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    jwt: true
  },
  providers: [
    CredentialsProvider({
    async authorize({email, password}) {
        const user = getByEmail(email);
        const isValid = verifyPassword(user.password, password)
        if (!user) {
            return "User not found";
        }
        if (!isValid) {
            return "Incorrect email or password";
        }

        return {};
    }
    })
  ],
}

export default NextAuth(authOptions)