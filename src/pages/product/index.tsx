import React from 'react'
import { apiConfig } from '@/libs/axios/config'
import ProductView from '@/views/product/product'
import useSWR from 'swr'
import { fetcher } from '@/libs/swr/fetcher'

const Product = () : React.JSX.Element => {
  const { data: product, error: errProduct, isLoading: loadProduct } = useSWR('/api/product', fetcher)

  return (
    <>
      <ProductView data={loadProduct ? [] : product}/>
    </>
  )
}

export default Product