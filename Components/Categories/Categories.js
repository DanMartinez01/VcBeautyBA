import React, { Component } from 'react';
import data from '../../data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';
import Logo from '../../Assets/logo.png';



export const Categories = () => {
    return (
        <div>
            <div className={styles.container}>
                {/* {data.map((item) => (
                    <div className={styles.Card} key={item.id}>
                        <Image className={styles.categoriesImg}
                            width="400px"
                            height="250px"
                            src={item.file}
                            alt="Categorias"
                        />
                        <hr />
                        <div className={styles.CardText}>
                            <Link href={item.route}>
                                <a className={styles.CardText}>{item.title}</a>
                            </Link>
                        </div>
                    </div>

                ))
                } */}
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Asesorias</p>
                    <hr className={styles.divider} />
                    <p className={styles.CardText}>Resalta tu belleza sin perder naturalidad.<br />
                        Brindamos tratamientos personalizados.</p>
                </div>
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Asesorias</p>
                    <hr className={styles.divider} />
                    <p className={styles.CardText}>Resalta tu belleza sin perder naturalidad.<br />
                        Brindamos tratamientos personalizados.</p>
                </div>
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Asesorias</p>
                    <hr className={styles.divider} />
                    <p className={styles.CardText}>Resalta tu belleza sin perder naturalidad.<br />
                        Brindamos tratamientos personalizados.</p>
                </div>
                <div className={styles.Card}>
                    <p className={styles.cardTitle}>Asesorias</p>
                    <hr className={styles.divider} />
                    <p className={styles.CardText}>Resalta tu belleza sin perder naturalidad.<br />
                        Brindamos tratamientos personalizados.</p>
                </div>

            </div >
        </div>

    )
}
export default Categories