import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body className='flex flex-col h-screen justify-between'>{children}</body>
    </html>
  )
}
