import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import Lips from '../Assets/lips.jpg';

export const GlowyLips = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <p className={styles.categoriesTitle}>/Glowy Lips</p>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={Lips}
                        width="1500px"
                        height="1100px"
                    />
                </div>
                <div className={styles.treatmentText}>
                    <h1 className={styles.title}>Glowy Lips</h1>
                    <p>
                        VC GlowyLips es un tratamiento en el cual realizamos una hidratación de labios con ácido hialuronico mediante micro inyecciones a través del sistema microneedling mejor conocido como Dermapen.
                        <br />
                        Lo que buscamos es hidratar los labios en profundidad para lograr devolver el aspecto de naturalidad y luminosidad propia y genética, mejorar la textura, rellenar líneas y surcos formados por  deshidratación y realzar el volumen sin cambiar la configuración natural de los  labios.
                        <br />
                        No es un tratamiento que proporcione volumen, si bien vemos el labio mas voluminizado esto tiene que ver más con un efecto secundario de la aplicación y la manera de microinyectar los activos afines. La sensación de volumen, homigueo y enrojecimiento tiene una duración aproximada de 2 a 3 horas luego de realizado el tratamiento y varía según cada paciente y su cicatrización.
                        <br />
                        Es un tratamiento indoloro que se realiza sin anestecia y es totalmente ambulatorio. El efecto de hidratación dura entre 6 a 7 días y se puede realizar 1 vez por semana sin contraindicaciones.
                    </p>
                    {/* <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default GlowyLips