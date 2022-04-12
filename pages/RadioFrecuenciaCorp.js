import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import peeling from '../Assets/peeling.jpg';
import imgLimpieza from '../Assets/radiofrec.jpeg';

export const RadioFrecuenciaCorp = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>/Radiofrecuencia Corporal</h4>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1000px"
                        height="1400px"
                    />
                </div>

                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Crioradiofrecuencia Corporal</h1>
                        La crioradiofrecuencia es una nueva terapia que combina la temperatura de la dermis en 10 grados bajo cero (crio), e internamente hasta 50 grados (radiofrecuencia multipolar) el shock producido por esta combinación frío externo y calor interno produce un aumento de colageno y elastina  incrementando el tensado de la piel y reconstituyendo la celula de celulitis (PEFE).<br />
                        El efecto calentamiento (radiofrecuencia) genera una lipolisis por el aumento de la temperatura y hace transpirar la celula adiposa provocando la disminución de su tamaño, de esta manera produce el efecto reductor. <br />
                        La crio radiofrecuencia multipolar realiza un calentamiento simultaneo de las capas profundas y supeficiales de la piel, con mayor cantidad de arcos de radio-frecuencia. Estimulando ña producción del nuevo colágeno.<br />
                        Dicha radiofrecuencia cuenta con tecnología multifrecuencial , ala cual permite trabajar con mayor precisión a una profundidad de penetración especifica.
                        Los resultados los vez a partir de la 1ra sesión, se aconseja tratamiento de 30 min a 50 min en la parte corporal y en la facial hasta 30 min 14/21 dias, de acuerdo a lo indicado por el profesional previa su evaluación. <br />
                        Logrando:<br />
                        <ul>
                            <li> Tensado instantáneo y duradero a largo plazo de la piel</li>
                            <li>Estimulacion del colágeno y la elastina para lograr firmeza dérmica.</li>
                            <li>  Rejuvenecimiento de la dermis facial logrando un lifting ,borra arugas, surcos ,bolsas papada y marca el ovalo facial.</li>
                            <li>Promueve la lipolisis y refuerza la estructura dérmica para eliminar la celulitis.</li>
                            <li>Aumento de la circulación que mejora el tejido subcutáneo graso facilitando su eliminación.</li>
                            <li> Reduce el volumen y modela el cuerpo.</li>
                            <li>Previene la aparición de celulitis y adiposidades</li>
                        </ul>
                        Tratamiento ideal para combinar con HiMfu corporal para lograr mejores resultados.
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
export default RadioFrecuenciaCorp