import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/lips.jpg';

export const PermanentMakeUp = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>/Permanent MakeUp</h4>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1400px"
                        height="1000px"
                    />
                </div>

                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Permanent MakeUp</h1>
                        Es una técnica de maquillaje semipermanente que tiene tanto fines estéticos como clínicos que permite definir labios con contornos desdibujados, devolver frescura y tono, y dependiendo del método y del pigmento que se utilice se consigue un efecto óptico aportando mayor volumen, y un aspecto de glow inmediato.<br />
                        La micropigmentación de labios se realiza implantando pigmentos a nivel epidérmico, a través de un dermógrafo y agujas.
                        Lo que primero realizamos es un diseño previo donde la profesional asesora a la paciente con el efecto o incluso el tono de los pigmentos en base al visagismo facial.<br />
                        Este tratamiento nos brinda la posibilidad de lucir labios perfectos en cualquier momento consiguiendo armonía facial al dar volumen,  neutralizar, aportar naturalidad y acabar con las asimetrias.<br />
                        La micropigmentación de labios consta de dos sesiones, entre las cuales debe haber un intervalo de entre 6 y 10 semanas, en función de la piel y la edad del cliente. El tratamiento dura entre 2 y 3 años, dependiendo del tipo de piel y estilo de vida.
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default PermanentMakeUp