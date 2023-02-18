import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li><Link href="/privacypolicy">プライバシーポリシー</Link></li>
          <li><Link href="/sitepolicy">サイトポリシー</Link></li>
          <li>©PocoPota</li>
        </ul>
      </footer>
    </>
  )
}
