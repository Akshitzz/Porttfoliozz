import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Akshit - Software Developer",
  description: "Personal portfolio of Akshit, a software developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem

          storageKey="theme_v2"
        >
          <div className="relative z-[100]">
            <Header />
          </div>
          <main className="relative z-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

