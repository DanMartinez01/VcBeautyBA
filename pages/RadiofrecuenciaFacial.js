import React, { Component } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/5.jpg';

export const RadiofrecuenciaFacial = () => {
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <h4 className={styles.categoriesTitle}>Asesorías</h4>
            </div>
            <div className={styles.container} >
                <Image className={styles.treatmentImg}
                    src={imgLimpieza}
                    width="1800px"
                    height="2400px"
                />
                <div className={styles.treatmentText}>
                    <p>
                        <h1 className={styles.title}>Radiofrecuencia facial</h1>

                        Es un tratamiento indoloro y no invasivo –ya que no requiere inyecciones– que trabaja nuestra piel desde dentro hacia fuera aumentando la temperatura de los tejidos. Gracias a esto y el calor que reciben os fibroblastos, la radiofrecuencia aumenta la producción de colágeno, estimula la circulación, moviliza y disuelve la grasa y facilita el drenaje linfático.<br />
                        Consiste en la aplicación de ondas electromagnéticas de alta frecuencia sobre el rostro para tratar las diferentes capas de nuestra piel. Así, estas ondas o radiaciones electromagnéticas –que oscilan simultáneamente en los campos eléctrico y magnético– penetran en las capas más profundas de la dermis para actuar sobre ellas.<br />
                        <b>Beneficios:</b> <br />
                        La radiofrecuencia facial consigue estimular la producción de colágeno, por lo que nuestra piel se vuelve más flexible y resistente. Esto, al mismo tiempo, permite prevenir los efectos del paso del tiempo, retrasando la aparición de las arrugas y disminuyendo la apariencia de las líneas de expresión, estimula la circulación en los niveles más profundos, por lo que después del tratamiento podrás comprobar que tu piel se ve más joven, sana y luminosa.<br />
                        Después del tratamiento de radiofrecuencia facial se puede apreciar que la apariencia general de la piel ha mejorado. Esto se debe a la vasodilatación, la vascularización, y la mejora de metabolismo celular, así como a la mejor oxigenación de las células. Al ser un tratamiento diseñado para mejorarla apariencia de la piel, la radiofrecuencia es una técnica muy útil para reducir las cicatrices del acné, los eccemas, la piel rosácea, la cuperosis o la hiperpigmentación.<br /> <br />
                        <b>Duración:</b> 40 minutos.

                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Pedir turno</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default RadiofrecuenciaFacial