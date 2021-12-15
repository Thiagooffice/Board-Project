import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { env } from 'process'

export default NextAuth({
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    
  ],
})

