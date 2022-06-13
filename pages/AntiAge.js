import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/Facial1.jpg';

export const AntiAge = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>/Anti age</h4>
            </div>
            <div className={styles.container}>
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1600px"
                        height="1900px"
                    />
                </div>
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Velo de colágeno</h1>
                        Se trata de un tratamiento antiage que logra devolver la luminosidad, tersitud y uniformidad de la piel.  El velo es una lámina enriquecida con colágeno que se aplica sobre la piel y se deja actuar por varios minutos para que se absorban sus propiedades ya que combatimos la deshidratación de la piel y prevenimos el envejecimiento cutáneo. La hidratación intensiva que brinda esta higiene regenera la epidermis aportando suavidad y flexibilidad perdida asi como también atenua las pequeñas arrugas del rostro.<br />
                        Es un tratamiento tanto antiage como preventivo. A partir de nuestros 30 años, las células van perdiendo la capacidad de producción de colágeno, esencial para lucir una piel tersa y elástica, y es vital reponerlo para prevenir primeras señales de envejecimiento.<br />
                        En gabinete, aplicamos el velo de colágeno tras la preparación de la piel mediante una limpieza o exfoliación. Posteriormente, se suele aplicar alguna crema o sérum adaptado a cada tipo de piel y dependiendo del caso a tratar. No requiere de cuidados previos ni posteriores. Se puede combinar en cada caso con aparatología y rutinas diseñadas por el profesional.<br /> <br />
                        <b>Duración:</b> 1 hora y media
                        <br /> <br />
                        <h1 className={styles.title}> Higienes anti age</h1>
                        <p>
                            Son tratamientos tanto antiage como preventivos. A partir de nuestros 30 años, las células van perdiendo la capacidad de producción de colágeno, esencial para lucir una piel tersa y elástica, y es vital reponerlo para prevenir primeras señales de envejecimiento.<br />
                            En gabinete, aplicamos máscaras afines con determinados activos enriquecidos y antiaging tras la preparación de la piel mediante una higiene previa o exfoliación. Posteriormente, se suele aplicar alguna crema o sérum adaptado a cada tipo de piel y dependiendo del caso a tratar. No requiere de cuidados previos ni posteriores. Se puede combinar en cada caso con aparatología y rutinas diseñadas por el profesional.<br />
                            El profesional, en este caso, es la persona que indicará que tipo de tratamiento es mejor realizar según el estado de la piel del paciente.<br /><br />
                            <b>Duración: 1 hora</b>
                        </p>


                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Pedir turno</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AntiAge