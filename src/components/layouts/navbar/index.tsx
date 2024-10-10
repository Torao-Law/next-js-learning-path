import React from 'react'
import styles from './navbar.module.scss'

const Navbar = () : React.JSX.Element => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.navbar__content}>Navbar</h2>
    </div>
  )
}

export default Navbar