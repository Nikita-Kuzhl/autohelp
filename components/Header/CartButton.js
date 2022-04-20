import React from 'react'
import {ShoppingCartIcon}  from '@heroicons/react/outline'
import styles from "../../styles/Header.module.scss"

const Cart = () => {
  return (
    // <div className={styles.cart}>
    <div className="flex md:cursor-pointer hover:scale-105 hover:-translate-y-1 duration-300 md:pt-2 md:ml-5 hover:opacity-75  md:gap-0 px-24 md:px-0 pt-4 p-1">
      {/* <ShoppingCartIcon className={styles.cart_icon}/> */}
      <ShoppingCartIcon className="h-7 w-7"/>
      {/* <span className={styles.cart_span}>1</span> */}
      <span className="bg-red-200 rounded-full text-center -mt-3 -ml-3 font-[EBGaramond] h-6 w-6 text-base">1</span>
      <a className='md:hidden text-xl'>Корзина</a>
    </div>
  )
}

export default Cart