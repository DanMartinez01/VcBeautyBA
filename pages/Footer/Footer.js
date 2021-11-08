import styles from '../Footer/Footer.module.css';
import Image from 'next/image';

import { ImFacebook } from 'react-icons/im';
import { SiWhatsapp } from "react-icons/si";
import { MdLocationOn } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';


import visa from '../Assets/visa.png';
import mastercard from '../../pages/Assets/mastercard.png';
import mercadopago from '../../pages/Assets/mercadopago.png';
import pagofacil from '../../pages/Assets/pagofacil.png';

export const Footer = () => {
    return (
        <div className={styles.mainFooter}>

            <div className={styles.row}>
                <div className={styles.col}>
                    <h5>VcBeautyBA</h5>
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
                        <br />
                        <li>
                            <MdLocationOn color="white" /> Moreno
                        </li>
                    </ui>
                </div>
                <div className={styles.payments}>
                    <Image className={styles.paymentIcon}
                        alt="mercado pago"
                        src={mercadopago}
                        width="40px"
                        height="20px"

                    />
                    <Image className={styles.paymentIcon}
                        alt="pago facil"
                        src={pagofacil}
                        width="40px"
                        height="20px"
                    />
                    <Image className={styles.paymentIcon}
                        alt="visa"
                        src={visa}
                        width="40px"
                        height="20px"
                    />
                    <Image className={styles.paymentIcon}
                        alt="master card"
                        src={mastercard}
                        width="35px"
                        height="20px"
                    />
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