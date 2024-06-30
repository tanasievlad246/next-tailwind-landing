import { shoe8 } from '@/assets/images'
import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className="flex-1 flex flex-col">
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide you <span className='text-coral-red inline-block mt-3'>super quality</span> shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>Our attention to details ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label="View details"></Button>
        </div>
      </div>

      <div className='flex flex-1 flex-col'>
        <Image src={shoe8} alt="" height={522} width={570} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality