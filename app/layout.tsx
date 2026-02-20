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
                    {/* Watermark */}
                    <div style={{
                        position: 'fixed',
                        bottom: '12px',
                        left: '12px',
                        zIndex: 9999,
                        fontSize: '11px',
                        fontFamily: 'Inter, sans-serif',
                        color: 'rgba(255,255,255,0.45)',
                        background: 'rgba(0,0,0,0.35)',
                        backdropFilter: 'blur(6px)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        letterSpacing: '0.04em',
                        userSelect: 'none',
                        pointerEvents: 'none',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        Created by Sriram Teja S
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
