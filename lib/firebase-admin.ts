import admin from "firebase-admin";

const firebaseAdminConfig = {
    projectId: process.env.FIREBASE_PROJECT_ID || "dummy-project",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "dummy-client-email@dummy-project.iam.gserviceaccount.com",
    // Replace \n with actual newlines in case it's passed from an env variable
    privateKey: (process.env.FIREBASE_PRIVATE_KEY || "-----BEGIN PRIVATE KEY-----\nMockKey123\n-----END PRIVATE KEY-----\n").replace(/\\n/g, '\n'),
};

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(firebaseAdminConfig)
        });
    } catch (e) {
        console.warn("Firebase Admin Initialization Warning: ", e);
    }
}

let adminAuth: any;
let adminDb: any;

try {
    adminAuth = admin.auth();
    adminDb = admin.firestore();
} catch (e) {
    console.warn("Firebase Admin services could not initialize: ", e);
    // Mock the DB for Next.js build time
    adminDb = {
        collection: () => ({
            where: () => ({ get: async () => ({ forEach: () => { }, empty: true }) }),
            add: async () => ({ id: "mock-id" })
        })
    }
}

export { adminAuth, adminDb };
