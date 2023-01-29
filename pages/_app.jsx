import '../styles/globals.css';
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space',
});

export default function App({ Component, pageProps }) {
    return (
        <main className={`${spaceGrotesk.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
