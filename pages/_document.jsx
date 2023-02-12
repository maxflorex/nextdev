import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                rel="stylesheet"
            />
            <link rel="icon" type="image/svg" href="/mx-logo-blue.svg" />
            <title>Max - Flores</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
