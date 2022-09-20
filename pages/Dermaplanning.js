import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import dermaplanning from '../Assets/dermaplanning.jpg';

export const Dermaplanning = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <p className={styles.categoriesTitle}>/Dermaplanning</p>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={dermaplanning}
                        width="1700px"
                        height="1300px"
                    />
                </div>
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Dermaplanning</h1>
                        El Dermaplaning es un método de exfoliación físico que consiste en utilizar un bisturí de calibre 10 para raspar suavemente la capa superior de la piel constituida por células muertas y vello, con el fin de revelar una tez más brillante, suave,  asi como también estimular la renovación epidérmica y la síntesis de colágeno, mejorando el aspecto general de la piel ayudando a convertir arrugas o líneas de expresión menos perceptibles.<br />
                        Es un tratamiento ideal para hombres y mujeres que deseen eliminar el vello facial y mejorar la estructura de la piel logrando un acabado suave y sedoso asi como también es un método de exfoliación perfecta para pacientes con pieles sensibles y rosácea.<br />
                        El dermaplaning también puede funcionar cmo un tratamiento de preparación para otras intervenciones estéticas, cosméticas o cosmetológicas debido a que luego de realizarlo se produce una mejora en la absorción cutánea de los acitvos cosméticos que se puedan aplicar sobre el estrato corneo, ya sean activos químicos, alcalinos o maquillaje.<br />
                        Se realiza en gabinete luego de una preparación de la piel y posteriormente se colocan mascaras afines para tratar las diversas problemáticas que la piel presente en cada caso. No requiere de cuidados previos ni posteriores y es totalmente ambulatorio. <br /> <br />
                        <b>Duracion:</b> el tratamiento dura aproximadamente 1 hora.

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
export default Dermaplanning