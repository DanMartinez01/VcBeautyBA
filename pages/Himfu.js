import React, { Component, useState } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import himfu from '../Assets/crioradiofrec.jpg';

export const Himfu = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <p className={styles.categoriesTitle}>/Himfu</p>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={himfu}
                        width="1700px"
                        height="1300px"
                        alt="Himfu"
                    />
                </div>
                <div>
                    <div className={styles.treatmentText} style={showMore ? { height: "100%" } : { height: "300px", overflowY: "hidden" }}>
                        <p>
                            <h1 className={styles.title}>Himfu</h1>
                            Es la única terapia capaz de lograr la reducción de 1 a 3 cm de contorno desde la primera sesión sin necesidad de recurrir a cirugías, ni pinchazos, ni molestias y sin hematomas.
                            Son ondas sonoras de energía concentrada por ultrasonido que actúan haciendo un efecto termomecánico que consigue reducir el tejido graso subcutáneo sin dañar la dermis, epidermis ni tejidos adyacentes.<br />
                            Estas ondas de ultrasonido generan un incremento de la temperatura en el panículo adiposo provocando vibraciones de los adipocitos que llevan a la ruptura de la membrana celular con facilidad y a la liberación de triglicéridos que serán metabolizados por el hígado y usados como fuente de energía.<br />
                            Los resultados los vez a partir de la 1ra sesión, se aconseja tratamiento de 30 min a 50 min en la parte corporal hasta 30 min una vez por semana , de acuerdo a lo indicado por el profesional previa su evaluación.<br />
                            <br />Logrando:<br />
                            <ul>
                                <li>    Promueve la lipolisis y refuerza la estructura dérmica para eliminar la celulitis.</li>
                                <li>  Aumento de la circulación que mejora el tejido subcutáneo graso facilitando su eliminación.</li>
                                <li>Reduce el volumen y modela el cuerpo</li>
                                <li>Previene la aparición de celulitis y adiposidades</li>
                            </ul>
                            Tratamiento ideal para combinar con Crioradiofrecuencia corporal para lograr mejores resultados.
                        </p>
                        {/* <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div> */}
                    </div>
                    <button className={styles.seeMore} onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Ocultar" : "Seguir leyendo"}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Himfu