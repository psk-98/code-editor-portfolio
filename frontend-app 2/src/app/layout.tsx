import './globals.css'
import './prism-atom-dark.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import type { ReactNode } from 'react'

const firaCode = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  title: 'Paul Khoza | Software Developer',
  description: 'Paul Khoza’s software development portfolio.',
  metadataBase: new URL('https://paulkhoza.co.za'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} font-mono`}>{children}</body>
    </html>
  )
}
