import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
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
            imageUrl: "/opp2.svg"
        },
        {
            id: 2,
            title: "I want to enhance my skills",
            description: "Join our advanced courses tailored for professionals.",
            imageUrl: "/opp2.svg"
        },
        {
            id: 3,
            title: "I am seeking career change",
            description: "Explore various fields and find your passion.",
            imageUrl: "/opp2.svg"
        },
    ];

    return (
        <div className='py-10'>
            <div className="max-w-7xl mx-auto">
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
                    <p className='lg:text-4xl font-bricolage font-semibold mt-5 lg:px-0 px-5'>Learning That Gets<br />You to the top</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 py-10lg:px-0 px-5">
                    {cardData.map(card => (
                        <Card key={card.id} className=' rounded-lg flex flex-col justify-between'>
                            <CardHeader>
                                <div className="flex justify-between lg:gap-6 items-center">
                                    <p className='lg:w-[220px]  font-semibold lg:text-lg font-bricolage'>{card.title}</p>
                                    <div className="cursor-pointer relative rounded-full bg-o h-8 w-8 flex items-center justify-center overflow-hidden transition-all duration-300 group">
                                        <Icons.ArrowUpRightIcon size={15} className='text-white  absolute transition-transform duration-300 transform group-hover:translate-x-6 group-hover:translate-y-[-6px] opacity-100 group-hover:opacity-0' />
                                        <Icons.ArrowUpRightIcon size={15} className='text-black  absolute transform translate-x-[-100%] translate-y-[100%] transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0' />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className='text-[#5f5f5fda] text-sm lg:w-[220px]'>{card.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Image src={card.imageUrl} className='w-full bg-cover' width={1} height={1} alt='' />
                            </CardFooter>
                        </Card>
                    ))}
                </div>



                <div className="max-w-7xl border-2 lg:rounded-full rounded-xl flex lg:flex-row flex-col justify-center lg:mx-auto gap-16 py-14 mt-10 mx-5 font-bricolage">
                    <div className="text-center">
                        <p className='lg:text-4xl text-l-o font-semibold font-bricolage'>50+</p>
                        <p className='font-thin text-xs'>Professionals Trained</p>
                    </div>
                    <div className="text-center">
                        <p className='lg:text-4xl text-l-o font-semibold font-bricolage'>25+</p>
                        <p className='font-thin text-xs'>Years of Experience</p>
                    </div>
                    <div className="text-center">
                        <p className='lg:text-4xl text-l-o font-semibold font-bricolage'>150+</p>
                        <p className='font-thin text-xs'>Training Sessions</p>
                    </div>
                    <div className="text-center">
                        <p className='lg:text-4xl text-l-o font-semibold font-bricolage'>100+</p>
                        <p className='font-thin text-xs'>Industry Curriculum</p>
                    </div>
                    <div className="text-center">
                        <p className='lg:text-4xl text-l-o font-semibold font-bricolage'>50000+</p>
                        <p className='font-thin text-xs'>Professionals Trained</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LearningGets;
