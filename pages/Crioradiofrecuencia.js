import React, { Component, useState } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import Crio from '../Assets/crioradiofrec.jpg';

export const Crioradiofrecuencia = () => {

    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <p className={styles.categoriesTitle}>/Crioradiofrecuencia</p>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={Crio}
                        width="1700px"
                        height="1300px"
                    />
                </div>
                <div>
                    <div className={styles.treatmentText} style={showMore ? { height: "100%" } : { height: "300px", overflowY: "hidden" }}>
                        <p>
                            <h1 className={styles.title}>Crioradiofrecuencia</h1>
                            La crioradiofrecuencia es una terapia que combina la temperatura de la dermis en 10 grados bajo cero (crio), e internamente hasta 50 grados (radiofrecuencia multipolar) el shock producido por esta combinación frío externo y calor interno produce un aumento de colageno y elastina incrementando el tensado de la piel,consiguiendo asi disminuir la flacidez y rejuveneciendo el area en cuestion. <br />
                            Además de mejorar la flacidez y las líneas de expresión, tiene un efecto tensor y flash durante las primeras 48 horas. Este efecto inmediato, con una gran luminosidad, está convirtiendo a la crio radiofrecuencia facial en uno de los tratamientos favoritos de las celebrities para pisar la alfombra roja.<br />
                            Los resultados se ven a partir de la 1ra sesión, se aconseja tratamiento de 30 min a 50 min en la parte corporal y en la facial hasta 30 min cada 14/21 dias, de acuerdo a lo indicado por el profesional previa su evaluación.<br />
                            <br />Logrando:<br />
                            <ul>
                                <li>Tensado instantáneo y duradero a largo plazo de la piel</li>
                                <li>Estimulacion del colágeno y la elastina para lograr firmeza dérmica.</li>
                                <li>Rejuvenecimiento de la dermis facial logrando un lifting, borra arugas, surcos ,bolsas papada y marca el ovalo facial.</li>
                                <li>Promueve la lipolisis y refuerza la estructura dérmica para eliminar la celulitis</li>
                                <li>Aumento de la circulación que mejora el tejido subcutáneo graso facilitando su eliminación  </li>
                            </ul>
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
        </div >
    )
}
export default Crioradiofrecuencia