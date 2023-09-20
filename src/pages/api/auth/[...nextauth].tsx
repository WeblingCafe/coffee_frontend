import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

async function refreshAccessToken(tokenObject) {
  try {
    const tokenResponse = await axios.post(`${process.env.NEXT_PUBLIC_API}/v1/auth/retrieve-token`, {
      token: tokenObject.refreshToken,
    });

    return {
      ...tokenObject,
      accessToken: tokenResponse.data.accessToken,
      accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse.data.refreshToken,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        console.log('`${process.env.NEXT_PUBLIC_API}/v1/auth/login`', `${process.env.NEXT_PUBLIC_API}/v1/auth/login`);
        console.log('user', user);

        if (user?.status === 200) {
          return user;
        } else {
          console.log('===error', res);
          throw new Error(user?.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      console.log('===token', token.user?.responseObject);
      // console.log('===account', account);
      if (token) {
        return {
          accessToken: token.iat,
          accessTokenExpires: token.exp,
          refreshToken: token.jti,
          user: token.user?.responseObject,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
      return refreshAccessToken(token);

      // console.log('user_jwt', user);
      // console.log('token_jwt', token);
      // return { ...token, ...user };
    },

    async session({ token, session, user }) {
      console.log('token_session', token);
      console.log('===session', session);
      console.log('===user', user);
      if (token) {
        // session.user = token;
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};

export default NextAuth(authOptions);
