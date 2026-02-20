import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { adminDb } from "@/lib/firebase-admin"

const handler = NextAuth({
    adapter: FirestoreAdapter(adminDb),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                // Using Firestore to query users. Note: Since we are using passwords, standard Firebase Auth 
                // is often better, but for NextAuth credentials simulation over Firestore:
                const usersRef = adminDb.collection("users");
                const snapshot = await usersRef.where("email", "==", credentials.email).get();

                if (snapshot.empty) {
                    // Seed demo users if they don't exist
                    if (credentials.email === "admin@innovativeit.com" && credentials.password === "password") {
                        const newAdmin = {
                            email: credentials.email,
                            name: "Admin User",
                            role: "ADMIN"
                        };
                        const docRef = await usersRef.add(newAdmin);
                        return { id: docRef.id, ...newAdmin };
                    }
                    if (credentials.email === "client@example.com" && credentials.password === "password") {
                        const newClient = {
                            email: credentials.email,
                            name: "Client User",
                            role: "CLIENT",
                            company: "Global Bank"
                        };
                        const docRef = await usersRef.add(newClient);
                        return { id: docRef.id, ...newClient };
                    }
                    return null;
                }

                let userRecord: any = null;
                snapshot.forEach((doc: any) => {
                    userRecord = { id: doc.id, ...doc.data() };
                });

                return userRecord;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role as string;
                (session.user as any).id = token.id as string;
            }
            return session
        }
    }
})

export { handler as GET, handler as POST }
