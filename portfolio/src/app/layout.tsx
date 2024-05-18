import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "./ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-[#111111] text-padding`}>
          <Navbar />
          <main className="relative">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  )
}
