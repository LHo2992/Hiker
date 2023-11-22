import './globals.scss'
import { Heebo } from 'next/font/google'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['300', '400']
});

export const metadata = {
  title: 'Hiker',
  description: 'Popular hiking locations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
