import Image from 'next/image'
import React from 'react'

interface ContactDetailsProps {
    name: string
    phone: string
    email: string
    address: string
    src: string
}

const Details = ({ item }: { item: ContactDetailsProps }) => {
    return (
        <div className=" flex flex-col w-full gap-5">
            <h5 className="text-3xl text-my-blue font-semibold">{item.name}</h5>
            <div className=" flex w-full items-center justify-between">
                <div className="w-1/2 flex gap-4">
                    <Image
                        src={"/icons/phone.svg"}
                        alt="phone"
                        width={24}
                        height={24}
                    />
                    <div className=" flex flex-col">
                        <p className=" font-semibold">Phone</p>
                        <p className=" text-xs md:text-sm text-my-orange">{item.phone}</p>
                    </div>
                </div>

                <div className="w-1/2 flex gap-4">
                    <Image
                        src={"/icons/email.svg"}
                        alt="phone"
                        width={24}
                        height={24}
                    />
                    <div className=" flex flex-col">
                        <p className=" font-semibold">EMAIL</p>
                        <p className=" text-xs md:text-sm text-my-orange">
                            {item.email}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-4">
                <Image
                    src={"/icons/location.svg"}
                    alt="phone"
                    width={24}
                    height={24}
                />
                <div className=" flex flex-col">
                    <p className=" font-semibold">LOCATION</p>
                    <p className="text-xs md:text-sm text-my-orange">
                        {item.address}
                    </p>
                </div>
            </div>
            {/* add google map iframe */}
            <iframe
                src={item.src}
                style={{ border: 0 }}
                loading="lazy"
                className=" w-full h-[400px] mt-3"
            ></iframe>
        </div>
    )
}

export default Details