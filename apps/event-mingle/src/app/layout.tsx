import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EventMingle - Discover and Connect at Events',
  description: 'Find and connect with people at events that matter to you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClientLayoutWrapper>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ClientLayoutWrapper>
      </body>
    </html>
  )
} 