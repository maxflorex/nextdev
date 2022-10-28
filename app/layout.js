import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html className='flex flex-col h-screen justify-between'>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&family=Ubuntu:wght@300;400;500;700&display=swap');
      </style>
      <head></head>
      <body>{children}</body>
      <footer className='bg-mx-500 p-8 w-full'><h1>hey</h1></footer>
    </html>
  )
}
