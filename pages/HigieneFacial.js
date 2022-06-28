import React, { Component, useState } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/skincare.jpg';

export const Treatment = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>/Higiene Facial</h4>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1900px"
                        height="1600px"
                    />
                </div>
                <div >
                    <div className={styles.treatmentText} style={showMore ? { height: "100%" } : { height: "250px", overflowY: "hidden" }}>
                        <p>
                            <h1 className={styles.title}>Higiene Facial</h1>
                            <b> Higiene simple</b> <br />
                            La higiene simple (sin extracción) incluye preparación de la piel, limpieza, afinamiento de la capa córnea, aplicación de lociones, mascarillas afines y protección de la piel.Se cambia máscara según problemática.<br />
                            <b>Duración</b> 1 hora
                        </p>
                        <p>
                            <b>Higiene profunda con extracciones</b> <br />
                            La higiene profunda con extracción incluye preparación de la piel, limpieza, afinamiento de la capa córnea, extracción de comedones, espinillas y pustulas (en el caso que hubiera), aplicación de lociones, mascarillas afines y protección de la piel.<br />
                            <b>Duración</b>: 1 y 30- 2 horas aproximadamente.
                        </p>
                        <p><b>Higienes clarificantes</b><br />
                            Las higienes con complementos clarificantes tratan de disminuir en la mayor medida posible los restos de manchas previas o irregularidades en el tono de piel del paciente, sin la utilizacion de acidos afines. Incluyen una preparación de la piel, higiene, afinamiento de la capa córnea, extracción de comedones, espinillas y pustulas (en el caso que hubiera), aplicación de lociones, mascarillas afines y protección de la piel.<br />
                            En las higienes clarificantes todos los productos que utiliza la profesional contienen activos que contribuyan a la despigmentación y clarificación de irregularidades cutáneas. Puede y suele combinarse con tratamientos de peeling, si tal es el caso el profesional evaluara lo que es mas indicado para cada caso.<br />
                            <b>Duración:</b> el procedimiento dura aproximadamente 1 hora
                        </p>
                    </div>
                    <button className={styles.seeMore} onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Ocultar" : "Seguir leyendo"}
                    </button>
                    {/* <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div >
    )
}
export default Treatment