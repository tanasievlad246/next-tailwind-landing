import { arrowRight } from '@/assets/icons'
import { offer } from '@/assets/images'
import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <Image src={offer} alt="shoes offer" className='object-contain w-full' width={773} height={687}/>
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          Special <span className='text-coral-red inline-block mt-3'>Offer</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our attention to details ensures your satisfaction</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label="Shop now" iconURL={arrowRight}></Button>
          <Button label="Learn More" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'></Button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer