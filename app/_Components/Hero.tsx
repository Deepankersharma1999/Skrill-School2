import Image from 'next/image';
import React from 'react';
import Heroimg from '@/public/Hero.svg';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

const Hero = () => {
    return (
        <div className="relative w-full h-auto mt-40 lg:mt-0">
            <div className="flex justify-center items-center mx-auto max-w-5xl">
                <Image
                    src={Heroimg}
                    width={3}
                    height={3}
                    alt="Hero Image"
                    className="w-full h-auto object-contain"
                    layout="responsive"
                    priority
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 max-w-screen-sm ">
                    <p className='text-center text-l lg:text-5xl font-bold text-black'>  Learn Build<br />
                        Launch Your<br />
                        Career</p>
                    <p className='text-center text-sm font-thin text-[#563] mt-3'>At Skrill School, we’re dedicated to helping aspiring<br /> developers like you master the most in-demand<br /> programming skills and technologies. </p>

                    <Button className='lg:mt-5 mt-5 lg:text-lg  mx-auto flex justify-center bg-o rounded-full lg:py-6 lg:px-6 font-normal text-white text-xs'>Enroll Now <Icons.ChevronRight className='ms-2' size={17} /></Button>
                </div>

            </div>
        </div>
    );
};

export default Hero;
