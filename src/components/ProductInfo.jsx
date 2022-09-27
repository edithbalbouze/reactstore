import React from 'react';
import Image from 'next/image';
import addToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <>
      <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="dress red wine" />
      <div className={styles.ProductInfo}>
        <p>$12.22</p>
        <p>Short dress (Red wine)</p>
        <p>Beautiful short red wine-colored dress that highlights your figure, you can use it in any occasion combining it with different clothes.</p>
        <button className={`${styles['primary-button']} ${styles['add-to-cart-button']}`}>
          <Image src={addToCart} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
