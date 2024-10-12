import Image from 'next/image';
import React from 'react';

const Opportunities = () => {
    return (
        <div className="bg-[#FFF6F2] w-full relative top-[-100px] z-40 py-10 lg:mt-0 mt-40">

            <div className="flex flex-col  items-center mx-auto xl:px-20 px-6 py-8 lg:py-40 lg:mt-[-100px] mt-5 ">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 ">

                    {/* Left Section */}
                    <div className="flex flex-col ">
                        <div className="max-w-lg">
                            <div className="p">
                                <Image
                                    src="/up.svg"
                                    alt="Opportunity Image"
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 lg:h-12 lg:w-12"
                                />
                            </div>
                            <p className="lg:text-left xl:text-4xl text-2xl font-bold font-bricolage">
                                Become a software<br /> developer and land<br /> your dream job.
                            </p>

                            <div className="flex gap-2 mt-10">
                                {/* Vertical line with circles */}
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-black z-0"
                                        style={{ height: 'calc(100% + -10px)' }}
                                    ></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-col items-center space-y-24 lg:space-y-32 xl:space-y-32">
                                            {[1, 2, 3, 4].map((item) => (
                                                <div
                                                    key={item}
                                                    className="flex-shrink-0 rounded-full border-2 xl:text-2xl border-black lg:w-12 lg:h-12 w-8 h-8 flex items-center justify-center bg-[#FFF6F2] text-black font-bold"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Content next to the circles */}
                                <div className="flex flex-col justify-start lg:ml-8 space-y-8 lg:space-y-10 xl:space-y-12">
                                    <div className="max-w-xs mt-2">
                                        <h3 className="lg:text-2xl text-lg font-medium bricolage-grotesque">Internship</h3>
                                        <p className="text-[#858585] lg:text-xl text-sm">
                                            Gain real-world experience and connect with top companies.
                                        </p>
                                    </div>

                                    <div className="max-w-xs">
                                        <h3 className="lg:text-2xl text-lg font-medium bricolage-grotesque">Placement</h3>
                                        <p className="text-[#858585] lg:text-xl text-sm">
                                            Get placed in your dream company and get financially secured in just 6 months.
                                        </p>
                                    </div>

                                    <div className="max-w-xs">
                                        <h3 className="lg:text-2xl text-lg font-medium bricolage-grotesque">Doubt Session</h3>
                                        <p className="text-[#858585] lg:text-xl text-sm">
                                            Personalized support to clarify your queries anytime with one-to-one session.
                                        </p>
                                    </div>

                                    <div className="max-w-xs">
                                        <h3 className="lg:text-2xl text-lg font-medium bricolage-grotesque">Skilled Mentors</h3>
                                        <p className="text-[#858585] lg:text-xl text-sm">
                                            Learn from industry experts with hands-on experience of more than 5+ years.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-center lg:text-left text-sm lg:text-base text-[#818181] mt-10 lg:mt-20  max-w-[700px] ">

                        <div className="mt-40 xl:mt-20 relative flex justify-center max-w-xl">
                            <div className="absolute top-[-200px] w-full max-w-sm xl:ms-6 lg:ms-4  gap-20">
                                <p className='max-w-xl text-sm  mx-auto py-10'>
                                    At Skrill School, we’re dedicated to helping aspiring developers like you master the most in-demand programming skills and technologies.
                                </p>
                                {/* Orange Box */}
                                <div className="bg-o lg:h-32 h-28 max:w-[400px]  w-full flex justify-center gap-4 lg:gap-10 items-center text-white rounded-xl px-4 py-4 lg:mt-0">
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold xl:text-5xl text-2xl">10</div>
                                        <div className="lg:text-xl text-sm font-mono">YEARS<br />EXPERIENCE</div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold xl:text-5xl text-2xl">50+</div>
                                        <div className="lg:text-xl text-sm font-mono">COURSE<br />TYPES</div>
                                    </div>
                                </div>
                            </div>

                            <Image
                                className='w-full '
                                src="/opp2.svg"
                                width={90}
                                height={200}
                                alt='Opportunities Image'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Opportunities;
