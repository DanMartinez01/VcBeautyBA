
import styles from './InfoSection.module.css'
import React, { Component } from 'react';

export const InfoSection = () => {
    return (
        <div className={styles.mainInfoSection}>
            <div className={styles.col}>
                <ui>
                    <a className={styles.InfoSectionLink} to='/Camas'>Tratamientos</a>
                    <br />
                    <a className={styles.InfoSectionLink} to='/Camas'>Productos</a>
                    <br />
                    <a className={styles.InfoSectionLink} to='/Camas'>Antes y Despues</a>
                </ui>
            </div>
            <div className={styles.col}>
                <ui>
                    <a className={styles.InfoSectionLink} to='/'>Home</a>
                    <br />
                    <a className={styles.InfoSectionLink} to='/Contacto'>Contacto</a>
                    <br />
                    <a className={styles.InfoSectionLink} to='/Contacto'>Pedi tu turno</a>
                </ui>
            </div>
        </div>
    )
}
export default InfoSection