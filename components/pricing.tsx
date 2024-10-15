'use client'
import React, { useState } from "react";
import clsx from "clsx";
import { Icons } from "./icons";
import Image from "next/image";

export default function Pricing() {
    const [activeTab, setActiveTab] = useState("half");

    const handleEnrollNow = () => {
        if (activeTab === "half") {
            window.location.href = "https://rzp.io/l/n5ttAIJH4";
        } else if (activeTab === "others") {
            window.location.href = "https://rzp.io/l/XKNwAO2EE";
        }
    };

    return (
        <section className="flex flex-col items-center py-12">

            <div className="flex justify-between border border-gray-300 rounded-full bg-[#FFFCF9] gap-1 py-1 px-1">
                <button
                    className={clsx(
                        "flex-1 font-thin text-sm rounded-full transition-colors duration-300 ease-in-out px-6 py-3",
                        activeTab === "half"
                            ? "bg-o text-white shadow-lg"
                            : "bg-transparent text-gray-600"
                    )}
                    onClick={() => setActiveTab("half")}
                >
                    Half Payment
                </button>
                <button
                    className={clsx(
                        "flex-1 w-40 font-thin text-sm rounded-full transition-colors duration-300 ease-in-out px-6 py-3",
                        activeTab === "full"
                            ? "bg-o text-white shadow-lg"
                            : "bg-transparent text-gray-600"
                    )}
                    onClick={() => setActiveTab("full")}
                >
                    Full Payment
                </button>
            </div>




            <div className="w-full flex flex-col max-w-md mt-12 xl:p-10 p-5 shadow-xl rounded-[25px] bg-[#FFFCF9] border-orange-600 border-[1px] relative">
                <div className="absolute xl:top-[-70px] lg:top-[-40px] xl:left-[-55px] left-[-50px] xl:flex lg:flex hidden">
                    <div className="relative">
                        <Image src="/roll.svg" className="w-full xl:w-[170px]" width={10} height={10} alt="" />
                    </div>
                </div>

                <div className=" w-full">
                    <div className="flex flex-col items-start">
                        <p className="bg-o text-white font-semibold py-2 px-4 rounded-md mb-4 font-bricolage">Skrill School</p>

                        <p className="text-[#6d6d6dcc] mb-4 font-thin">
                            Especially for those who are indeed ready for obtaining a course to land a job profile directly
                        </p>

                        <div className="text-5xl font-bold text-gray-800 mb-1">
                            {activeTab === "half" ? "₹15,000" : "₹30,000"}
                            <span className="text-gray-500 text-lg ml-2">/Month</span>
                        </div>

                        <div className="px-5 border-t border-gray-200 w-full my-5" />

                        <ul className="mt-6 space-y-2 text-lg text-gray-600">
                            <li className="flex items-center text-sm">
                                <span className="mr-2 text-lg"><Icons.check /></span> 6 Month Duration
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-2 text-lg"><Icons.check /></span> 25 students per batch
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-2 text-lg"><Icons.check /></span> Live Doubt Sessions
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-2 text-lg"><Icons.check /></span> Full Job Support
                            </li>
                            <li className="flex items-center text-sm">
                                <span className="mr-2 text-lg"><Icons.check /></span> Dedicated curriculum
                            </li>
                        </ul>

                        <div className="px-5 border-t border-gray-200 w-full my-5" />

                        <button
                            className="mt-8 bg-o text-white px-8 py-3 rounded-full w-full font-semibold shadow-lg hover:bg-orange-600"
                            onClick={handleEnrollNow}
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
                {/* top right cap */}
                <div className="absolute top-[-100px] xl:right-[-300px] lg:right-[-200px] xl:flex lg:flex hidden">
                    <div className="relative">
                        <Image src="/cap.svg" className="w-full xl:w-[200px]" width={10} height={10} alt="cap" />
                    </div>
                </div>

                {/* botttom left book */}
                <div className="absolute bottom-0 xl:left-[-200px] lg:left-[-100px] xl:flex lg:flex hidden">
                    <div className="relative">
                        <Image src="/book.svg" className="w-full xl:w-[130px]" width={10} height={10} alt="BOOK" />
                    </div>
                </div>

                {/* bottom plane */}
                <div className="absolute bottom-0 xl:right-[-200px] lg:right-[-100px] xl:flex lg:flex hidden">
                    <div className="relative">
                        <Image src="/plan2.svg" className="w-full xl:w-[130px]" width={10} height={10} alt="paperplane" />
                    </div>
                </div>
            </div>



        </section>
    );
}
