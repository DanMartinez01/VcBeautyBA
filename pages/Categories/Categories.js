import data from '../../data.json';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Categories.module.css';

export const Categories = () => {
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <div className={styles.Card} key={item.id}>
                    <div className={styles.CardText}>
                        <Link href="/:Treatment">
                            <a>{item.title}</a>
                        </Link>
                    </div>
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