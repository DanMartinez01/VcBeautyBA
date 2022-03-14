import React, { useState } from 'react';
import styles from './DropDown.module.css';
import Link from 'next/dist/client/link';

function DropDown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? styles.dropdownMenuClicked : styles.dropdownMenu}
            >
                <li>
                    <Link
                        className={styles.dropdownLink}
                        href="/GlowyLips"
                        onClick={() => setClick(false)}
                    >
                        title
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.dropdownLink}
                        href="/GlowyLips"
                        onClick={() => setClick(false)}
                    >
                        title
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.dropdownLink}
                        href="/GlowyLips"
                        onClick={() => setClick(false)}
                    >
                        title
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.dropdownLink}
                        href="/HigieneFacial"
                        onClick={() => setClick(false)}
                    >
                        title
                    </Link>
                </li>

            </ul>
        </>
    );
}

export default DropDown;