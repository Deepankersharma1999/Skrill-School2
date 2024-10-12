import Image from 'next/image';
import React from 'react';
import Heroimg from '@/public/Hero.svg';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

const Hero = () => {
    return (
        <div className="relative h-auto xl:mt-[-50px] mt-10  lg:mb-[-50px] z-10  lg:max-w-[1920px] mx-auto">
            <div className="flex justify-center items-center mx-auto">
                <div className="w-full lg:w-[80%]"> {/* Adjusted image container width */}
                    <Image
                        src={Heroimg}
                        alt="Hero Image"
                        layout="responsive"
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Text and button section */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center">
                    <p className="text-xs xl:text-7xl md:text-xl lg:text-2xl  font-bold text-black font-bricolage">
                        Learn Build<br />
                        Launch Your<br />
                        Career
                    </p>
                    <p className="lg:text-lg text-[8px] font-thin text-[#a3a3a3] lg:mt-3 lg:p-0 ">
                        At Skrill School, we’re dedicated to helping aspiring<br />
                        developers like you master the most in-demand<br />
                        programming skills and technologies.
                    </p>

                    <Button className="mt-5 mx-auto flex justify-center bg-o hover:bg-o rounded-full text-white font-medium text-[8px] sm:text-base lg:text-lg xl:py-7 xl:px-5  px-5 ">
                        Enroll Now
                        <Icons.ChevronRight className='xl:ms-2 text-[5px]' size={15} />
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default Hero;
