import Layout from "@/lib/layout";
import { fontSans } from "@/lib/styles/fonts";
import "@/lib/styles/globals.css";

export const metadata = {
    title: process.env.APP_NAME,
    description: "Omah built using nextjs + tailwind",
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={fontSans.className}>
            <body className="min-h-screen" suppressHydrationWarning={true}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
