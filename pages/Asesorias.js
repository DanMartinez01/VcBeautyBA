import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import Ases from '../Assets/Facial1.jpg';
export const Asesorias = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <p className={styles.categoriesTitle}>/Asesorías</p>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={Ases}
                        width="1500px"
                        height="1900px"
                    />
                </div>
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Asesorías</h1>
                        La mayoría de mis pacientes realizan asesorías online que incluye un diagnóstico de afecciones cutáneas en donde planteamos un objetivo alcanzable y posteriormente un diseño y armado de plan de rutinas y productos en base a lo que cada persona necesita,  a tu medida y que sea único y especial para vos. <br />
                        Estos planes cuentan con indicaciones de rutinas de higiene que generalmente son dos por día durante la mañana y la noche, y una higiene profunda por semana.  También realizo la asesoría de productos afínes a comprar para tu biotipo cutáneo y toda una sección que cuenta con consejos y #VCtips que te doy para que los pongas en practica.<br />
                        El formato es digital, se entrega un documento de word que consta de 8 hojas con todas las explicaciones detalladas y mis teléfonos de contacto por si surgen dudas, estamos siempre en contacto.<br />
                        La modalidad es de forma online por audio de WhatsApp, videollamada, Skype o GoogleMeet. Luego de abonar el importe total se reserva un turno, coordinamos día y horario y charlamos durante una hora aproximadamente, lo importante es que evacuen bien las dudas.<br />
                        Previamente  a nuestro encuentro, te envío una ficha cosmetológica via email en formato word para que me completes y mandes 24 hs antes, diseñada con preguntas en clave para poder descartar afecciones y determinadas cuestiones junto con una serie de fotos que te pido que me envíes por WhatsApp o mail (NO se diagnóstica por videollamada al momento de realizar la consulta porque se pierde la calidad y es poco preciso.)<br />
                        Se puede abonar por Mercado Pago (tiene un 10% de recargo por la aplicación), por transferencia bancaria o en efectivo. Una vez efectuado el pago, se coordina día y horario y pactamos la asesoría.

                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Asesorias