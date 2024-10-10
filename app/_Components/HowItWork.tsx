"use client";
import React, { useState } from "react";
import Image from "next/image";
import myImage from "@/public/howimage.png";

const HowItWork = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const courses = [
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
        <div className="lg:max-w-[1920px] mx-auto px-20 mt-20 py-5">
            <p className="font-bricolage font-semibold lg:text-6xl text-xl text-center">
                How It Works?
            </p>

            <div className="flex flex-col lg:flex-row justify-center lg:mt-20 w-full mx-auto gap-4 mt-10 overflow-hidden">
                <div className="p-5 bg-orange-500 text-white px-2 py-2 rounded-2xl flex flex-col lg:flex-row relative gap-4 lg:gap-10 transition-all duration-500 ease-in-out lg:w-[800px] overflow-hidden">
                    <div className="flex-1 flex flex-col justify-between p-4">
                        <div>
                            <h2 className="font-thin">Chap 01</h2>
                            <h3 className="text-5xl mt-8 font-semibold">Know your potential</h3>
                        </div>
                        <div className="mt-auto text-lg font-bricolage font-thin">
                            <p>Exciting business opportunities and collaborations.</p>
                        </div>
                    </div>
                    <div className="relative bg-white h-[400px] w-full lg:w-[300px] rounded-2xl flex justify-center items-end overflow-hidden">
                        {/* Left Image */}
                        <Image
                            src={myImage}
                            alt="Descriptive Alt Text"
                            className="absolute rounded-lg w-full h-full object-cover lg:w-[280px] left-[-10px] z-10"
                            width={200}
                            height={200}
                        />

                        {/* Right Image */}
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

                {courses.map((course, index) => (
                    <div
                        key={course.id}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`p-5 px-2 py-2 rounded-2xl flex flex-col lg:flex-row relative gap-4 lg:gap-10 transition-all duration-500 ease-in-out 
                            ${hoveredCard === index ? "lg:w-[800px] bg-orange-500" : "lg:w-[200px] bg-[#F0F0F0]"} text-black overflow-hidden`}
                    >
                        <div className="flex-1 flex flex-col justify-between p-4">
                            <div>
                                <h2 className="font-thin">{`Chap 0${course.id}`}</h2>
                                <h3 className="lg:text-3xl mt-8 font-semibold">{course.title}</h3>
                            </div>
                            <div className="mt-auto text-lg font-bricolage font-thin">
                                <p>{course.description}</p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative bg-white h-[400px] w-full lg:w-[300px] rounded-2xl flex justify-center items-end overflow-hidden">
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
