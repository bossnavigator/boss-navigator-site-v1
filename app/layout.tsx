import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { CartModal } from "@/components/cart-modal"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Empowerment Books - Financial Freedom & Business Success test",
  description:
    "Transform your future with proven strategies for credit building, business formation, and entrepreneurship.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>
        <CartProvider>
          {children}
          <CartModal />
        </CartProvider>
      </body>
    </html>
  )
}
