import React from 'react';
import Image from 'next/image';
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = () => {
    return (
        <div className={styles.ShoppingCartItem}>
            <figure>
                <Image
                    src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2020/12/21/goods-first-img/1623611128449531698.jpg"
                    alt="Short dress (Red wine)"/>
            </figure>
            <p>Short dress (Red wine)</p>
            <p>$12.22</p>
        </div>
    );
};

export default ShoppingCartItem;