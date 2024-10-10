import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
    return (
        <div className='bg-[#FFEEE5]'>
            <div className=" py-8 max-w-7xl mx-auto px-5">
                <p className='font-semibold lg:text-4xl text-sm pb-10 text-center font-bricolage'>Frequently Asked Questions</p>

                <div className="flex flex-col justify-center ">
                    <Accordion className=' rounded-2xl   mt-5  border-[#3E100B] border-[1px] border-opacity-55' type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-b lg:text-2xl text-xl font-semibold'>What is Skrill School?</AccordionTrigger>
                            <AccordionContent className='text-b text-xl bg-[FFB489]'>
                                Our user-friendly dashboard provides a clear overview of your business operations, allowing you to monitor important metrics and track progress in real-time. Streamline your project workflows with powerful task management features. Assign tasks, set deadlines.                             </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion className=' rounded-2xl  mt-5  border-[#3E100B] border-[1px] border-opacity-55' type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-b lg:text-2xl text-xl font-semibold'>How can Vertigo benefit my business?</AccordionTrigger>
                            <AccordionContent className='text-b text-xl bg-[FFB489]'>
                                Our user-friendly dashboard provides a clear overview of your business operations, allowing you to monitor important metrics and track progress in real-time. Streamline your project workflows with powerful task management features. Assign tasks, set deadlines.                             </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion className=' rounded-2xl   mt-5  border-[#3E100B] border-[1px] border-opacity-55' type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-b lg:text-2xl text-xl font-semibold'>Is Vertigo suitable for businesses of all sizes?</AccordionTrigger>
                            <AccordionContent className='text-b text-xl bg-[FFB489]'>
                                Our user-friendly dashboard provides a clear overview of your business operations, allowing you to monitor important metrics and track progress in real-time. Streamline your project workflows with powerful task management features. Assign tasks, set deadlines.                             </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion className=' rounded-2xl  mt-5  border-[#3E100B] border-[1px] border-opacity-55' type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-b lg:text-2xl text-xl font-semibold'>Can I integrate Vertigo with other tools we use?</AccordionTrigger>
                            <AccordionContent className='text-b text-xl bg-[FFB489]'>
                                Our user-friendly dashboard provides a clear overview of your business operations, allowing you to monitor important metrics and track progress in real-time. Streamline your project workflows with powerful task management features. Assign tasks, set deadlines.                             </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion className=' rounded-2xl   mt-5  border-[#3E100B] border-[1px] border-opacity-55' type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-b lg:text-2xl text-xl font-semibold'>Is my data secure with Vertigo?</AccordionTrigger>
                            <AccordionContent className='text-b text-xl bg-[FFB489]'>
                                Our user-friendly dashboard provides a clear overview of your business operations, allowing you to monitor important metrics and track progress in real-time. Streamline your project workflows with powerful task management features. Assign tasks, set deadlines.                             </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Faq