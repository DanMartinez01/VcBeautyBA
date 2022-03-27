import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/5.jpg';

export const Treatment = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>Asesorías</h4>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1800px"
                        height="2400px"
                    />
                </div>
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Higiene Facial</h1>
                        <b> Higiene simple:</b> <br />
                        La higiene simple (sin extracción) incluye preparación de la piel, limpieza, afinamiento de la capa córnea, aplicación de lociones, mascarillas afines y protección de la piel.Se cambia máscara según problemática.<br />
                        <b>Duración</b> 1 hora
                    </p>
                    <p>
                        <b>Higiene profunda con extracciones:</b> <br />
                        La higiene profunda con extracción incluye preparación de la piel, limpieza, afinamiento de la capa córnea, extracción de comedones, espinillas y pustulas (en el caso que hubiera), aplicación de lociones, mascarillas afines y protección de la piel.<br />
                        <b>Duración</b>: 1 y 30- 2 horas aproximadamente.
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Pedir turno</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Treatment