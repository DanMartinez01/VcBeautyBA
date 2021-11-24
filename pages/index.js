import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Categories from '../Components/Categories/Categories';
import React, { Component } from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VcBeautyBa</title>
        <meta name="VcBeautyBA" content="Estética, tratamientos faciales y corporales" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.jpg" />
        {/* Open Graph data  */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vc Beauty BA" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://vc-beauty-ba-quxzr3byy-danmartinez01.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCarImg1.8cf4beaf.jpg&w=1920&q=75" />
        <meta property="og:url" content="ENLACE PERMANENTE" />
        <meta property="og:site_name" content="NOMBRE DEL SITIO" />
      </Head>
      <main>
        <Categories />
      </main>
    </div >
  )
}
