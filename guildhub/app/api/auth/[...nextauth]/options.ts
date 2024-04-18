import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

interface Credentials {
  accessTag?: string;
  accessToken?: string;
}

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        accessTag: { label: 'Access tag', type: 'text', placeholder: 'MikeWazowsky#0000' },
        accessToken: { label: 'Access token', type: 'text', placeholder: '@1111' }
      },
      async authorize(credentials?: Credentials) {
        
        if (!credentials) {
          return null;
        }

        const user = { id: '1', accessTag: 'KazimierzTestowy#2137', accessToken: '@2137' }

        if (credentials.accessTag === user.accessTag && credentials.accessToken === user.accessToken) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      }
    })
  ],
};
