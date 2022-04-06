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
        <title>VcBeautyBa</title>
        <meta name="VcBeautyBA" content="Estética, tratamientos faciales y corporales" />
        <link rel="icon" href="%PUBLIC_URL%/logo1.png" />
        {/* Open Graph data  */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="VCbeauty" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://vc-beauty-ba-quxzr3byy-danmartinez01.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCarImg1.8cf4beaf.jpg&w=1920&q=75" />
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
