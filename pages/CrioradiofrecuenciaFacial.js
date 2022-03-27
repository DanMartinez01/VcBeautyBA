import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/5.jpg';

export const CrioradiofrecuenciaFacial = () => {
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
                        <h1 className={styles.title}>Crioradiofrecuencia facial</h1>
                        LA CRIORADIOFRECUENCIA Es una terapia que combina la temperatura de la dermis en 10 grados bajo cero (crio), e internamente hasta 50 grados (radiofrecuencia multipolar) el shock producido por esta combinación frío externo y calor interno produce un aumento de colageno y elastina incrementando el tensado de la piel, CONSIGUIENDO ASÍ DISMINUIR LA FLACIDEZ Y REJUVENECIENDO DEL ÁREA EN CUESTIÓN. <br />
                        Además de mejorar la flacidez y las líneas de expresión, tiene un efecto tensor y flash durante las primeras 48 horas. Este efecto inmediato, con una gran luminosidad, está convirtiendo a la crio radiofrecuencia facial en uno de los tratamientos favoritos de las celebrities para pisar la alfombra roja.<br />
                        Los resultados se ven a partir de la 1ra sesión, se aconseja tratamiento de 30 min a 50 min en la parte corporal y en la facial hasta 30 min cada 14/21 dias, de acuerdo a lo indicado por el profesional previa su evaluación.<br />
                        Logrando:<br />
                        <ul>
                            <li>Tensado instantáneo y duradero a largo plazo de la piel</li>
                            <li>Estimulacion del colágeno y la elastina para lograr firmeza dérmica.</li>
                            <li>Rejuvenecimiento de la dermis facial logrando un lifting ,borra arugas, surcos ,bolsas papada y marca el ovalo facial.</li>
                            <li>Promueve la lipolisis y refuerza la estructura dérmica para eliminar la celulitis</li>
                            <li>Aumento de la circulación que mejora el tejido subcutáneo graso facilitando su eliminación  </li>
                        </ul>
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Pedir turno</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CrioradiofrecuenciaFacial