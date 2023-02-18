import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyHead from '../components/MyHead'
import { microcms } from '../lib/microcms'
import type { LinkType } from '../lib/linkType'
import type { WorksType } from '../lib/worksType'
import type { ContactType } from '../lib/contactType'

export default function Home({ links, works, contact }: Props) {
    return (
        <>
            <MyHead>
                <title>PocoPota</title>
                <meta property="og:title" content="PocoPota" />
                <meta property="og:url" content="https://pocopota.com" />
                <link rel='stylesheet' href='/fontawesome/all.min.css'></link>
                <link rel='stylesheet' href='/staticLib/css/imagehover.min.css'></link>
            </MyHead>
            <main className={styles.main}>
                <section className={styles.first}>
                    <canvas className="fireworks"></canvas>
                    <div className={styles.firstCenter}>
                        <Image src="/pocopota.jpg" alt="pocopota" className={styles.firstIcon} width={160} height={160} />
                        <div className={styles.firstRight}>
                            <div className={styles.firstName}>PocoPota</div>
                            <div className={styles.firstWord} id="ityped"></div>
                        </div>
                    </div>
                </section>
                <section className={styles.about}>
                    <div className={styles.title}>About me</div>
                    <div className={styles.aboutInner}>
                        <div className={styles.aboutCard}>
                            <div className={styles.aboutHeader}>
                                <div className={styles.aboutHeaderLeft}>
                                    <div className={styles.aboutHeaderTop}>Hi!👋 I'm PocoPota.</div>
                                    <div className={styles.aboutHeaderMiddle}>I'm a Front-end, Back-end Developer,<br />and sometimes a Designer.</div>
                                </div>
                                <div className={styles.aboutHeaderRight}>
                                    <Image src="/pocopota.jpg" alt="pocopota" className={styles.aboutHeaderImg} width={105} height={105} />
                                </div>
                            </div>
                            <div className={styles.aboutMain}>趣味でWeb開発を行っている一般高校生です！WebアプリやブログなどのWeb関係を主に、Discord/LINE botの開発やマイクラサーバー(非公開)も動かしていたりします。開発以外にもパソコンで創作関係は興味があります。</div>
                        </div>
                        <div className={styles.aboutLinks}>
                            <ul>
                                {links.map((links) => (
                                    <>
                                        <li>
                                            <Link href={links.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.linkA}>
                                                <div className={styles.linkIcon} style={{ color: `${links.linkColor}` }}><i className={links.linkIcon}></i></div>
                                                <div className={styles.linkInfo}>
                                                    <div className={styles.linkTitle}>{links.linkTitle}</div>
                                                    <div className={styles.linkId}>{links.linkId}</div>
                                                </div>
                                            </Link>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <Header></Header>
                <section className={styles.works}>
                    <div className={styles.title}>Works</div>
                    <div className={styles.worksList}>
                        <ul>
                            {works.map((works) => (
                                <>
                                    <li>
                                        <Link href={works.url} target="_blank" rel="noopener noreferrer">
                                            <figure className="imghvr-flip-diag-1">
                                                <Image src={works.img} alt='thumbnail' width={390} height={220} />
                                                <figcaption>
                                                    <h3 className="ih-fade-down ih-delay-sm ">{works.title}</h3>
                                                    <p className="ih-zoom-in ih-delay-md">{works.comment}</p>
                                                    <p className="ih-zoom-in ih-delay-md">{works.technology}</p>
                                                </figcaption>
                                            </figure>
                                        </Link>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className={styles.contact} id="contact">
                    <div className={styles.title}>Contact</div>
                    <div className={styles.contactLinks}>
                        <ul>
                            {contact.map((contact) => (
                                <>
                                    <li>
                                        <Link href={contact.url} target="_blank" rel="noopener noreferrer" className={styles.linkA}>
                                            <div className={styles.linkIcon} style={{ color: `${contact.color}` }}><i className={contact.icon}></i></div>
                                            <div className={styles.linkInfo}>
                                                <div className={styles.linkTitle}>{contact.title}</div>
                                                <div className={styles.linkId}>{contact.contactId}</div>
                                            </div>
                                        </Link>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer></Footer>
            <Script src='staticLib/js/ityped.js' strategy='beforeInteractive' />
            <Script src='staticLib/js/anime.min.js' strategy='afterInteractive' />
            <Script src='staticLib/js/lib.js' strategy='afterInteractive' />
        </>
    )
}

// microcms
export const getStaticProps = async () => {
    const link = await microcms.get({ endpoint: 'links' });
    const works = await microcms.get({ endpoint: 'works' });
    const contact = await microcms.get({ endpoint: 'contact' });

    return {
        props: {
            links: link.contents,
            works: works.contents,
            contact: contact.contents,
        },
    };
};

type Props = {
    links: LinkType[];
    works: WorksType[];
    contact: ContactType[];
}