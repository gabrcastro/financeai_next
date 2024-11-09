import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { NavBar } from "./_components/navbar";
import { auth } from "@clerk/nextjs/server";

const poppins = Poppins({ subsets: ["latin-ext"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  return (
    <html lang="en">
      <body className={`${poppins.className} dark antialiased`}>
        <ClerkProvider appearance={{ baseTheme: dark }}>
          {!userId ? (
            <div className="h-screen w-screen">{children}</div>
          ) : (
            <main className="flex h-screen w-screen flex-row overflow-y-auto">
              <NavBar />
              <div className="mb-36 ml-16 h-full w-full">{children}</div>
            </main>
          )}
        </ClerkProvider>
      </body>
    </html>
  );
}
