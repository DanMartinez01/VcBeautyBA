import React, { Component, useState } from 'react';
import styles from './Treatments.module.css';
import Image from 'next/dist/client/image';
import imgLimpieza from '../Assets/radiofrec.jpeg';

export const RadiofrecuenciaFacial = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <div className={styles.categoriesStripe}>
                <p className={styles.categoriesTitle}>/Radiofrecuencia</p>
            </div>
            <div className={styles.container} >
                <div className={styles.imgWrapper}>
                    <Image className={styles.treatmentImg}
                        src={imgLimpieza}
                        width="1700px"
                        height="1600px"
                    />
                </div>
                <div>
                    <div className={styles.treatmentText} style={showMore ? { height: "100%" } : { height: "300px", overflowY: "hidden" }}>
                        <p>
                            <h1 className={styles.title}>Radiofrecuencia facial</h1>
                            Es un tratamiento indoloro y no invasivo,ya que no requiere inyecciones,que trabaja nuestra piel desde dentro hacia fuera aumentando la temperatura de los tejidos. Gracias a esto y el calor que reciben os fibroblastos, la radiofrecuencia aumenta la producción de colágeno, estimula la circulación, moviliza y disuelve la grasa y facilita el drenaje linfático.<br />
                            Consiste en la aplicación de ondas electromagnéticas de alta frecuencia sobre el rostro para tratar las diferentes capas de nuestra piel. Así, estas ondas o radiaciones electromagnéticas –que oscilan simultáneamente en los campos eléctrico y magnético– penetran en las capas más profundas de la dermis para actuar sobre ellas.<br />
                            <b>Beneficios:</b> <br />
                            La radiofrecuencia facial consigue estimular la producción de colágeno, por lo que nuestra piel se vuelve más flexible y resistente. Esto, al mismo tiempo, permite prevenir los efectos del paso del tiempo, retrasando la aparición de las arrugas y disminuyendo la apariencia de las líneas de expresión, estimula la circulación en los niveles más profundos, por lo que después del tratamiento podrás comprobar que tu piel se ve más joven, sana y luminosa.<br />
                            Después del tratamiento de radiofrecuencia facial se puede apreciar que la apariencia general de la piel ha mejorado. Esto se debe a la vasodilatación, la vascularización, y la mejora de metabolismo celular, así como a la mejor oxigenación de las células. Al ser un tratamiento diseñado para mejorarla apariencia de la piel, la radiofrecuencia es una técnica muy útil para reducir las cicatrices del acné, los eccemas, la piel rosácea, la cuperosis o la hiperpigmentación.<br /> <br />
                            <b>Duración:</b> 40 minutos.

                        </p>
                        {/* <div className={styles.buttonContainer}>
                        <button className={styles.button}>
                            <span className={styles.gradient}>
                                <a href="https://wa.me/+5491123428263" className={styles.button}>Pedir turno</a></span>
                        </button>
                    </div> */}
                    </div>
                    <button className={styles.seeMore} onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Ocultar" : "Seguir leyendo"}
                    </button>
                </div>
            </div>

        </div>
    )
}
export default RadiofrecuenciaFacial