import React from 'react';
import Image from 'next/image';
import arrow from '@icons/flechita.svg';
import styles from '@styles/Order.module.scss';

const Order = () => {
    return (
        <div className={styles.Order}>
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <p>$82,00</p>
            <Image src={arrow} alt="arrow"/>
        </div>
    );
};
export default Order;