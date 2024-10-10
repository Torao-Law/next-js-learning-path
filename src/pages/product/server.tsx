import ProductView from '@/views/product/product'
import React from 'react'

type ServerProductProps = {
  products: any
}

const ServerProduct = ({ products }: ServerProductProps) : React.JSX.Element => {
  return (
    <>
      <ProductView data={products}/>
    </>
  )
}

export default ServerProduct

export const getServerSideProps = async () : Promise<any> => {
  try {
    const response = await fetch("http://localhost:3000/api/product")
    const obj = await response.json()

    return {
      props: {
        products: obj.data
      }
    }
  } catch (error) {
    throw error
  }
}