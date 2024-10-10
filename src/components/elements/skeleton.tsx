import React from 'react'
import styles from "./element.module.scss"

const Skelton = () : React.JSX.Element => {
  return (
    <div className={styles.skeltonProduct}>
      <div className={styles.skeltonProduct__image} />
      <div className={styles.skeltonProduct__title} />
      <div className={styles.skeltonProduct__subTitle} />
      <div className={styles.skeltonProduct__subTitle} />      
    </div>
  )
}

export default Skelton