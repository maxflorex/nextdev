import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <title>Max - Flores</title>
      </head>
      <body className='flex flex-col h-screen justify-between'>{children}</body>
    </html>
  )
}
