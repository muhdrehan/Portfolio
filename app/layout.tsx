import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "Rehan | Solution Architect for Smart Products | Web 3.0 & DAPO Learner",
  description: 'Portfolio is Generated using TypeScript,NextJS,Tailwind and vercel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
