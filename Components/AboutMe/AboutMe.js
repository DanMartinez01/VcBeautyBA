import styles from './AboutMe.module.css';
import Image from 'next/image';
import aboutMeImg from '../../Assets/vic.jpeg';
import React, { Component } from 'react';

export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <Image className={styles.AboutMeImg}
        src={aboutMeImg}
        width="1900px"
        height="2400px"
        fluid
      />
      <div className={styles.aboutMeText}>
        <h3 className={styles.aboutMeTitle}><b>VC BEAUTY</b></h3>
        <hr />
        <p>
          ¡EL MAQUILLAJE ES MÁS DE LO QUE IMAGINAMOS! LO USAMOS PARA VERNOS Y SENTIRNOS MEJOR, IMPACTANDO POSITIVAMENTE EN NUESTRA AUTOESTIMA.INFLUYE TAMBIÉN EN LO QUE TRANSMITIMOS A LOS DEMÁS Y AUMENTA NUESTRA CONFIANZA PARA LOGRAR LO QUE NOS PROPONGAMOS.<br />
          ES FASCINANTE NO? A VECES IMPLEMENTARLO A NUESTRA RUTINA DIARIA NO RESULTA FÁCIL. IMAGÍNATE LEVANTARTE TODOS LOS DÍAS Y ESTAR MAQUILLADA! BUENO, ¡DE ESO NOS OCUPAMOS NOSOTRAS!<br />
        </p>
        <p>
          NUESTRO EQUIPO SE CONFORMA POR PROFESIONALES ALTAMENTE CAPACITADOS Y DEBIDAMENTE CERTIFICADOS CON EXPERIENCIA COMPROBADA. <br />
          CADA UNO DE LOS INTEGRANTES FUE SELECCIONADO POR SU CAPACIDAD Y POR SU CALIDEZ HUMANA QUE SE VE PLASMADA EN EL TRATO Y LA ATENCIÓN QUE RECIBE NUESTRO PÚBLICO.
        </p>
        <p>
          TENEMOS COMO OBJETIVO POTENCIAR LA BELLEZA NATURAL DE NUESTRAS CLIENTAS Y CONFIAMOS EN QUE MENOS ES MAS.<br /> POR ESO, CUIDAMOS LOS DETALLES, EVITANDO EXCESOS, Y APOSTANDO SIEMPRE A UN RESULTADO ARMÓNICO Y NATURAL.
        </p>
        <p>
          TE INVITO A QUE LOGREMOS JUNTAS TU MEJOR VERSIÓN.
        </p>
      </div>
    </div>
  )
}

export default AboutMe