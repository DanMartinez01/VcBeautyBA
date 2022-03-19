import React, { Component } from 'react';
import data from '../../data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';
import Logo from '../../Assets/logo.png';



export const Categories = () => {
    return (
        <div>
            <div className={styles.Header}>
                <Image className={styles.Image}
                    src={Logo}
                    width="60px"
                    height="60px"
                />
                Servicios
            </div>
            <div className={styles.container}>
                {data.map((item) => (
                    <div className={styles.Card} key={item.id}>

                        <Image className={styles.categoriesImg}
                            src={item.file}
                            width="400"
                            height="250"
                            alt="Categorias"
                        />
                        <div className={styles.CardText}>
                            <Link href={item.route}>
                                <a className={styles.CardText}>{item.title}</a>
                            </Link>
                        </div>
                    </div>

                ))
                }
            </div >
        </div>

    )
}
export default Categories