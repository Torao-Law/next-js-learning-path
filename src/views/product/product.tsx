import React from 'react'
import styles from "./product.module.scss"
import ProductSkeleton from '@/components/layouts/skeleton/productSkeleton'
import CardProduct from '@/components/elements/cardProduct'

type ProductViewProps = {
  data: any
}

const ProductView = (props: ProductViewProps) : React.JSX.Element => {
  const { data } = props
  
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Product</h1>

      {data?.length > 0 ? (
        <div className={styles.product__contentWrapper}>
          {data?.map((item: any) => (
            <CardProduct key={item.id} category={item.category} image={item.image} price={item.price} title={item.name} />
          ))}
        </div>
      ) : <ProductSkeleton displayLenght={5} /> }
    </div>
  )
}

export default ProductView