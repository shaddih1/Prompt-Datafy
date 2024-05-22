import CredentialsProvider from 'next-auth/providers/credentials'
import { randomBytes } from 'crypto'

export const options = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'text',
          placeholder: 'Enter your username',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },

      async authorize(credentials, req) {
        const fakeUsers = [
          {
            id: '1',
            email: 'user@demo.com',
            username: 'demo_user',
            password: 'password',
            firstName: 'Demo',
            lastName: 'User',
            role: 'Admin',
            token:
              'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InN1cHBvcnRAY29kZXJ0aGVtZXMuY29tIiwibGFzdE5hbWUiOiJDb2RlcnRoZW1lcyIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJUZXN0VG9rZW4ifQ.1StUQa0dF1HZ5gwyfhXPcvxqQSYEiGXk6QbbsvVKXGNQLt0bdTlcf0sOwvZPyOgMbEyoMQHBOfn9nAOMQmhWoA',
          },
        ]
        const filteredUser = fakeUsers.find((user) => {
          return (
            user.email === credentials?.email &&
            user.password === credentials?.password
          )
        })
        if (filteredUser) {
          return filteredUser
        } else {
          throw new Error('Email or Password is not valid')
        }
      },
    }),
  ],
  secret: 'kvwLrfri/MBznUCofIoRH9+NvGu6GqvVdqO3mor1GuA=',
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },

    session: ({ session, token }) => {
      session.user = {
        email: 'user@demo.com',
        name: 'Test User',
      }

      return Promise.resolve(session)
    },
  },
  session: {
    // jwt: true,
    maxAge: 24 * 60 * 60,
    generateSessionToken: () => {
      return randomBytes(32).toString('hex')
    },
  },
}
