"use client";
import React, { useState } from "react";
import Image from "next/image";
import myImage from "@/public/howimage.png";

const HowItWork = () => {
    // Specify type for hoveredCard as number or null
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

    return (
        <div className="container mx-auto px-4 mt-20 py-5">
            <p className="font-bricolage font-semibold lg:text-5xl text-xl text-center">
                How It Works?
            </p>

            <div className="flex flex-col lg:flex-row justify-center lg:mt-20 max-w-7xl mx-auto gap-4 mt-10">
                {courses.map((course, index) => (
                    <div
                        key={course.id}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`bg-o text-white px-2 py-2 rounded-2xl flex flex-col lg:flex-row relative gap-4 lg:gap-10 transition-all duration-500 ease-in-out ${hoveredCard === index || index === 0
                            ? "lg:w-[610px]"
                            : "lg:w-[140px]"
                            }`}
                    >
                        {/* Text and Title Section */}
                        <div className="flex-1 flex flex-col justify-between p-4">
                            <div>
                                <h2 className="font-thin">{`Chap 0${course.id}`}</h2>
                                <h3 className="text-2xl mt-8 font-semibold">{course.title}</h3>
                            </div>
                            <div className="mt-auto max-w-xs text-lg font-bricolage font-thin">
                                <p>{course.description}</p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative bg-white h-[300px] w-full lg:w-[300px] rounded-2xl flex justify-center items-end">
                            <Image
                                src={myImage}
                                alt="Descriptive Alt Text"
                                className="rounded-lg w-full h-full object-cover lg:w-[280px] lg:ml-[-100px]"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;
