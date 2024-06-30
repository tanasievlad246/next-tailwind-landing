import { star } from '@/assets/icons';
import Image from 'next/image';
import React from 'react'

interface PopularProductsCardProps {
    imageUrl: string;
    name: string;
    price: string;
}

const PopularProductsCard: React.FC<PopularProductsCardProps> = ({
    imageUrl,
    name,
    price
}) => {
    return (
        <div className="flex flex-1 flex-col w-full sm:w-full">
            <Image src={imageUrl} alt="shoe image" className='w-[280px] h-[280px]' />
            <div className='mt-8 flex justify-start gap-2.5'>
                <Image src={star} alt="rating" width={24} height={24} />
                <p className='font-montserrat leading-normal text-slate-gray text-xl'>4.5</p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <p className='mt-2 text-2xl leading-normal font-semibold font-montserrat text-coral-red'>{price}</p>
        </div>
    )
}

export default PopularProductsCard