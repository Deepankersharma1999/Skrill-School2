import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Feedbacks = () => {
    // Temporary feedback data with the same image for all users
    const feedbackData = [
        {
            id: 1,
            name: "Eleanor Pena",
            role: "CEO Sans Brothers",
            feedback: "It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.",
            image: "/opp2.svg",
        },
        {
            id: 2,
            name: "John Doe",
            role: "Product Manager",
            feedback: "Great team to work with, they exceeded our expectations with timely delivery.",
            image: "/opp2.svg",
        },
        {
            id: 3,
            name: "Jane Smith",
            role: "Design Lead",
            feedback: "Fantastic experience, their design work was top-notch.",
            image: "/opp2.svg",
        },
        {
            id: 4,
            name: "Michael Lee",
            role: "Marketing Head",
            feedback: "Their creativity is amazing. I would love to work with them again.",
            image: "/opp2.svg",
        },
        {
            id: 5,
            name: "Sophia Loren",
            role: "CTO TechWorks",
            feedback: "They delivered more than expected. Outstanding service!",
            image: "/opp2.svg",
        },
        {
            id: 6,
            name: "Daniel Craig",
            role: "Lead Developer",
            feedback: "Highly recommended for any kind of creative and tech projects.",
            image: "/opp2.svg",
        },
        {
            id: 7,
            name: "Emily Rios",
            role: "UI/UX Designer",
            feedback: "They have an eye for detail and are super professional.",
            image: "/opp2.svg",
        },
        {
            id: 8,
            name: "Matthew King",
            role: "Creative Director",
            feedback: "An excellent collaboration with a team that truly cares.",
            image: "/opp2.svg",
        },
    ];

    return (
        <div className="overflow-x-hidden lg:max-w-[1920px] mx-auto">
            <p className='py-20 lg:text-3xl text-center font-bricolage font-semibold'>Feedbackes</p>

            {/* First Marquee */}
            <div className="flex">
                <Marquee speed={10}>
                    {feedbackData.map((user) => (
                        <Card
                            key={user.id}
                            className="mx-4 w-[450px] bg-[#FFFAF7] border-none min-h-[300px] flex flex-col justify-between"
                        >
                            <CardHeader className="flex flex-row items-center space-x-4">
                                <div>
                                    <Image
                                        src={user.image}
                                        width={40}
                                        height={40}
                                        alt={user.name}
                                        className="rounded-full object-cover h-10 w-10"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">{user.name}</h3>
                                    <p className="text-sm text-gray-500">{user.role}</p>
                                </div>
                            </CardHeader>

                            <CardContent className="mt-4">
                                <p className="text-gray-700">{user.feedback}</p>
                            </CardContent>

                            <CardFooter className="mt-2">
                                <div className="flex justify-start">
                                    <span className="text-[#FFD88D]">★★★★★</span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </Marquee>
            </div>

            {/* Second Marquee */}
            <div className="flex">
                <Marquee speed={10} direction='right'>
                    {feedbackData.map((user) => (
                        <Card
                            key={user.id}
                            className="mx-4 w-[450px] flex-shrink-0 bg-[#FFFAF7] border-none min-h-[300px] flex flex-col justify-between mt-10"
                        >
                            <CardHeader className="flex flex-row items-center space-x-4">
                                <div>
                                    <Image
                                        src={user.image}
                                        width={40}
                                        height={40}
                                        alt={user.name}
                                        className="rounded-full object-cover h-10 w-10"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold">{user.name}</h3>
                                    <p className="text-sm text-gray-500">{user.role}</p>
                                </div>
                            </CardHeader>

                            <CardContent className="mt-4">
                                <p className="text-gray-700">{user.feedback}</p>
                            </CardContent>

                            <CardFooter className="mt-2">
                                <div className="flex justify-start">
                                    <span className="text-[#FFD88D]">★★★★★</span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </Marquee>
            </div>
        </div>

    );
};

export default Feedbacks;
