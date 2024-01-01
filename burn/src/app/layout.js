import { Bebas_Neue } from 'next/font/google'
import './globals.css'

const bebas_neue = Bebas_Neue({ subsets: ['latin'] ,
weight:'400'})

export const metadata = {
  title: 'Ed Burn',
  description: 'Dr. Burn',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={bebas_neue.className}>{children}</body>
    </html>
  )
}
