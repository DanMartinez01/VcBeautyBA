import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VcBeautyBa</title>
        <meta name="VcBeautyBA" content="Vc Beauty BA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* Vc Beauty BA */}
        </h1>
      </main>
    </div >
  )
}
