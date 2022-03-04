import styles from '../Footer/Footer.module.css';
import Image from 'next/image';

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
                        <a className={styles.footerLinks}
                            href="https://wa.me/5491130666726"
                            target="_blank"
                            rel="noopener noreferrer" >
                            <SiWhatsapp color="white" /> 111111111
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
                <div className={styles.col}>
                    <a className={styles.footerLinks}>
                        Inicio
                    </a>
                    <br />
                    <a className={styles.footerLinks}>
                        Tratamientos
                    </a>
                    <br />
                    <a className={styles.footerLinks}>
                        Turnos
                    </a>

                </div>
            </div>
            <hr />
            <div>
                <p className={styles.brandName}>
                    VcBeautyBA &copy;{new Date().getFullYear()}
                </p>
            </div>
        </div>

    )
}
export default Footer