import Image from 'next/image'
import React from 'react'

interface CareersIndustryInsightsProps {
    dataSet: {
        title: string
        content: string
        images: {
            src: string
            alt: string
        }[]
    }
}

const CareersIndustryInsights = ({ dataSet }: CareersIndustryInsightsProps) => {
    return (
        <div className=' my-container flex flex-col gap-5 items-center mb-24'>
            <h3 className="text-3xl font-bold text-my-blue text-center lg:text-start">{dataSet?.title}</h3>
            <p className=" text-my-gray2 text-sm md:text-base w-full max-w-3xl text-center">{dataSet?.content}</p>

            <div className=" flex lg:hidden gap-6 items-center justify-between">
                {dataSet?.images.slice(0, 1).map((item, index) => (
                    <Image key={index} src={item.src} alt={item.alt} width={300} height={300} className=" w-full h-auto object-cover object-center" />
                ))}
            </div>

            <div className="hidden lg:flex gap-6 items-center justify-between">
                {dataSet?.images.slice(0, 2).map((item, index) => (
                    <Image key={index} src={item.src} alt={item.alt} width={300} height={300} className=" w-full h-auto object-cover object-center" />
                ))}
            </div>
        </div>
    )
}

export default CareersIndustryInsights