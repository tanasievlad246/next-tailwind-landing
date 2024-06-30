import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface ShoeCardProps {
    imageUrl: StaticImageData
    changeBigShoeImage: (imageUrl: StaticImageData) => void
    bigShoeImage: StaticImageData
}

const ShoeCard: React.FC<ShoeCardProps> = ({
    imageUrl,
    changeBigShoeImage,
    bigShoeImage
}) => {
    const handleClick = () => {
        if (bigShoeImage !== imageUrl) {
            changeBigShoeImage(imageUrl)
        }
    }

    return (
        <div
            className={`
                border-2 rounded-xl cursor-pointer max-sm:flex-1
                ${bigShoeImage === imageUrl ? 'border-coral-red' : 'border-white-400'}
            `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-center bg-primary bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <Image src={imageUrl} alt="shoe" width={127} height={103} />
            </div>
        </div>
    )
}

export default ShoeCard