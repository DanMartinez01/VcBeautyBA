import data from '../../data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';
import React, { Component } from 'react';


export const Categories = () => {
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <div className={styles.Card} key={item.id}>
                    <div className={styles.CardText}>
                        <Link href='/HigieneFacial/HigieneFacial'>
                            <a className={styles.CardText}>{item.title}</a>
                        </Link>
                    </div>
                    <Image
                        src={item.file}
                        width="650px"
                        height="450px"
                        alt="Categorias"
                    />
                </div>

            ))}
        </div>

    )
}
export default Categories