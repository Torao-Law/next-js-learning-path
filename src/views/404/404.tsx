import React from 'react'
import styles from "./404.module.scss"

const Custom404 = () : React.JSX.Element => {
  return (
    <div className={styles.error}>
      <img src="/404.png" alt="img404" className={styles.error__image} />
      <p className={styles.error__title}>Halaman Tidak Ditemukan</p>
    </div>
  )
}

export default Custom404