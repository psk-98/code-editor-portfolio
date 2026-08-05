import './globals.css'
import './prism-atom-dark.css'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Paul Khoza | Software Developer',
  description: 'Paul Khoza’s software development portfolio.',
  metadataBase: new URL('https://paulkhoza.co.za'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} font-mono`}>{children}</body>
    </html>
  )
}
