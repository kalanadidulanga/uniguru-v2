import { Button } from '@/components/myComponents/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactHeroSection = () => {
    return (
        <div className=" bg-liter-orange relative h-auto radius-hero overflow-hidden">
            <div className="my-container flex flex-col lg:flex-row">
                <div className=" w-full lg:w-1/2 items-center pt-10 lg:pt-16 lg:pb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-my-blue lg:whitespace-nowrap">
                        Contact <span className="font-semibold text-my-orange">Uniguru</span>
                    </h2>

                    <p className=" text-sm md:text-base lg:text-lg mt-6 md:mt-10 text-my-gray">
                        Contact us through our office that is most convenient to you.
                    </p>

                    <Link href="/contact/#get-in-touch">
                        <Button className='mt-6 md:mt-10'>
                            Get in touch
                        </Button>
                    </Link>
                </div>
                <div className=" w-full lg:w-1/2 flex justify-center items-end pt-10">
                    <Image
                        src={"/images/contact-hero.png"}
                        alt="header-pic"
                        width={350}
                        height={300}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactHeroSection