import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from '@react-aria/ssr';
import Link from 'next/dist/client/link';


import NavComponent from '../Components/NavComponent/NavComponent';
// import Carrousel from '../Components/Carrousel/Carrousel';
// import Categories from '../Components/Categories/Categories';
// import InfoSection from '../Components/InfoSection/InfoSection';
// import AboutMe from '../Components/AboutMe/AboutMe';
import Footer from '../Components/Footer/Footer';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

import React, { Component } from 'react';
// import Treatment from './Treatment/Treatment';


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <>
        <div>
          <a
            href="https://wa.me/2348100000000"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" whatsapp-icon">
              <SiWhatsapp size="large" />
            </i>
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/vc.beautyba/"
            className="whatsapp_float2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" whatsapp-icon2">
              <SiInstagram size="small" />
            </i>
          </a>
        </div>
        <NavComponent />
        <Component {...pageProps} />
        <Footer />
      </>
    </SSRProvider>
  )

}

export default MyApp
        // <Carrousel />
        // <Categories />
        // <button>
        //   <Link href='/Treatment'>Treatments</Link>
        // </button>
        // <InfoSection />