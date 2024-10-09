import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Benifits = () => {
    return (
        <div>
            <div className='py-10'>
                <div className="max-w-7xl mx-auto lg:mt-40">
                    <div className="flex justify-center ">
                        <Image
                            src="/up.svg"
                            alt="Opportunity Image"
                            width={40}
                            height={40}
                            className="h-10 w-10 lg:h-12 lg:w-12"
                        />
                    </div>

                    <div className="text-center max-w-3xl mx-auto mt-10">
                        <p className='lg:text-4xl font-semibold font-bricolage '>Benefits That You Can Feel Immediately</p>
                        <p className='lg:text-lg font-bricolage text-[#767676] mt-10'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit for official consequat enim to main purpose.</p>
                    </div>



                    <div className="flex lg:flex-row flex-col justify-center gap-10 bg-[#220D00] p-10 rounded-2xl mt-20">
                        <div className="max-w-xl  p-5">
                            <p className='text-5xl text-white'>Ultimate Revision<br /> Course for JEE<br /> MAIN - <span className='text-o'>2025</span></p>
                            <p className='lg:text-lg font-bricolage text-[#767676] mt-10 max-w-xs'>Revise Smarter, Score Higher with Experts mentors in Competishun JEE 2025 Made Easy</p>
                            <Button className='bg-o text-white lg:w-[240px] py-6 mt-5 text-lg rounded-xl border-white'>Join Now</Button>


                        </div>
                        <div className="max-w-xl border bg-o px-7 py-4 rounded-xl">

                            <Button className='bg-[#220D00] p-2 rounded-xl font-semibold text-lg text-white mx-auto flex justify-center'>Course Frees</Button>
                            <p className=' font-semibold lg:text-7xl text-white mx-auto flex justify-center mt-10'>₹ 2999</p>


                            <div className="mt-10  text-[12px] mx-auto flex flex-col justify-center">
                                <p className="mt-5 flex items-center gap-2 text-white">
                                    <span><Icons.check className="size-4 text-o h-5 w-5 bg-white rounded-full" /></span>
                                    Achieve 97+ percentile in any JEE MAIN 2025.
                                </p>
                                <p className="mt-5 flex items-center gap-2 text-white">
                                    <span><Icons.check className="size-4 text-o h-5 w-5 bg-white rounded-full" /></span>
                                    Secure a rank under 25,000 in JEE Advanced.

                                </p>
                                <p className="mt-5 flex items-center gap-2 text-white">
                                    <span><Icons.check className="size-4 text-o h-5 w-5 bg-white rounded-full" /></span>
                                    ₹2459 will be refunded upon meeting these criteria.

                                </p>
                                <p className="mt-5 flex items-center gap-2 text-white">
                                    <span><Icons.check className="size-4 text-o h-5 w-5 bg-white rounded-full" /></span>
                                    Refund applies only to students of this course.

                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >

    )
}

export default Benifits