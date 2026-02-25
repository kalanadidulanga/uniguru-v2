"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { NAVBAR_DATA } from '@/constants/data';
import MobileMenu from './MobileMenu';
import NavButtons from './NavButtons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from "@/lib/utils"
import { ChevronsUpDown } from 'lucide-react';


const Header = () => {
    const pathname = usePathname();

    const active = "text-my-orange"

    return (
        <div className='bg-liter-orange'>
            <div className=' flex justify-between items-center my-container h-24 relative'>
                <Link href={"/"} className=''>
                    <Image src={"/logo-1.png"} alt="UNIGURU" width={150} height={100} />
                </Link>

                <div className=' hidden lg:flex text-sm xl:text-base lg:gap-5 items-center'>
                    {NAVBAR_DATA.map((item, index) => (
                        item.subOptions ? (
                            <DropdownMenu key={index}>
                                <DropdownMenuTrigger className=" flex items-center gap-1">{item.name} <ChevronsUpDown className="h-4 w-4" /></DropdownMenuTrigger>
                                <DropdownMenuContent className=' bg-white'>
                                    {item.subOptions.map((subItem, index) => (
                                        <Link key={index} href={subItem.link} >
                                            <DropdownMenuItem className={pathname === subItem.link ? active : ''}>
                                                {subItem.name}
                                            </DropdownMenuItem>
                                        </Link>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link key={index} href={item.link} className={` text-center ${pathname === item.link ? active : ''}`} >
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>

                <NavButtons className="hidden lg:flex" />

                <MobileMenu />
            </div >
        </div >
    )
}

export default Header