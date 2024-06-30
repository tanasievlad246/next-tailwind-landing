import ServiceCard from '@/components/ServiceCard'
import { services } from '@/constants'
import React from 'react'

const Services = () => {
  return (
    <section className='max-container flex flex-wrap justify-center gap-9'>
      {services.map((service, index) => (
        <ServiceCard key={service.label} imageUrl={service.imgURL} label={service.label} subtext={service.subtext} />
      ))}
    </section>
  )
}

export default Services