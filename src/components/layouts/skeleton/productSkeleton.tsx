import React from 'react'
import Skelton from '@/components/elements/skeleton'
import styles from "./skeleton.module.scss"

type ProductSkeltonProps = {
  displayLenght: number
}

const ProductSkeleton = (props: ProductSkeltonProps) => {
  return (
    <div className={styles.skeletonLayout}>
      {Array.from({ length: props.displayLenght }, (_, index) => (
        <Skelton key={index} />
      ))}
    </div>
  )
}

export default ProductSkeleton