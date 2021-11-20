import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from '@react-aria/ssr';
import Link from 'next/dist/client/link';


import NavComponent from '../Components/NavComponent/NavComponent';
import Carrousel from '../Components/Carrousel/Carrousel';
import Categories from '../Components/Categories/Categories';
import InfoSection from '../Components/InfoSection/InfoSection';
import AboutMe from '../Components/AboutMe/AboutMe';
import Footer from '../pages/Footer/Footer';
import { SiWhatsapp } from 'react-icons/si';
import Treatment from './Treatment/Treatment';


function MyApp() {
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
        <NavComponent />
        <Carrousel />
        <Categories />
        <button>
          <Link href='/Treatment'>Treatments</Link>
        </button>
        <AboutMe />
        <Treatment />
        <InfoSection />
        <Footer />
      </>
    </SSRProvider>
  )

}

export default MyApp
