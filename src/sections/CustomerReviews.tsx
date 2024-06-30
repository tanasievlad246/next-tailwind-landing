import CustomerReview from '@/components/CustomerReview'
import { reviews } from '@/constants'
import React from 'react'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl font-palanquin text-center font-bold'>
        What our
        <span className='text-coral-red'> Customers </span>
        say!
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our customers</p>

      <div className='mt-24 flex flex-1 justify-between items-center max-lg:flex-col gap-14'>
        {reviews.map((review) =>
          <CustomerReview key={review.customerName} customerName={review.customerName} imageUrl={review.imgURL} feedback={review.feedback} rating={review.rating} />
        )}
      </div>
    </section>
  )
}

export default CustomerReviews