"use client";
import Image from 'next/image';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Logo from '@/public/navlogo.svg';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from './ui/button';
import { Icons } from './icons';
import SeminarSticky from './seminar-sticky';
import { ModalProvider } from '@/src/context/modal';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
            closeMobileMenu();
        }
    }, []);
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen, handleClickOutside]);

    return (
        <div className='bg-white fixed top-0 w-full z-50 py-5'>
            <nav ref={mobileMenuRef} className='flex justify-between items-center px-5 md:px-20 '>
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
                        <SelectTrigger className="flex gap-0 xl:text-xl lg:text-md text-sm">
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
                    {/* <Button className='bg-white hover:bg-white text-[#311100] font-semibold px-6 xl:py-6 lg:py-5 rounded-full border-[#789] border-[2px] shadow-none lg:text-xl'>
                        Register
                    </Button> */}
                    <ModalProvider>
                        <SeminarSticky />
                    </ModalProvider>
                </div>

                {isMobileMenuOpen && (
                    <div
                        ref={mobileMenuRef}
                        className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 grid grid-cols-2 items-center justify-items-center gap-8 h-64 py-10"
                    >
                        <a href='#' className='text-white lg:text-xl' onClick={closeMobileMenu}>Program</a>
                        <a href='#' className='text-white lg:text-xl' onClick={closeMobileMenu}>About</a>
                        <a href='#' className='text-white lg:text-xl' onClick={closeMobileMenu}>Services</a>
                        <a href='#' className='text-white lg:text-xl' onClick={closeMobileMenu}>FAQ</a>
                        <Button className='bg-white text-[#311100] font-normal px-8 py-2 rounded-full' onClick={closeMobileMenu}>
                            Register
                        </Button>
                    </div>

                )}
            </nav>
        </div>
    );
};

export default Navbar;
