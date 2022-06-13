import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/FacialTreatment.png';

export const Peelings = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>/Peeling</h4>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1900px"
                        height="1900px"
                    />
                </div>
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Peeling Químico</h1>
                        El peeling químico es un tratamiento estético de renovación cutanea en donde aplicamos sobre la capa cornea diferentes sustancias químicas para conseguir una exfoliación profunda y caída de las capas superficiales de la piel. Se utiliza para tratar lesiones como las cicatrices o lesiones derivadas del acné, y signos del envejecimiento como todo tipo de manchas (melasmas, léntigos solares, queratosis, etc.), arrugas y pérdida de luminosidad. <br />
                        En gabinete solemos utilizarlos para eliminar las arrugas, líneas de expresión,  cicatrices,  poros dilatados y las manchas, a la vez que estimulamos mediante otros activos la producción de colágeno o elastina de la piel, favoreciendo una mejora en la textura de la piel y aumentando, además, su luminosidad.<br />
                        La aplicación es sencilla y segura, el tratamiento es simple y no requiere de muchos cuidados posteriores. Luego de generar una preparación previa de la piel, aplicamos sustancias o activos químicos, normalmente ácidos,  que estimularán la renovación celular logrando una mejora bastante notoria.  Es normal tener una sensación de picor o quemazón durante el tratamiento que luego de transcurrido el tiempo necesario, se neutraliza y desaparece. <br />
                        Tras realizar tratamientos de peeling, la piel presentará tirantez, enrojecimiento, e incluso una leve inflamación y según la profundidad del peeling, puede o no producirse una descamación en la capa mas superficial de la piel.<br />
                        Lo normal es que estos síntomas desaparezcan trascurridas unas horas. Una vez finalizado, debemos aplicar protector solar, continuado por un refuerzo en domicilio que lo indica el profesional y es sumamente importante no exponerse al sol directamente mientras realizamos estos tratamientos, ya que no queremos generar ningún tipo de mancha o complicación. Es un método totalmente seguro y los casos los evaluamos en profundidad antes de realizarlos.<br />
                        <b>Duración:</b> el tratamiento dura aproximadamente 1 hora, 1 hora y media dependiendo el caso.<br /><br />
                        <h1 className={styles.title}>Peeling de verano</h1>
                        Es un método de renovación cutánea  ligero y produce una descamación casi imperceptible en la capa cornea. La técnica consiste en la eliminación de la capa superficial de la piel lo que permite que se regenere completamente logrando un acabado mas fino y perfecto. <br />
                        Lo que buscamos a través de este tratamiento es devolver la luminosidad eliminando las células muertas y contaminación acumulada en las capas mas extremas de la piel consiguiendo una textura suave y aportando la hidratación necesaria de las capas internas de nuestra piel.  La diferencia principal que tiene con un peeling tradicional es la forma de eliminación de las capas de la piel, en este ultimo la eliminación es mas profunda y la descamación es notoria, en cambio en el peeling de verano todas estas  cuestiones se trabajan de manera casi imperceptibles.<br />
                        Lo utilizamos principalmente para lograr reparar, nutrir, regenerar y generar tensión en la piel, asi como además la preparla para el bronceado, siempre y cuando sea seguro y con mucha pantalla solar. No produce manchas ya que los activos que se utilizan no tienen la misma finalidad que los activos que se colocan en peelings tradicionales. <br />La intención de estos tratamientos es reforzar la exfoliación, renovación y preparación de la piel.<br />
                        No requiere de cuidados especiales ni posteriores. Se realiza en gabinete y luego de la aplicación se le indica al paciente que se coloque pantalla solar y rutinas que complementen dicho tratamiento.<br />
                        <b>Duracion:</b>  el tratamiento dura aproximadamente 1 hora, 1 hora y media dependiendo el caso.

                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Peelings