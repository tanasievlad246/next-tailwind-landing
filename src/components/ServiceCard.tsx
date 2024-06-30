import React from 'react'

import Image from 'next/image';

interface ServiceCardProps {
    imageUrl: string;
    label: string;
    subtext:  string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    imageUrl,
    label,
    subtext
}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:mmin-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className='flex w-11 h-11 justify-center items-center bg-coral-red rounded-full'>
            <Image src={imageUrl} alt="icon" width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard