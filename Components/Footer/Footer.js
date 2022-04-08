import styles from '../Footer/Footer.module.css';
import Image from 'next/image';
import Logo from '../../Assets/logo.png';

import { ImFacebook } from 'react-icons/im';
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa';
import React, { Component } from 'react';


// import visa from '../Assets/visa.png';
// import mastercard from '../../pages/Assets/mastercard.png';
// import mercadopago from '../../pages/Assets/mercadopago.png';
// import pagofacil from '../../pages/Assets/pagofacil.png';

export const Footer = () => {
    return (
        <div className={styles.mainFooter}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <ui className="list-unstyled">
                        <Image
                            src={Logo}
                            width="50px"
                            height="50px"
                        />
                    </ui>
                </div>
                <div className={styles.col}>
                    <a href="/" className={styles.footerLinks}>
                        Inicio
                    </a>
                    <br />
                    <a className={styles.footerLinks}>
                        Tratamientos
                    </a>
                    <br />
                    <a href="https://wa.me/+5491123428263"
                        target="_blank"
                        rel="noopener noreferrer" className={styles.footerLinks}>
                        Turnos
                    </a>
                </div>
                <div className={styles.col}>
                    <ui className="list-unstyled">
                        <a className={styles.footerLinks}
                            href="https://wa.me/+5491123428263"
                            target="_blank"
                            rel="noopener noreferrer" >
                            <SiWhatsapp color="white" /> 1123428263
                        </a>
                        <br />
                        <a className={styles.footerLinks} target="_blank" rel="noreferrer"
                            href="https://www.facebook.com/VC-Beauty-tips-107597083987827">
                            <ImFacebook color="white" /> Facebook
                        </a>
                        <br />
                        <a className={styles.footerLinks} target="_blank" rel="noreferrer"
                            href="https://www.instagram.com/vc.beautyba/">
                            <FaInstagram color="white" /> Instagram
                        </a>
                    </ui>
                </div>
            </div>
            <hr />
            <div>
                <p className={styles.brandName}>
                    vcbeautyba &copy;{new Date().getFullYear()}
                </p>
            </div>
        </div>

    )
}
export default Footer