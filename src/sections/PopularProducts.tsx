import React from 'react'

import { products } from '@/constants'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Popular Products</h2>
        <p>Experience to notch quality and style with our saught after collections!</p>
      </div>
    </section>
  )
}

export default PopularProducts