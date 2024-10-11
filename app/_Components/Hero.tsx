import Image from 'next/image';
import React from 'react';
import Heroimg from '@/public/Hero.svg';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

const Hero = () => {
    return (
        <div className="relative h-auto lg:mt-[-50px]  lg:mb-[-50px] z-10  lg:max-w-[1920px] mx-auto">
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
                    <p className="lg:text-lg text-[8px] font-thin text-[#585858] lg:mt-3 lg:p-0 ">
                        At Skrill School, we’re dedicated to helping aspiring<br />
                        developers like you master the most in-demand<br />
                        programming skills and technologies.
                    </p>

                    <Button className="lg:mt-5 mt-5 lg:text-lg mx-auto flex justify-center bg-o hover:bg-orange-500 rounded-full lg:py-6 lg:px-6 font-medium text-white text-xs">
                        Enroll Now
                        <Icons.ChevronRight size={17} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
