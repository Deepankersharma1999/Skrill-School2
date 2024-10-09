"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Interface for individual class
interface ClassData {
    id: string;
    title: string;
    image: string;
    members: number;
}

// Data for classes
const classesData: Record<string, ClassData[]> = {
    Design: [
        { id: '1', title: "Creative Writing: Crafting Personal Essays with Impact", image: "/opp2.svg", members: 156 },
        { id: '2', title: "Digital Design: Creating Design Systems Easier to Understand", image: "/opp2.svg", members: 120 },
        { id: '3', title: "Graphic Design: Create a Bold and Colorful Album Cover", image: "/opp2.svg", members: 140 },
        { id: '4', title: "Graphic Design: Create a Bold and Colorful Album Cover", image: "/opp2.svg", members: 140 },
        { id: '5', title: "Graphic Design: Create a Bold and Colorful Album Cover", image: "/opp2.svg", members: 140 },
        { id: '6', title: "Graphic Design: Create a Bold and Colorful Album Cover", image: "/opp2.svg", members: 140 },
        { id: '7', title: "Graphic Design: Create a Bold and Colorful Album Cover", image: "/opp2.svg", members: 140 },
        { id: '8', title: "Graphic Design: Create a Bold and Colorful Album Cover", image: "/opp2.svg", members: 140 },
    ],
    Business: [
        { id: '1', title: "Business Strategy: Building Effective Business Models", image: "/opp2.svg", members: 120 },
        { id: '2', title: "Marketing: Strategies for Digital Success", image: "/opp2.svg", members: 90 },
        { id: '3', title: "Financial Analysis: Understanding Financial Statements", image: "/opp2.svg", members: 110 },
    ],
    AIML: [
        { id: '1', title: "AI/ML: Understanding Machine Learning and AI Concepts", image: "/opp2.svg", members: 200 },
        { id: '2', title: "Data Mining: Techniques for Extracting Information", image: "/opp2.svg", members: 160 },
        { id: '3', title: "Deep Learning: Neural Networks in Action", image: "/opp2.svg", members: 180 },
    ],
    "Data Science": [
        { id: '1', title: "Data Science: Analyze and Visualize Data with Python", image: "/opp2.svg", members: 180 },
        { id: '2', title: "Statistics: Understanding Data through Statistical Methods", image: "/opp2.svg", members: 150 },
        { id: '3', title: "Big Data: Technologies and Applications", image: "/opp2.svg", members: 130 },
    ],
    Writing: [
        { id: '1', title: "Creative Writing: Express Your Ideas with Confidence", image: "/opp2.svg", members: 140 },
        { id: '2', title: "Technical Writing: Communicating Complex Ideas", image: "/opp2.svg", members: 110 },
        { id: '3', title: "Business Writing: Effective Communication in the Workplace", image: "/opp2.svg", members: 120 },
    ],
    DSA: [
        { id: '1', title: "Data Structures & Algorithms: Solve Problems Efficiently", image: "/opp2.svg", members: 110 },
        { id: '2', title: "Algorithms: Understanding Algorithm Complexity", image: "/opp2.svg", members: 130 },
        { id: '3', title: "Advanced Data Structures: Trees and Graphs", image: "/opp2.svg", members: 100 },
    ],
};

