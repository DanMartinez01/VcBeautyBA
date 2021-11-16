import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* google font */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        <title>VcBeautyBa</title>
        <meta name="VcBeautyBA" content="Estética, tratamientos facialesy corporales" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.jpg" />
        {/* Open Graph data  */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vc Beauty BA" />
        <meta property="og:description" content="DESCRIPCIÓN DEL CONTENIDO DE MI PÁGINA" />
        <meta property="og:image" content="https://vc-beauty-ba-quxzr3byy-danmartinez01.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCarImg1.8cf4beaf.jpg&w=1920&q=75" />
        <meta property="og:url" content="ENLACE PERMANENTE" />
        <meta property="og:site_name" content="NOMBRE DEL SITIO" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hola
        </h1>
      </main>
    </div >
  )
}
