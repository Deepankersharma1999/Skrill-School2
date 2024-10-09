import Image from 'next/image';
import React from 'react';

const Opportunities = () => {
    return (
        <div className="bg-[#FFF6F2] w-full">
            <div className="max-w-7xl flex flex-col justify-center items-center mx-auto px-4 py-8 lg:py-16 lg:mt-0 mt-5">


                <div className="flex justify-center lg:justify-start w-full ms-10">
                    <Image
                        src="/up.svg"
                        alt="Opportunity Image"
                        width={40}
                        height={40}
                        className="h-10 w-10 lg:h-12 lg:w-12 "
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-56 mt-10">
                    <div className="flex flex-col lg:flex-row justify-center lg:items-start w-full">
                        <div className="max-w-sm w-full">
                            <div className="max-w-sm">
                                <p className="text-center lg:text-left text-3xl font-semibold">
                                    Become a software developer and land your dream job.
                                </p>
                            </div>

                            <div className="flex items-start lg:mr-8 gap-2 mt-10">
                                <div className="relative">
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-black z-0"></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-col items-center space-y-28">

                                            {[1, 2, 3, 4].map((item) => (
                                                <div
                                                    key={item}
                                                    className="flex-shrink-0 rounded-full border-2 border-black w-10 h-10 flex items-center justify-center bg-white text-black"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start lg:ml-8 space-y-14">
                                    <div>
                                        <h3 className="text-xl font-semibold">Internship</h3>
                                        <p>Gain real-world experience and connect with top companies.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">Placement</h3>
                                        <p>Get placed in your dream company and get financially secured in just 6 months.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">Doubt Session</h3>
                                        <p>Personalized support to clarify your queries anytime with one-to-one session.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">Skilled Mentors</h3>
                                        <p>Learn from industry experts with hands-on experience of more than 5+ years.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="text-center lg:text-left text-sm lg:text-base text-[#818181] mt-10">
                        <p className='max-w-sm flex justify-center mx-auto'>
                            At Skrill School, we’re dedicated to helping aspiring developers like you master the most in-demand programming skills and technologies.
                        </p>
                        <div className="mt-40 lg:mt-20 relative flex justify-center">
                            <div className="absolute top-[-50px]">

                                <div className="bg-o lg:h-32 lg:w-full w-full flex justify-center lg:gap-10 gap-2 items-center text-white rounded-xl px-4 py-4 lg:mt-0">
                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold lg:text-5xl text-xs">10</div>
                                        <div className="text-xs">YEARS<br />EXPERIENCE</div>
                                    </div>
                                    <div className="absolute top-0 right-10 left-1/2 transform -translate-x-1/2 lg:h-20 h-auto mt-5 w-px bg-black z-0"></div>

                                    <div className="flex items-center gap-2">
                                        <div className="font-semibold lg:text-5xl text-xs">50+</div>
                                        <div className="text-xs ">COURSE<br />TYPES</div>
                                    </div>
                                </div>
                            </div>
                            <Image
                                className='lg:max-w-screen-2xl h-auto object-cover'
                                src="/opp2.svg"
                                width={600}
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
