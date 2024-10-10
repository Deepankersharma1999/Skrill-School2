"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/public/navlogo.svg'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import { Icons } from './icons'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className='bg-white fixed top-0 w-full z-50  py-8'>
            <nav className='flex justify-between items-center px-5 md:px-20 '>
                <div className="flex md:justify-start w-full md:w-auto">
                    <Image src={Logo} className='w-28' width={64} height={64} alt='Logo' />
                </div>

                <Button
                    className="block md:hidden text-3xl bg-white"
                    onClick={toggleMobileMenu}
                >
                    <Icons.Menu className='text-black' />
                </Button>

                <div className="hidden md:flex items-center gap-10 text-black lg:text-xl">
                    <Select>
                        <SelectTrigger className="flex gap-0 lg:text-xl">
                            <SelectValue placeholder="Programs" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="fullStack">FullStack</SelectItem>
                                <SelectItem value="frontEnd">Front-End</SelectItem>
                                <SelectItem value="backEnd">Back-End</SelectItem>
                                <SelectItem value="uiUxDesign">UI/UX Design</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <a href='#' className='text-black'>About</a>
                    <a href='#' className='text-black'>Services</a>
                    <a href='#' className='text-black'>FAQs</a>
                </div>

                <div className="hidden md:block">
                    <Button className='bg-white text-b font-semibold px-6 xl:py-6 lg:py-5 rounded-full border-[#789] border-[2px] shadow-none lg:text-xl'>
                        Register
                    </Button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-8">
                        <a href='#' className='text-white text-xl' onClick={closeMobileMenu}>Program</a>
                        <a href='#' className='text-white text-xl' onClick={closeMobileMenu}>About</a>
                        <a href='#' className='text-white text-xl' onClick={closeMobileMenu}>Services</a>
                        <a href='#' className='text-white text-xl' onClick={closeMobileMenu}>FAQ</a>
                        <Button className='bg-white text-black font-normal px-8 py-2 rounded-full' onClick={closeMobileMenu}>
                            Register
                        </Button>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar;
