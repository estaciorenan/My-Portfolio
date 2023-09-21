import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Estácio Renan',
  description: 'Meu portfolio profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <link rel='icon' href='/favicon.ico'/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
