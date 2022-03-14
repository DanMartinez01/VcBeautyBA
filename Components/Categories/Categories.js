import React, { Component } from 'react';
import data from '../../data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';
import Logo from '../../Assets/logo.png';



export const Categories = () => {
    return (
        <div className={styles.container}>

            <div className={styles.Header}>
                <Image className={styles.Image}
                    src={Logo}
                    width="60px"
                    height="60px"
                />
                Nuestros servicios
            </div>

            {data.map((item) => (
                <div className={styles.Card} key={item.id}>
                    <div className={styles.CardText}>
                        <Link href={item.route}>
                            <a className={styles.CardText}>{item.title}</a>
                        </Link>
                    </div>
                    <Image
                        src={item.file}
                        width="670px"
                        height="460px"
                        alt="Categorias"
                    />
                </div>

            ))
            }
        </div >

    )
}
export default Categories