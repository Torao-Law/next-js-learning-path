import { useRouter } from 'next/router'
import React from 'react'

const CategoryPage = () => {
  const router = useRouter()

  console.log(router)

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage