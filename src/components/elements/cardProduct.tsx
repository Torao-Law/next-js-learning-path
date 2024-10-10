import React from 'react'
import styles from "./element.module.scss"

type CardProductProps = {
  image?: string,
  title?: string,
  category?: string,
  price?: number
}

const CardProduct = ({ image, title, category, price }: CardProductProps) : React.JSX.Element => {
  return (
    <div className={styles.cardProduct}>
      <div className={styles.cardProduct__imageWrapper}>
        <img src={image} alt="img-product" />
      </div>

      <div className={styles.cardProduct__contentWrapper}>
        <h3 className={styles.cardProduct__contentTitle}>{title}</h3>
        <p className={styles.cardProduct__contentCategory}>{category}</p>
        <p className={styles.cardProduct__contentPrice}>{price}</p>
      </div>
    </div>
  )
}

export default CardProduct