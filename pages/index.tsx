import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Open Graph implementation page title" />
        <meta
          property="og:description"
          content="Open Graph implementation page desctiption"
        />
        <meta
          property="og:image"
          content="https://og-examples.vercel.sh/api/static"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This page is the implementation of dynamic Open Graph image
          <code className={styles.code}>from Vercel @vercel/og</code>
        </p>

        <p className={styles.description}>Tutorial video implementation can be found here: <a href="#" className={styles.videoLink}><u>Click video link here</u></a></p>

        {/* embed video iframe here */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
