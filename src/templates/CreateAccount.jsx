import React from 'react';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
    return (
        <div className={styles.CreateAccount}>
            <div className={styles['CreateAccount-container']}>
                <h1 className={styles.title}>My account</h1>

                <form action="/" className={styles.form}>
                    <div>
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label for="name" className={styles.label}>Name</label>
                        <input type="text" id="name" placeholder="Edith"
                               className={`${styles.input} ${styles['input-name']}`}/>

                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label for="email" className={styles.label}>Email address</label>
                        <input type="text" id="email" placeholder="platzi@example.com"
                               className={`${styles.input} ${styles['input-email']}`}/>

                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label for="password" className={styles.label}>Password</label>
                        <input type="password" id="password" placeholder="*********"
                               className={`${styles.input} ${styles['input-password']}`}/>
                    </div>

                    <input type="submit" value="Create" className={`${styles['primary-button']} ${styles['login-button']}`}/>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;