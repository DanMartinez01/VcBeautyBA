import data from '../../data.json';
import Image from 'next/image';
import styles from './Categories.module.css';

export const Categories = () => {
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <div className={styles.Card} key={item.id}>
                    {/* <a className={styles.CardText}> {item.title}</a>, */}
                    <Image
                        src={item.file}
                        width="600px"
                        height="400px"
                        alt="VcBeauty Categorias"
                    />
                </div>

            ))}
        </div>

    )
}
export default Categories