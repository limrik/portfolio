import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Icon from "../../public/farmer-hat.png"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lim Rik",
  description: "Portfolio Website",
  icons: [{ rel: "icon", url: Icon.src }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111111] text-padding`}>
        <Navbar />
        <main className="relative">{children}</main>
      </body>
      <GoogleAnalytics gaId="G-J3TWZW2L58" />
    </html>
  )
}
