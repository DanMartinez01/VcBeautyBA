import React, { Component } from 'react';
import data from '../../data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';
import Logo from '../../Assets/logo.png';



export const Categories = () => {
    return (
        <div>
            <h2 className={styles.Title}>VC beauty BA</h2>
            <h4 className={styles.Title}>Nuestros servicios:</h4>
            <div className={styles.container}>
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Asesorías</p>
                    <hr className={styles.divider} />
                    <Link href="/Asesorias" >
                        <a className={styles.CardText}>Asesorías personalizadas</a>
                    </Link>
                    <Link href="/Asesorias" >
                        <a className={styles.CardText}>Recibí tu asesoramiento personalizado online</a>
                    </Link>
                </div>
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Facial</p>
                    <hr className={styles.divider} />
                    <Link href="/HigieneFacial"><a className={styles.CardText}>Higiene facial</a></Link>
                    <Link href="/Peelings"><a className={styles.CardText}>Peelings</a></Link>
                    <Link href="/Dermaplanning"><a className={styles.CardText}>Dermaplanning</a></Link>
                    <Link href="/RadiofrecuenciaFacial"><a className={styles.CardText}>Radiofrecuencia</a></Link>
                </div>
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Permanent Make Up</p>
                    <hr className={styles.divider} />
                    <Link href="/PermanentMakeUp"><a className={styles.CardText}>Micropigmentación de labios</a></Link>
                    {/* <Link href="/PermanentMakeUp"><a className={styles.CardText}>Dermapen</a></Link>
                    <Link href="/PermanentMakeUp"><a className={styles.CardText}>Derma Hidratación</a></Link> */}
                    <p className={styles.CardText}>Dermapen</p>
                    <p className={styles.CardText}>Derma Hidratación</p>
                    <Link href="/DermaFull"><a className={styles.CardText}>Derma full face</a></Link>
                </div>
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Corporal</p>
                    <hr className={styles.divider} />
                    <Link href="/RadiofrecuenciaFacial" ><a className={styles.CardText}>Radiofrecuencia</a></Link>
                    <Link href="/CrioradiofrecuenciaFacial" ><a className={styles.CardText}>Crioradiofrecuencia</a></Link>
                    <Link href="/DepiDefinitiva"><a className={styles.CardText}>Depilación definitiva</a></Link>
                    <Link href="/Himfu" ><a className={styles.CardText}>Himfu</a></Link>
                </div>

            </div >
        </div >

    )
}
export default Categories