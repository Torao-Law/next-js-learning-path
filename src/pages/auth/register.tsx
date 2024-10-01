import React from 'react'
import Link from 'next/link'

const RegisterPage = () : React.JSX.Element => {
  return (
    <div>
      <h1>REGISTER</h1>

      <p>Sudah punya account ? <Link href="/auth/login">Masuk</Link></p>
    </div>
  )
}

export default RegisterPage