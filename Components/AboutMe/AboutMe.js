import styles from './AboutMe.module.css';
import Image from 'next/image';
import aboutMeImg from '../../Assets/vic.jpeg';
import React, { Component } from 'react';
import Logo from '../../Assets/logo.png';

export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ImgWrapper}>
        <Image className={styles.AboutMeImg}
          src={aboutMeImg}
          width="2000px"
          height="2400px"
        />
      </div>
      <div className={styles.aboutMeText}>
        <Image className={styles.Image}
          src={Logo}
          width="60px"
          height="60px"
        />
        <hr />
        <p>
          <b>Soy Vicky Cancellieri, cosmetóloga profesional, auxiliar en cosmiatria, dermopigmentadora y fundadora de VC. </b>
          <br />
          Si bien siempre fui una apasionada de la estética y el cuidado personal, mi viaje comenzó cuando a los 24 sufrí un acné hormonal y mi vida cambio. Luego de recorrer cientos de dermatólogos y profesionales en piel sin ningún resultado, me dije a mi misma, algo tengo que hacer y manos a la obra, comencé con toda esta locura.
          <br />
          Mi objetivo principal era estudiar para recuperar mi piel y a medida que fui estudiando, me fui enamorando de esta hermosa profesión. Jamás pensé en trabajar de esto, era algo muy para mí y era como una mi pasión que solamente desarrollaba puertas para adentro. Agrego que como buena Geminiana el conocimiento no ocupa lugar por ende me estudie tooooodo y todavía sigo estudiando porque amo capacitarme para brindar lo mejor.
          <br />
          Cae la pandemia del COVID19, cuarentena estricta y perdida de mi laburo en ese momento y dije, ¿y si arranco con algo de esto que tanto me gusta? Asique empece con algo muy pequeño, asesorías online de manera virtual obviamente y empece a recuperar pieles, enseñando como cuidarlas y mejorarlas en las rutinas diarias. En unos meses todo fue una locura, no se bien como sucedió, empece a tener seguidores, atender muchísimas personas en gabinete y en diciembre del 2020 lance mi marca artesanal VCbeautyCare.
          <br />
          Hoy en dia, ya con mi primera sucursal funcionando puedo decir que toda esta locura tenia un fin. Desde mi lugar, atendemos a las personas y logramos entender que buscan y que necesitan. A las pieles hay que darle amor, muchas veces menos es mas y no se necesita de una gran cantidad de productos o de un buen status económico para cuidarse la piel.
          <br />
          Mi misión hoy en dia es lograr sacar la belleza de todas las pieles que atiendo a través de enfocarme en su salud. Para mi y para todo mi equipo la piel es salud y debe tratarse como tal, no me enfoco tanto en las mejorías estéticas sino en construir y enseñar habitos saludables para generar una buena educación y un buen cuidado de la piel, lo que a la larga genera una increíble mejora estética.
          Te espero para que logremos todo esto juntas!
          A la piel hay que darle amor
        </p>
      </div>
    </div>
  )
}

export default AboutMe