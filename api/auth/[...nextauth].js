import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
    providers: [
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        // Providers.Google({
        //     clientId: "",
        //     clientSecret: " "
        // })
    ],
    pages: {
        signIn: '/'
    }
}

export default (req, res) => NextAuth(req, res, options);