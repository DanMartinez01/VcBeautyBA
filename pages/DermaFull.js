import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/5.jpg';

export const DermaFull = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>Asesorías</h4>
            </div>
            <div className={styles.container} >
                <Image className={styles.treatmentImg}
                    src={imgLimpieza}
                    width="1800px"
                    height="2400px"
                />
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Derma Full Face VC</h1>
                        El microneedling es una terapia no invasiva de inducción antiaging e hidratante más efectiva,  que consiste en micropunciones en la piel logrando que los activos que posteriormente apliquemos penetren de manera más efectiva en las capas más profundas de la piel.<br />
                        En gabinete realizamos la preparación correspondiente de la piel, exfoliaciones previas, asi como también asepsia y tonificación de la piel para luego aplicar, o no, una crema anestésica local y comenzar con las micropunciones. A través del sistema microneedling mejor conocido como Dermapen inyectamos microscópicamente algunos activos principales afines según problemática. Se suele aplicar ácido hialurónico, vitaminas A, C o E, péptidos de última generación, oro 24k y niacinamida.<br />
                        Se puede tratar rostro completo, contorno de ojos y zona orbicular, surco nasogeniano o de marioneta, arrugas perilabiales o bien las zonas que se deseen tratar en cada caso. No requiere de preparación previa o posterior y es totalmente ambulatorio.  Es indoloro y totalmente invasivo pero eficaz. <br />
                        Luego de su aplicación se pueden observar las zonas un poco enrojecidas o irritadas por la presión y las incisiones de las micro agujas así como también, pueden no observarse alteraciones.<br /><br />
                        <b>Duración:</b> el procedimiento dura aproximadamente 1 hora, 1 hora y media.

                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Pedir turno</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default DermaFull