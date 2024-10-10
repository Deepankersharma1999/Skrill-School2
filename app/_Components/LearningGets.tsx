import { Icons } from '@/components/icons';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const LearningGets = () => {
    // Define an array of card data
    const cardData = [
        {
            id: 1,
            title: "I am a fresher looking to kickstart my career",
            description: "Seamless timings and course materials incoming.",
            imageUrl: "/learn1.svg"
        },
        {
            id: 2,
            title: "I want to enhance my skills",
            description: "Join our advanced courses tailored for professionals.",
            imageUrl: "/learn2.svg"
        },
        {
            id: 3,
            title: "I am seeking career change",
            description: "Explore various fields and find your passion.",
            imageUrl: "/learn3.svg"
        },
    ];

    return (
        <div className='py-10'>
            <div className="lg:max-w-[1920px] mx-auto lg:px-20">
                <div className="flex justify-center lg:justify-start">
                    <Image
                        src="/up.svg"
                        alt="Opportunity Image"
                        width={40}
                        height={40}
                        className="h-10 w-10 lg:h-12 lg:w-12"
                    />
                </div>
                <div className="flex">
                    <p className='lg:text-5xl font-semibold mt-5 lg:px-0 px-5 font-bricolage'>Learning That Gets<br />You to the top</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:px-0 px-5">
                    {cardData.map(card => (
                        <Card key={card.id} className=' rounded-3xl flex flex-col justify-between border-[#858585] border-[1px] p-2 shadow-none'>
                            <CardHeader>
                                <div className="flex justify-between lg:gap-6 items-center ">
                                    <p className='lg:w-[320px]  font-semibold lg:text-2xl font-bricolage'>{card.title}</p>
                                    <div className="cursor-pointer relative rounded-full bg-o lg:h-10 lg:w-10 flex items-center justify-center overflow-hidden transition-all duration-300 group">
                                        <Icons.ArrowUpRightIcon size={15} className='text-white lg:h-5 lg:w-5  absolute transition-transform duration-300 transform group-hover:translate-x-6 group-hover:translate-y-[-6px] opacity-100 group-hover:opacity-0' />
                                        <Icons.ArrowUpRightIcon size={15} className='text-black lg:h-5 lg:w-5  absolute transform translate-x-[-100%] translate-y-[100%] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0' />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className='text-[#5f5f5fda] lg:text-lg text-sm lg:w-[250px] font-bricolage'>{card.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Image src={card.imageUrl} className='w-full bg-cover rounded-3xl border-[#f5f5f5] border-[2px]' width={1} height={1} alt='' />
                            </CardFooter>
                        </Card>
                    ))}
                </div>


                <div className="lg:max-w-[1920px] px-20 mx-auto border-2 lg:rounded-full rounded-xl flex lg:flex-row flex-col justify-center lg:gap-20 py-14 mt-10 font-bricolage border-[#c0c0c0] border-1.2">
                    {[
                        { value: "50K+", label: "Professionals Trained" },
                        { value: "25+", label: "Years of Experience" },
                        { value: "150+", label: "Training Sessions" },
                        { value: "100+", label: "Industry Curriculum" },
                        { value: "50000+", label: "Professionals Trained" },
                    ].map((item, index) => (
                        <div className="text-center flex flex-col items-center justify-center w-full lg:w-1/5" key={index}>
                            <p className='lg:text-4xl text-l-o font-semibold'>{item.value}</p>
                            <p className='font-thin text-md'>{item.label}</p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default LearningGets;
