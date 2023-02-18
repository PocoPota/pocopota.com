import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script data-website-id="9ec491db-3f45-46d6-98a1-1d357d8b651a" src="https://umami.pocopota.com/umami.js" data-do-not-track="true" strategy="afterInteractive" />
            <Component {...pageProps} />
        </>
    )
}