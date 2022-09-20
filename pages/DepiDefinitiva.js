import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/depilacion.png';

export const DepiDefinitiva = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <p className={styles.categoriesTitle}>/ Depilación Definitiva</p>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1400px"
                        height="1400px"
                    />
                </div>
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}> Depilación Definitiva</h1>
                        En VC contamos con el método Soprano Ice Platinum, equipo vanguardista y de alta tecnología que permite tratar todo tipo de pieles, incluso las de fototipo VI y las bronceadas con rayos UVA y todo tipo de vello.<br />
                        Su tecnología de vanguardia combina las longitudes de onda de Alejandrita, diodo y Nd-Yag, en un solo pulso. Como resultado, el sistema aporta a su metodología de uso una capacidad de trabajo no conseguida hasta el momento. Además, su excelente capacidad de congelamiento en los cabezales hace que este método sea totalmente indoloro y agradable para los pacientes.<br />
                        Generalmente, este tipo de tratamientos se realiza en promedio de 8 a 10 sesiones y la frecuencia entre una y otra puede incluso variar. Se recomienda realizar un refuerzo cada 6 meses durante 2 años, todo dependiendo del caso y del paciente, a veces no es necesario.
                    </p>
                    {/* <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
export default DepiDefinitiva