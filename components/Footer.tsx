import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { Icons } from './icons';
import { Button } from './ui/button';

const Footer = () => {
    return (
        <div className="lg:px-36 px-5 max-w-[1920px] mx-auto py-12">
            <footer className="bg-o text-white relative rounded-[50px] mx-auto mt-20 py-20 z-0 overflow-hidden lg:p-10 p-5">
                <div
                    className="absolute top-[-160px] right-[-200px] lg:w-[400px] h-[400px] bg-cover opacity-75 hidden lg:block"
                    style={{ backgroundImage: "url('/footer.svg')" }}
                ></div>

                <div
                    className="absolute bottom-[-130px] left-[-100px] w-[300px] h-[300px] bg-cover opacity-30 z-5 rotate-180 hidden lg:block"
                    style={{ backgroundImage: "url('/footer.svg')" }}
                ></div>

                <div className="relative text-center mb-8 lg:max-w-xl w-full mx-auto bg-orange-500 px-5 py-10 rounded-[25px] z-10" style={{ backgroundImage: "url('/jali.svg')" }}>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to use Meetbot?</h2>
                    <p className="mt-10 text-xs lg:text-sm font-thin text-opacity-25 text-center">
                        Subscribe to read our unique perspective on all things user<br />
                        research and product feedback.
                    </p>
                    <div className="flex justify-center space-x-4 mt-5">
                        <Button className="lg:text-sm text-sm bg-white text-o xl:px-4 px-1 py-5 rounded-md hover:bg-orange-500 hover:text-black text-black  transition duration-300 flex gap-2">Try free now <Icons.MoveRight /></Button>
                        <Button className="lg:text-sm text-sm bg-black text-white xl:px-4 px-1 py-5 rounded-md hover:bg-gray-700 transition duration-300">Schedule a call now</Button>
                    </div>
                </div>

                <div className="mx-auto flex flex-col lg:flex-row justify-between max-w-5xl items-center mt-10 z-10 gap-10">
                    <div className="flex flex-col gap-5 justify-center bg-orange-500 p-5 rounded-[25px] w-full lg:w-auto">
                        <h3 className="font-bold mb-4 lg:text-2xl text-xl">Before you go check<br /> these links</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-28 gap-10 justify-center">
                            <ul className="flex flex-col space-y-2">
                                <li className="font-sans lg:text-lg">Product</li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Streaming</a></li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Human Transcription</a></li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Insights</a></li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Languages</a></li>
                            </ul>

                            <ul className="flex flex-col space-y-2">
                                <li className="font-sans lg:text-lg">Get Started</li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Help Center</a></li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Sign up</a></li>
                            </ul>

                            <ul className="flex flex-col space-y-2">
                                <li className="font-sans lg:text-lg">Company</li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">About Meetbot</a></li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Blog</a></li>
                                <li><a href="#" className="hover:underline font-sans font-medium text-[12px]">Security and privacy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* bottom right div */}
                    <div className="flex flex-col lg:mt-0 mt-10 w-full lg:w-auto gap-5">
                        <div className="text-left p-8 bg-orange-500 rounded-[25px]">
                            <h3 className="font-bold lg:text-2xl text-xl text-white mb-4">See you on Meetbot</h3>
                            <p className='text-lg lg:text-xl font-sans'>CONTACT US</p>
                            <p className="mb-4 flex justify-start gap-2 mt-5 font-sans font-extralight"><Icons.Mail className='border rounded-full p-1' />support@gmail.com</p>
                        </div>
                        <div className="flex justify-center space-x-3 rounded-[25px]">
                            <a href="#" className="hover:text-gray-300 bg-orange-500 p-4 rounded-xl">
                                <RiFacebookFill className="xl:size-20 text-white" />
                            </a>
                            <a href="#" className="hover:text-gray-300 bg-orange-500 p-4 rounded-xl">
                                <InstagramLogoIcon className="xl:size-20 text-white" />
                            </a>
                            <a href="#" className="hover:text-gray-300 bg-orange-500 p-4 rounded-xl">
                                <LinkedInLogoIcon className="xl:size-20 text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    );
};

export default Footer;

