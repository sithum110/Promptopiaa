// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import User from "@model/user";
// import {connectToDB} from '@/utils/database';
// console.log('Server-side code is running...');
// console.log(
    
// {
//     clientId:process.env.GOOGLE_ID,
//     clientSecret:process.env.GOOGLE_CLIENT_SECRET, 
// }
// )
// const handler =NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId:process.env.GOOGLE_ID,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET,
//         })
//     ],
//     callbacks:{

//         async session({session}){
//             const sessionUser = await User.findOne({
//                 email:session.user.email
//             })
    
//             session.user.id = sessionUser._id.toString();
    
//             return session;
    
//         },
//         async signIn({profile}){
//             try {
//                 await connectToDB();
    
//                 //check if a user new user
//     const userExists = await User.findOne({
//         email:profile.email,
    
//     });
    
//     if(userExists){
//         await User.create({
//             email:profile.email,
//             username:profile.name.repalce(" ","").
//             toLowerCase(),
//             image:profile.picture
//         })
//     }
    
//                 // if not create anew user
    
//                 return true;
//             } catch (error) {
//                 console.log(error);
//                 return false;
                
//             }
    
//         }

//     }
    
// })
// console.log('NextAuth handler created...');
// export {handler as GET, handler as POST};




import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// Adjust the path if necessary
import { connectToDB } from "@/utils/database";
import User from "@model/user";

console.log('Server-side code is running...');
console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
});

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            await connectToDB();
            const sessionUser = await User.findOne({ email: session.user.email });

            if (!sessionUser) {
                console.error("Session user not found");
                return session;
            }

            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                await connectToDB();

                // Check if user already exists
                const userExists = await User.findOne({ email: profile.email });

                // If user does not exist, create a new one
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(/\s+/g, "").toLowerCase(),
                        image: profile.picture,
                    });
                }

                return true;
            } catch (error) {
                console.log("Error in signIn callback:", error);
                return false;
            }
        },
    },
});

console.log('NextAuth handler created...');
export { handler as GET, handler as POST };
