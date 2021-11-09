import data from '../../data.json';
import Image from 'next/image';
import styles from './Categories.module.css';

export const Categories = () => {
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <div className={styles.Card}>
                    {/* <a className={styles.CardText}> {item.title}</a>, */}
                    <Image
                        src={item.file}
                        width="600px"
                        height="400px"
                    />
                </div>

            ))}
        </div>

    )
}
export default Categories