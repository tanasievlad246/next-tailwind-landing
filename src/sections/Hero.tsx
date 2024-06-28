import React from 'react'
import Button from '@/components/Button'
import { arrowRight } from '@/assets/icons'
import { statistics } from '@/constants'
import Image from 'next/image'
import { bigShoe1 } from '@/assets/images'

const Hero = () => {
  return (
    <section
      id="home"
      className="
       w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container
      "
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((el, index) => (
            <div
              key={index}
            >
              <p className='max-sm:text-2xl text-4xl font-palanquin font-bold text-coral-red'>{el.value}</p>
              <p className='text-lg font-montserrat text-slate-gray'>{el.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
        <Image src={bigShoe1} alt="shoe collection" width={610} height={500} className="object-contain z-10 relative"/>
      </div>
    </section>
  )
}

export default Hero