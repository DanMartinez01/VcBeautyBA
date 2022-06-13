import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Carrousel from '../Components/Carrousel/Carrousel';
import Categories from '../Components/Categories/Categories';
import AboutMe from '../Components/AboutMe/AboutMe';
import Maps from '../Components/Maps/Maps';
import React, { Component } from 'react';

const location = {
  address: 'Hipólito Yrigoyen 131, B1744 CNB, Bs.As.',
  lat: -34.650725373289006,
  lng: -58.79535839590361,
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="google-site-verification" content="TYckOGfqJo4GqLuUZZAN5x2aOKQLijoRtdasKeWSukU" />
        <title>VC beauty BA</title>
        <meta name="VCbeautyBA" content="Estética, tratamientos faciales y corporales" />
        <link rel="icon" href="https://www.vcbeautyba.com.ar/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.786bdcbd.png&w=64&q=75" />
        {/* Open Graph data  */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="VC Beauty" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://www.vcbeautyba.com.ar/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.786bdcbd.png&w=64&q=75.jpg" />
        <meta property="og:url" content="ENLACE PERMANENTE" />
        <meta property="og:site_name" content="NOMBRE DEL SITIO" />
      </Head>
      <main>
        <Carrousel />
        <Categories />
        <AboutMe />
        <Maps location={location} zoomLevel={18} />
      </main>
    </div >
  )
}
