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
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <title>Max - Flores</title>
      </head>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
