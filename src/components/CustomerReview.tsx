import React from 'react'
import Image from 'next/image';
import { star } from '@/assets/icons';

interface CustomerReviewProps {
    imageUrl: string;
    customerName: string;
    rating: number;
    feedback: string;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({
    imageUrl,
    customerName,
    rating,
    feedback
}) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Image src={imageUrl} className='rounded-full object-cover w-[120px] h-[120px]' alt="customer feedback" />
            <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
                <Image src={star} alt='customer rating' className='object-contain m-0' height={24} width={24} />
                <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    )
}

export default CustomerReview