const ClassesSection = () => {
    const [activeTab, setActiveTab] = useState<string>("Design");
    const [visibleCards, setVisibleCards] = useState<number>(3);
    const activeTabRef = useRef<HTMLButtonElement | null>(null);
    const [activeTabWidth, setActiveTabWidth] = useState<number>(0);
    const [activeTabPosition, setActiveTabPosition] = useState<number>(0);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setVisibleCards(3); // Reset visible cards when changing tab
    };

    const handleShowMore = () => {
        setVisibleCards((prev) => prev + 3); // Show 3 more cards
    };

    useEffect(() => {
        if (activeTabRef.current) {
            const rect = activeTabRef.current.getBoundingClientRect();
            setActiveTabWidth(rect.width);
            setActiveTabPosition(rect.left);
        }
    }, [activeTab]);

    return (
        <section className="py-20 text-center">
            <div className="flex justify-center lg:justify-center w-full mx-auto">
                <Image
                    src="/up.svg"
                    alt="Opportunity Image"
                    width={40}
                    height={40}
                    className="h-10 w-10 lg:h-12 lg:w-12"
                />
            </div>
            <h2 className="text-3xl font-normal max-w-lg mx-auto font-bricolage mt-10">
                Train your team with real world skills and knowledge.
            </h2>
            <Tabs className="mt-10 relative" value={activeTab} onValueChange={handleTabChange}>
                <TabsList className="bg-white lg:max-w-6xl lg:gap-20 flex lg:overflow-hidden overflow-x-auto mx-auto relative py-5 border-black">
                    <div className="absolute bottom-0 left-0 right-0 lg:h-[1px] h-auto mt-5 w-full bg-black z-0"></div>

                    {Object.keys(classesData).map((tab) => (
                        <TabsTrigger
                            ref={activeTab === tab ? activeTabRef : null}
                            className={`lg:text-xl text-xs border-none relative ${activeTab === tab ? '' : ''}`}
                            key={tab}
                            value={tab}
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <div
                    className="absolute h-[2px] bg-o transition-all duration-300 ease-in-out lg:flex hidden"
                    style={{
                        width: `${activeTabWidth}px`,
                        transform: `translateX(${activeTabPosition}px)`
                    }}
                />

                {Object.keys(classesData).map((tab) => (
                    <TabsContent key={tab} value={tab}>
                        {/* Content for each tab */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10 lg:px-0 px-5">
                            {classesData[tab].slice(0, visibleCards).map((classItem) => (
                                <Card key={classItem.id} className='lg:w-[400px] lg:h-[300px] flex flex-col shadow-none border-none mt-20'>
                                    <Image
                                        src={classItem.image}
                                        alt={classItem.title}
                                        width={5}
                                        height={3}
                                        className=" bg-cover lg:w-96 w-full rounded-sm"
                                    />
                                    <CardContent className="flex-grow p-0">
                                        <h3 className="text-xl font-semibold text-left mt-5">{classItem.title}</h3>
                                    </CardContent>
                                    <CardFooter className="pr-4 pl-0 flex justify-between items-center mt-5">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center -space-x-4">
                                                <div className="w-10 h-10">
                                                    <Image
                                                        className="w-full h-full rounded-full border-2 border-white object-cover"
                                                        src="/opp2.svg"
                                                        alt="Profile 1"
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <div className="w-10 h-10">
                                                    <Image
                                                        className="w-full h-full rounded-full border-2 border-white object-cover"
                                                        src="/opp2.svg"
                                                        alt="Profile 2"
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <div className="w-10 h-10">
                                                    <Image
                                                        className="w-full h-full rounded-full border-2 border-white object-cover"
                                                        src="/opp2.svg"
                                                        alt="Profile 3"
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <div className="w-10 h-10">
                                                    <Image
                                                        className="w-full h-full rounded-full border-2 border-white object-cover"
                                                        src="/opp2.svg"
                                                        alt="Profile 4"
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                            </div>
                                            <span className='lg:text-sm text-xs'>+{classItem.members} members</span>
                                        </div>
                                        <a href={`/classes/${classItem.id}`} className="text-[#C99E98] font-mono underline lg:text-lg text-xs">Join class</a>
                                    </CardFooter>
                                </Card>

                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>


            <div className="mt-40">
                <Button className='hover:bg-o hover:text-white bg-o rounded-full text-white py-6 px-5 font-normal' onClick={handleShowMore}>
                    Show more classes
                </Button>
            </div>
        </section >
    );
};

export default ClassesSection;
