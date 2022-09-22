import React, {useRef} from 'react';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/Login.module.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password'),
        };
        console.log(data);
    };

    return (
        <div className={styles.login}>
            <div className={styles['form-container']}>
                <Image src={logo} alt="logo" className={styles.logo}/>

                <form action="/" className={styles.form} ref={form}>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className={styles.label}>Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.com"
                           className={`${styles.input} ${styles['input-email']}`}/>

                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className={styles.label}>Password</label>
                    <input type="password" name="password" placeholder="*********"
                           className={`${styles.input} ${styles['input-password']}`}/>

                    <button
                        onClick={handleSubmit}
                        className={`${styles['primary-button']} ${styles['login-button']}`}>
                        Log in
                    </button>

                    <link href="/">Forgot my password</link>
                </form>
                <button
                    className={`${styles['secondary-button']} ${styles['signup-button']}`}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Login;