import React from 'react';
import Image from 'next/image';
import notFoundPage from '@logos/undraw.svg';
import styles from '@styles/NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles['not-found-container']}>
            <div className={styles['not-found-info']}>
                <Image src={notFoundPage} alt="" className={styles['not-found']}/>
                <h1 className={styles['not-found-title']}>404 Not Found</h1>
                <h2 className={styles.message}>It seems like we could not find the page you were looking for.</h2>
                <button className={styles['primary-button']}>Go back</button>
            </div>
        </div>
    );
};

export default NotFound;