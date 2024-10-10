import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Benifits = () => {
    return (
        <div>
            <div className='py-10'>
                <div className="max-w-[1920px] mx-auto lg:mt-40 px-20">
                    <div className="flex justify-center ">
                        <Image
                            src="/up.svg"
                            alt="Opportunity Image"
                            width={40}
                            height={40}
                            className="h-10 w-10 lg:h-18 lg:w-18"
                        />
                    </div>

                    <div className="text-center  mx-auto mt-10">
                        <p className='lg:text-3xl font-semibold font-bricolage '>Benefits That You Can Feel Immediately</p>
                        <p className='lg:text-xl fon  text-[#767676] mt-10'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br /> Velit for official consequat enim to main purpose.</p>
                    </div>



                    <div className="flex lg:flex-row flex-col justify-center gap-10 bg-[#361b0b] p-8 rounded-[50px] mt-20 w-full">
                        <div className="p-10 w-full">
                            <p className='lg:text-5xl font-semibold text-white font-bricolage'>
                                Ultimate Revision<br /> Course for JEE<br /> MAIN - <span className='text-o'>2025</span>
                            </p>
                            <p className='lg:text-2xl font-bricolage text-[#767676] mt-10 max-w-xl'>
                                Revise Smarter, Score Higher with Expert mentors in Competishun JEE 2025 Made Easy
                            </p>
                            <Button className='bg-o text-white lg:w-[200px] py-8 mt-5 text-xl rounded-xl border-white'>
                                Join Now
                            </Button>
                        </div>
                        <div className="p-5 w-full border bg-o px-7 py-4 rounded-[50px] max-w-full">
                            <Button className='bg-[#421900] p-5 py-8 rounded-lg font-semibold text-xl text-white mx-auto flex justify-center'>
                                Course Fees
                            </Button>
                            <p className='font-semibold lg:text-[100px] text-white mx-auto flex justify-center mt-10'>
                                ₹ 2999
                            </p>
                            <div className="mt-10  flex justify-center ">
                                <div className="div">
                                    <p className="mt-5 flex items-center gap-2 text-white text-xl">
                                        <span><Icons.check className="size-4 text-o lg:h-5 lg:w-5 bg-white rounded-full" /></span>
                                        Achieve 97+ percentile in any JEE MAIN 2025.
                                    </p>
                                    <p className="mt-5 flex items-center gap-2 text-white text-xl">
                                        <span><Icons.check className="size-4 text-o lg:h-5 lg:w-5 bg-white rounded-full" /></span>
                                        Secure a rank under 25,000 in JEE Advanced.
                                    </p>
                                    <p className="mt-5 flex items-center gap-2 text-white text-xl">
                                        <span><Icons.check className="size-4 text-o lg:h-5 lg:w-5 bg-white rounded-full" /></span>
                                        ₹2459 will be refunded upon meeting these criteria.
                                    </p>
                                    <p className="mt-5 flex items-center gap-2 text-white text-xl">
                                        <span><Icons.check className="size-4 text-o lg:h-5 lg:w-5 bg-white rounded-full" /></span>
                                        Refund applies only to students of this course.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >

    )
}

export default Benifits