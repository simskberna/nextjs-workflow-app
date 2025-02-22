import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import AuthProvider from "./context/AuthProvider";
import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";
import { AppSidebar } from "@/app/components/app-sidebar";
import  ThemeManager  from '@/app/components/theme-manager'
import { auth } from "@/auth";
type Theme = "light" | "dark";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Workflow App",
    description: "Workflow App created by berna simsek",
};

export default async function RootLayout({ children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeManager />
        <AuthProvider>
            <AuthContent>{children}</AuthContent>
        </AuthProvider>
        </body>
        </html>
    );
}

const AuthContent = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();

    return (
        <>
            {session ? (
                <>
                    <SidebarProvider>
                        <AppSidebar />
                        <SidebarTrigger
                            style={{ marginTop: 12, paddingLeft: 4, paddingTop: 10 }}
                            disabledOnDesktop
                        />
                        {children}
                    </SidebarProvider>
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
}
