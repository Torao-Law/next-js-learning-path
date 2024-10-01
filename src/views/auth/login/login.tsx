import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./login.module.css"

const LoginView = () => {
  const router = useRouter()

  const handleLogin = () : void => {
    router.push('/product')
  }

  return (
    <div>
      <h1 className={styles.title}>Login</h1>

      <button onClick={handleLogin}>Masuk</button>
      <p>Belum punya account ? <Link href="/auth/register">Register</Link></p>
    </div>
  )
}

export default LoginView