import React from 'react'
import { useRouter } from 'next/router'

const DetailProduct = () : React.JSX.Element => {
  const { query } = useRouter()

  return (
    <div>
      <h1>Detail Product :</h1>
      <p>Ini parameter yang  useRouter: {query.idProduct}</p>
    </div>
  )
}

export default DetailProduct