import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import './globals.css'

const inter = Poppins({ subsets:['latin'],weight:['100','200','300','400','500','600','700','800','900']})

export const metadata: Metadata = {
  title: 'CodeLand',
  description: 'Created By Mohammed Aslam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
