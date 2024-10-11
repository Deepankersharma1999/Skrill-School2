"use client";
import React, { useState } from "react";
import Image from "next/image";
import myImage from "@/public/howimage.png";

const HowItWork = () => {
    const [openCardIndex, setOpenCardIndex] = useState<number | null>(0); // Default open card index set to 0

    const courses = [
        {
            id: 1,
            title: "Know your potential",
            description: "Exciting business opportunities and collaborations.",
        },
        {
            id: 2,
            title: "Innovative Solutions",
            description: "Learn innovative solutions and grow your network.",
        },
        {
            id: 3,
            title: "Expert Guidance",
            description: "Maximize potential through expert guidance.",
        },
        {
            id: 4,
            title: "Unlock New Skills",
            description: "Unlock new skills and drive your business forward.",
        },
    ];

    const handleCardHover = (index: number) => {
        setOpenCardIndex(index);
    };

    const handleCardLeave = () => {
        setOpenCardIndex(0);
    };

    return (
        <div className="lg:max-w-[1920px] mx-auto lg:px-20 px-5 mt-20 py-5">
            <p className="font-bricolage font-semibold lg:text-6xl text-xl text-center">
                How It Works?
            </p>

            <div className="flex flex-col lg:flex-row justify-center lg:mt-20 w-full mx-auto gap-4 mt-10 overflow-hidden">
                {courses.map((course, index) => (
                    <div
                        key={course.id}
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={handleCardLeave}
                        className={`p-5 px-2 py-2 rounded-2xl flex flex-col lg:flex-row relative gap-4 lg:gap-10 transition-all duration-700 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] 
                            ${openCardIndex === index ? "xl:w-[920px] bg-o " : "lg:w-[150px] bg-[#F0F0F0]"} text-white overflow-hidden cursor-pointer`}
                    >
                        <div className="flex-1 flex flex-col justify-between p-4">
                            <div>
                                <h2 className={`font-thin ${openCardIndex === index ? 'text-white' : 'text-black text-xs'}`}>{`Chap 0${course.id}`}</h2>
                                <h3 className={`lg:text-xl mt-5  ${openCardIndex === index ? 'text-white' : 'text-black'}`}>{course.title}</h3>
                            </div>
                            {openCardIndex === index && (
                                <div className="mt-auto lg:text-lg font-bricolage font-thin">
                                    <p className="text-white]">{course.description}</p> {/* Description is always white when open */}
                                </div>
                            )}
                        </div>

                        <div className="relative bg-white w-full lg:w-[300px] rounded-2xl flex justify-center items-end overflow-hidden">
                            <Image
                                src={myImage}
                                alt="Descriptive Alt Text"
                                className="rounded-lg w-full h-full object-cover lg:w-[280px] lg:ml-[-100px]"
                                width={200}
                                height={200}
                            />
                            <div className="absolute top-10 right-0 p-4">
                                <Image
                                    src="/plane.svg"
                                    className="relative"
                                    width={30}
                                    height={30}
                                    alt="Plane"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;
