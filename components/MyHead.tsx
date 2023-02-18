import Head from 'next/head'
import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function MyHead({ children }: Props) {

    return (
        <>
            <Head>
                <meta name="description" content="PocoPota Portfolio"></meta>
                <link rel="icon" href="https://pocopota.com/favicon.ico" sizes="16x16" type="image/ico"></link>
                <meta property="og:description" content="PocoPota Portfolio"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta property="og:image" content="https://pocopota.com/ogp.png"></meta>
                <meta name="twitter:site" content="@PocoPota_io"></meta>
                <meta property="og:site_name" content="PocoPota"></meta>
                {children}
            </Head>
        </>
    )
}