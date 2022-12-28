import '../styles/globals.css'
import { Space_Grotesk } from '@next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Max - Flores</title>
      </head>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
