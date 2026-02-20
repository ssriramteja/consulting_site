# IT Consulting Platform — Walkthrough

## 🚀 Live URL
**https://webprojectv2.vercel.app**

![Live Deployment Screenshot](/Users/sriramtejasingaraju/.gemini/antigravity/brain/af847c89-9bec-4d8c-a5e2-579449a608cf/homepage_screenshot_1771551737601.png)

The multi-phase IT consulting platform is deployed and live. All 7 phases are complete — from core pages to Firebase backend and Vercel deployment.

## 1. Client Portal & Features
A secure, dedicated area for clients to manage their engagements and collaborate.

- **Authentication System**: Integrated NextAuth.js with a local SQLite database (via Prisma) to handle secure credential logins and enforce Role-Based Access Control (RBAC). 
- **Secure Client Dashboard**: Developed the `PortalDashboard` tailored for clients, displaying live project progress bars and high-level meeting summaries.
- **Meeting Scheduler**: Implemented a mock interactive `Scheduler` simulating Calendly's experience for booking strategy sessions with the consulting team.
- **Project Status Tracker**: Created an interactive visual `KanbanBoard` for clients to track active deliverables, sprints, and bottlenecks.
- **Secure Document Sharing**: Built a `DocumentsPage` with a clean UI, enabling clients to securely access, search, and download contracts, invoices, and reports.

## 2. Admin & Internal Tools
Internal tools designed for firm management, efficiency, and resource allocation.

- **Admin Layout**: Added a comprehensive Admin Sidebar that automatically checks RBAC to deny access to regular clients.
- **CRM Dashboard**: Developed a high-level view containing key performance indicators (KPIs) like Total Revenue, active projects, and a predictive lead pipeline table.
- **Invoice & Billing Module**: Built a `BillingPage` to manage invoices (draft, pending, paid) and automatically track outstanding balances for the firm.
- **Time Tracking System**: Created a `TimeTrackingPage` with an active running timer for consultants to log billable hours against specific client initiatives.
- **Team Management**: Set up a directory to monitor active consultants, calculate their workload/utilization, and expose over-capacity warnings to project managers.
- **Project Portfolio Admin**: Added a `ProjectAdminPage` as an executive view for all active engagements across the entire firm.

## 3. AI & Automation Hub
Cutting-edge AI features positioned to enhance sales and operational efficiency.

- **AI Proposal Generator**: An interface that takes context about a potential client and project scope, and simulates generating a personalized, context-aware DOCX statement of work.
- **Predictive Lead Scoring System**: An integrated UI demonstrating how inbound leads are continuously analysed against firmographic datapoints to prioritize high-intent enterprise buyers.
- **Client Self-Service AI Chatbot**: Polished the floating globally available `ChatWidget` into "Nova AI." It mimics real-time LLM interaction directly on the website for immediate client triage.

## 4. Technical Configuration & Security Settings
Robust infrastructure parameters securing the platform.

- **Platform Settings Page**: Developed a dedicated `SettingsPage` to expose toggle configurations for Multi-Factor Authentication (MFA), confirm RBAC activation, and display the connection status of external API integrations (Slack, Jira, n8n Workflow, QuickBooks).
- **Responsive & Premium Aesthetics**: Ensured all admin and portal dashboards maintain the sleek, modern aesthetic established in Phase 1, fully responsive across all device sizes using Tailwind CSS and Framer Motion.

## 5. Firebase Backend Migration
Migrated the entire database layer from Prisma/SQLite to Firebase.

- Uninstalled `prisma`, `@prisma/client`, and `@next-auth/prisma-adapter`
- Installed `firebase`, `firebase-admin`, and `@next-auth/firebase-adapter`
- Created `lib/firebase.ts` and `lib/firebase-admin.ts` for client and server-side Firebase instances
- Refactored NextAuth to verify users against Firestore instead of Prisma
- Updated the `PortalDashboard` to query the `projects` Firestore collection
- Fixed all TypeScript errors and peer dependency conflicts for clean production builds

## 6. Vercel Deployment ✅
Deployed the Next.js app to Vercel's free Hobby tier (no credit card required).

- Installed Vercel CLI, authenticated, and deployed with `vercel --prod`
- App built successfully and deployed to: **https://webprojectv2.vercel.app**
- Firebase Spark plan (free tier) used for Firestore/Auth backend — no Cloud Functions needed

## Getting Started
- **Local dev**: `npm run dev` then visit `http://localhost:3000`
- **Sign in**: `/api/auth/signin` → `client@example.com` or `admin@innovativeit.com` / password: `password`
- **Live site**: https://webprojectv2.vercel.app
