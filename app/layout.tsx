import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anime-Seven Documentation",
  description: "Official documentation for Anime-Seven",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <footer className="border-t">
              <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Anime-Seven. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

