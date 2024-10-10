import Image from 'next/image';
import React from 'react';

const Opportunities = () => {
    return (
        <div className="bg-[#FFF6F2] w-auto relative top-[-100px] z-40 py-10 lg:mt-0 mt-40">

            <div className=" flex flex-col justify-between items-center mx-auto xl:px-20 px-10 py-8 lg:py-16 lg:mt-[-100px] mt-5">
                <div className=" flex flex-col lg:flex-row  mt-10 gap-60 ">

                    {/* left section */}

                    <div className=" flex flex-col lg:flex-row justify-center lg:items-start">

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
                            <p className="text-center lg:text-left xl:text-4xl font-bold font-bricolage">
                                Become a software<br /> developer and land<br /> your dream job.
                            </p>

                            <div className="flex gap-2 mt-10">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:h-[calc(100%+-100px)] h-[calc(100%+-40px)] w-px bg-black z-0"></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-col items-center lg:space-y-28 space-y-24">
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

                                <div className="flex flex-col justify-start lg:ml-8 space-y-12">
                                    <div className="max-w-xs mt-2">
                                        <h3 className="lg:text-2xl font-medium bricolage-grotesque">Internship</h3>
                                        <p className="text-[#858585] lg:text-xl">
                                            Gain real-world experience and connect with top companies.
                                        </p>
                                    </div>

                                    <div className="max-w-xs">
                                        <h3 className="lg:text-2xl font-medium bricolage-grotesque">Placement</h3>
                                        <p className="text-[#858585] lg:text-xl">
                                            Get placed in your dream company and get financially secured in just 6
                                            months.
                                        </p>
                                    </div>

                                    <div className="max-w-xs">
                                        <h3 className="lg:text-2xl font-medium bricolage-grotesque">Doubt Session</h3>
                                        <p className="text-[#858585] lg:text-xl">
                                            Personalized support to clarify your queries anytime with one-to-one
                                            session.
                                        </p>
                                    </div>

                                    <div className="max-w-xs">
                                        <h3 className="lg:text-2xl font-medium bricolage-grotesque">Skilled Mentors</h3>
                                        <p className="text-[#858585] lg:text-xl">
                                            Learn from industry experts with hands-on experience of more than 5+
                                            years.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-center lg:text-left text-sm lg:text-base text-[#818181] mt-10 ">
                        <p className='max-w-xl text-xl flex justify-center mx-auto '>
                            At Skrill School, we’re dedicated to helping aspiring developers like you master the most in-demand programming skills and technologies.
                        </p>
                        <div className="mt-40 lg:mt-20 relative flex justify-center">
                            <div className="absolute top-[-50px]">
                                {/* orange box */}
                                <div className="bg-o lg:h-32 lg:w-[540px]  w-full flex justify-center lg:gap-10 gap-2 items-center text-white rounded-xl px-4 lg:ml-14 py-4 lg:mt-0">
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold xl:text-5xl lg:text-xl text-lg">10</div>
                                        <div className="lg:text-xl font-mono">YEARS<br />EXPERIENCE</div>
                                    </div>
                                    <div className="absolute top-0 right-0 ms-8 left-1/2 transform -translate-x-1/2 lg:h-20 h-auto mt-5 w-px bg-black z-0"></div>

                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold xl:text-5xl lg:text-xl text-lg">50+</div>
                                        <div className="lg:text-xl font-mono">COURSE<br />TYPES</div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                className='w-2xl h-auto object-cover '
                                src="/opp2.svg"
                                width={900}
                                height={400}
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
