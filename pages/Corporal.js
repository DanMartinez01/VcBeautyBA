import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/5.jpg';

export const Corporal = () => {
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
                        La mayoría de mis pacientes realizan asesorías online que incluye un diagnóstico de afecciones cutáneas en donde planteamos un objetivo alcanzable y posteriormente un diseño y armado de plan de rutinas y productos en base a lo que cada persona necesita,  a tu medida y que sea único y especial para vos. <br />
                        Estos planes cuentan con indicaciones de rutinas de higiene que generalmente son dos por día durante la mañana y la noche, y una higiene profunda por semana.  También realizo la asesoría de productos afínes a comprar para tu biotipo cutáneo y toda una sección que cuenta con consejos y #VCtips que te doy para que los pongas en practica.<br />
                        El formato es digital, se entrega un documento de word que consta de 8 hojas con todas las explicaciones detalladas y mis teléfonos de contacto por si surgen dudas, estamos siempre en contacto.<br />
                        La modalidad es de forma online por audio de WhatsApp, videollamada, Skype o GoogleMeet. Luego de abonar el importe total se reserva un turno, coordinamos día y horario y charlamos durante una hora aproximadamente, lo importante es que evacuen bien las dudas.<br />
                        Previamente  a nuesro encunetro, te envío una ficha cosmetológica via email en formato word para que me completes y mandes 24 hs antes, diseñada con preguntas en clave para poder descartar afecciones y determinadas cuestiones junto con una serie de fotos que te pido que me envíes por WhatsApp o mail (NO se diagnóstica por videollamada al momento de realizar la consulta porque se pierde la calidad y es poco preciso.)<br />
                        Se puede abonar por Mercado Pago (tiene un 10% de recargo por la aplicación), por transferencia bancaria o en efectivo. Una vez efectuado el pago, se coordina día y horario y pactamos la asesoría.

                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Pedir turno</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Corporal