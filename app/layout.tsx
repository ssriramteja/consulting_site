import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import AuthProvider from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Innovative IT Solutions Inc.',
    description: 'Global provider of IT services and end-to-end solutions.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="flex min-h-screen flex-col">
                <AuthProvider>
                    <Navbar />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                    <ChatWidget />
                </AuthProvider>
            </body>
        </html>
    );
}
