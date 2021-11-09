import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavComponent from './NavComponent';
import Carrousel from './Carrousel/Carrousel';
import Categories from './Categories/Categories';
import InfoSection from './InfoSection/InfoSection';
import Footer from '../pages/Footer/Footer';

import { SiWhatsapp } from 'react-icons/si';


function MyApp({ Component, pageProps }) {
  return (
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
      <NavComponent />
      <Carrousel />
      <Categories />
      {/* <Component {...pageProps} /> */}

      <InfoSection />
      <Footer />
    </>
  )

}

export default MyApp
