import React, { Component } from 'react';
import styles from '../Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../../Assets/5.jpg';

export const Treatment = () => {
    return (
        <div className={styles.container} >
            <Image className={styles.treatmentImg}
                src={imgLimpieza}
                width="1600px"
                height="1800px"
            />
            <div className={styles.treatmentText}>
                <h1 className={styles.title}>Higiene Facial</h1>
                <p><b> HIGIENE SIMPLE:</b></p>
                <p>
                    La higiene simple (sin extracción) incluye preparación de la piel, limpieza, afinamiento de la capa córnea, aplicación de lociones, mascarillas afines y protección de la piel.Se cambia máscara según problemática.<br />
                    DURACIÓN: 1 hora
                </p>
                <p><b>HIGIENE PROFUNDA CON EXTRACCIONES:</b></p>
                <p>

                    La higiene profunda con extracción incluye preparación de la piel, limpieza, afinamiento de la capa córnea, extracción de comedones, espinillas y pustulas (en el caso que hubiera), aplicación de lociones, mascarillas afines y protección de la piel.<br />
                    DURACIÓN: 1 y 30- 2 horas aproximadamente.
                </p>
                <button className={styles.button}>Pedir turno</button>
            </div>
        </div>
    )
}
export default Treatment