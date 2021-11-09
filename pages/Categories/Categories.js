import data from '../../data.json';
import Image from 'next/image';

export const Categories = () => {
    return (
        <div>
            {data.map((item) => (   // note the removed {}

                <a>{item.title}</a>,

                <Image
                    src={item.file}
                    width="300px"
                    height="200px"
                />

            ))}
        </div>

    )
}
export default Categories