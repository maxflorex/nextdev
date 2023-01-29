import '../styles/globals.css';
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space',
});

export default function App({ Component, pageProps }) {

    return (
        // <html>
        //   <head>
        //     <link rel="icon" type="image/svg" href="/mx-logo-blue.svg" />
        //     <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        //     <title>Max - Flores</title>
        //   </head>
        //   <body className={`${spaceGrotesk.variable} font-sans`}>
        //     {children}
        //   </body>
        // </html>
        <main className={`${spaceGrotesk.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
