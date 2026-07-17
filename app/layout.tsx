import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Future 360 IT Solutions | Innovate. Integrate. Elevate.",
  description: "F360 IT Solutions — Digital Marketing, Web Development, SEO, Branding & Ads Management. Based in Indore, growing brands nationwide.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-poppins scroll-smooth antialiased bg-[#050d1f]`}>
        {children}
      </body>
    </html>
  )
}
