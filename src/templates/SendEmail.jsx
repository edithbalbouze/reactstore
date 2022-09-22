import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
    return (
        <div className={styles.SendEmail}>
            <div className={styles['SendEmail-container']}>
                <Image src={logo} alt="logo" className={styles.logo}/>

                <h1 className={styles.title}>Email has been sent!</h1>
                <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
                <div className={styles['email-image']}>
                    <Image src={email} alt="email"/>
                </div>
                <button className={`${styles['primary-button']} ${styles['login-button']}`}>login</button>
                <p className={styles.resend}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span>Didn't receive the email?</span>
                    <Link href="/">Resend</Link>
                </p>
            </div>
        </div>
    );
};

export default SendEmail;