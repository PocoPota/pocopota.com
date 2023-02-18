import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>サイトポリシー | PocoPota</title>
            </Head>
            <Header></Header>
            <main className={styles.article}>
                <article>
                    <h1>サイトポリシー</h1>
                    <h2>サイトポリシーの適用範囲</h2>
                    <p>当サイトポリシーはPocoPotaが開発・運営を行っているもので、尚且つサイトポリシーとしてこのページにリンクされているサービス（以下「該当サービス」といいます）において適用されます。<br></br>なお該当サービスで当サイトポリシー以外にも定められている場合はそちらも適用されます。</p>
                        <h2>ウェブサイトの利用にあたって</h2>
                        <p>各該当サービスの利用にあたっては、事前にこのサイトポリシーをお読みいただき、ご同意の上でご利用ください。</p>
                        <h2>Cookieについて</h2>
                        <p>各該当サービスでは、一部のコンテンツにおいてCookieを利用しています。Cookieとは、サイトにアクセスした際にブラウザに保存される情報で、名前やメールアドレスなどの個人情報は含みません。各該当サービスにアクセスいただいた方に効果的な広告を配信するため、またアクセス解析などを目的にCookieを利用する場合があります。なおブラウザの設定により、Cookieを使用しないようにすることもできます。
                        </p>
                        <h2>広告配信について</h2>
                        <p>該当サービスの一部では、第三者配信の広告サービス（Google AdSense）を利用しており、ユーザーの興味に応じた商品や広告を表示するためにCookieを使用しています。<br></br>Cookieを無効にする方法やGoogle
                            AdSenseに関する詳細は<a href="https://policies.google.com/technologies/ads?gl=jp" target="_blank">広告 – ポリシーと規約 –
                                Google</a>のページをご確認ください。</p>
                        <p>また該当サービスの一部ではAmazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                        </p>
                        <h2>アクセス解析ツールについて</h2>
                        <p>各該当サービスでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
                        </p>
                        <p>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a
                            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                            target="_blank">Googleアナリティクスサービス利用規約</a>のページや<a
                                href="https://policies.google.com/technologies/ads?hl=ja" target="_blank">Googleポリシーと規約</a>のページをご覧ください。
                        </p>
                        <h2>免責事項</h2>
                        <p>各該当サービスのコンテンツ及び情報は可能な限り正しい情報を提供できるように努めていますが、誤情報が入り込んだり、情報が古くなっている可能性があります。</p>
                        <p>各該当サービスで掲載されている写真及び画像などの著作権や肖像権などは各該当サービスや各権利所有者に帰属しています。掲載写真及び画像に問題がありましたらお手数ですが各権利所有者様本人が<a href="/#contact">ご連絡</a>ください。確認後、対応させていただきます。</p>
                        <p>各該当サービスからリンクやバナーなどによって他サイトに移動された場合、移動先サイトで提供される情報、サービス等について各該当サービスは一切の責任を負いません。</p>
                        <p>各該当サービスの中断・停止又は変更によって利用者が受ける損害については一切の責任を負いません。</p>
                        <p>その他各該当サービスの情報などによって起きた損害等について一切の責任を負いません。</p>
                        <h2>改定について</h2>
                        <p>当サイトポリシーは法令の変更やサービスの提供内容変更などに伴い予告なく変更する場合があります。</p>
                        <p>2022年01月08日　制定<br></br>2023年02月12日　改定</p>
                    </article>
                    </main>
                    <Footer></Footer>
                </>
                )
}
