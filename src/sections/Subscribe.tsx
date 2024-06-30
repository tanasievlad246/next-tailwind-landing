import Button from '@/components/Button'
import React from 'react'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col max-10'>
      <h3 className='text-4xl leading-[68px] font-palanquin font-bold'>Sign up for <span className='text-coral-red'>updates</span> & newsletter</h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col flex-row p-2.5 gap-5 sm:border sm:border-slate-gray rounded-full'>
        <input type="email" placeholder='Subscribe @nike.com' className='input' />
        <div className='flex max-sm:justify-end items-enter max-sm:w-full'>
          <Button label='Sign Up' fullWidth={true} />
        </div>
      </div>
    </section>
  )
}

export default Subscribe