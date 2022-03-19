import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import peeling from '../Assets/peeling.jpg';

export const Peelings = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>Asesorías</h4>
            </div>
            <div className={styles.container} >
                <Image className={styles.treatmentImg}
                    src={peeling}
                    width="1800px"
                    height="2400px"
                />
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Peeling Quimico</h1>
                        El peeling químico es un tratamiento estético de renovación cutanea en donde aplicamos sobre la capa cornea diferentes sustancias químicas para conseguir una exfoliación profunda y caída de las capas superficiales de la piel. Se utiliza para tratar lesiones como las cicatrices o lesiones derivadas del acné, y signos del envejecimiento como todo tipo de manchas (melasmas, léntigos solares, queratosis, etc.), arrugas y pérdida de luminosidad. <br />
                        En gabinete solemos utilizarlos para eliminar las arrugas, líneas de expresión,  cicatrices,  poros dilatados y las manchas, a la vez que estimulamos mediante otros activos la producción de colágeno o elastina de la piel, favoreciendo una mejora en la textura de la piel y aumentando, además, su luminosidad.<br />
                        La aplicación es sencilla y segura, el tratamiento es simple y no requiere de muchos cuidados posteriores. Luego de generar una preparación previa de la piel, aplicamos sustancias o activos químicos, normalmente ácidos,  que estimularán la renovación celular logrando una mejora bastante notoria.  Es normal tener una sensación de picor o quemazón durante el tratamiento que luego de transcurrido el tiempo necesario, se neutraliza y desaparece. <br />
                        Tras realizar tratamientos de peeling, la piel presentará tirantez, enrojecimiento, e incluso una leve inflamación y según la profundidad del peeling, puede o no producirse una descamación en la capa mas superficial de la piel.<br />
                        Lo normal es que estos síntomas desaparezcan trascurridas unas horas. Una vez finalizado, debemos aplicar protector solar, continuado por un refuerzo en domicilio que lo indica el profesional y es sumamente importante no exponerse al sol directamente mientras realizamos estos tratamientos, ya que no queremos generar ningún tipo de mancha o complicación. Es un método totalmente seguro y los casos los evaluamos en profundidad antes de realizarlos.<br /><br />
                        <b>Duración:</b> el tratamiento dura aproximadamente 1 hora, 1 hora y media dependiendo el caso.
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Pedir turno</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Peelings