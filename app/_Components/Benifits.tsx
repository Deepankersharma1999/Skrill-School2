import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Benifits = () => {
    return (
        <div>
            <div className='py-10'>
                <div className="max-w-[1920px] mx-auto lg:mt-10 lg:px-40 px-2">
                    <div className="flex justify-center ">
                        <Image
                            src="/up.svg"
                            alt="Opportunity Image"
                            width={40}
                            height={40}
                            className="h-10 w-10 lg:h-18 lg:w-18"
                        />
                    </div>

                    <div className="text-center mx-auto mt-10">
                        <p className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold font-bricolage'>
                            Benefits That You Can Feel Immediately
                        </p>
                        <p className='lg:text-lg md:text-base text-sm text-[#767676] mt-6'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br />
                            Velit for official consequat enim to main purpose.
                        </p>
                    </div>

                    <div className="flex lg:flex-row flex-col justify-center gap-6 bg-[#220D00] p-4 rounded-[40px] lg:rounded-[50px] mt-10 lg:mt-20 w-full ">
                        {/* Left Side */}
                        <div className="lg:p-10 p-5 w-full">
                            <p className='lg:text-4xl md:text-3xl text-2xl font-semibold text-white font-bricolage'>
                                Ultimate Revision<br /> Course for JEE<br /> MAIN - <span className='text-o'>2025</span>
                            </p>
                            <p className='lg:text-2xl md:text-xl text-lg text-[#b8b7b7] mt-6 lg:mt-10 max-w-lg'>
                                Revise Smarter, Score Higher with Expert mentors in Competishun JEE 2025 Made Easy
                            </p>
                            <div className="max-w-lg lg:mt-5">
                                <Button className='bg-o text-white py-6 lg:py-8 mt-5 text-lg lg:text-xl rounded-lg lg:rounded-xl w-full h-16 lg:h-20'>
                                    Join Now
                                </Button>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="p-5 lg:p-10 w-full border bg-o px-5 lg:px-7 py-4 rounded-[40px] lg:rounded-[50px] max-w-full">
                            <Button className='bg-[#421900] p-4 lg:p-5 py-6 lg:py-8 rounded-lg font-semibold text-lg lg:text-xl text-white mx-auto flex justify-center'>
                                Course Fees
                            </Button>
                            <p className='font-semibold lg:text-[50px] text-[60px] md:text-[80px] text-white mx-auto flex justify-center mt-6 lg:mt-10'>
                                ₹ 2999
                            </p>
                            <div className="flex justify-center">
                                <div>
                                    <p className="mt-3 lg:mt-5 flex items-center gap-2 text-white text-sm lg:text-md">
                                        <span><Icons.check className="text-o lg:h-5 lg:w-5 h-4 w-4 bg-white rounded-full" /></span>
                                        Achieve 97+ percentile in any JEE MAIN 2025.
                                    </p>
                                    <p className="mt-3 lg:mt-5 flex items-center gap-2 text-white text-sm lg:text-md">
                                        <span><Icons.check className="text-o lg:h-5 lg:w-5 h-4 w-4 bg-white rounded-full" /></span>
                                        Secure a rank under 25,000 in JEE Advanced.
                                    </p>
                                    <p className="mt-3 lg:mt-5 flex items-center gap-2 text-white text-sm lg:text-md">
                                        <span><Icons.check className="text-o lg:h-5 lg:w-5 h-4 w-4 bg-white rounded-full" /></span>
                                        ₹2459 will be refunded upon meeting these criteria.
                                    </p>
                                    <p className="mt-3 lg:mt-5 flex items-center gap-2 text-white text-sm lg:text-md">
                                        <span><Icons.check className="text-o lg:h-5 lg:w-5 h-4 w-4 bg-white rounded-full" /></span>
                                        Refund applies only to students of this course.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Benifits