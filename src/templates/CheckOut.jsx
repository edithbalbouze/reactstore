import React from 'react';
import OrderItem from '@components/OrderItem';
import styles from '@styles/CheckOut.module.scss';


const CheckOut = () => {
    return (
        <div className={styles.Checkout}>
            <div className={styles['Checkout-container']}>
                <h1 className={styles.title}>My order</h1>
                <div className={styles['Checkout-content']}>
                    <div className={styles.order}>
                        <p>
                            <span>04.25.2021</span>
                            <span>6 articles</span>
                        </p>
                        <p>$82,81</p>
                    </div>
                </div>
                <OrderItem/>
            </div>
        </div>
    );
};

export default CheckOut;