import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { Icons } from './icons';

const Footer = () => {
    return (
        <footer className="bg-o text-white relative border lg:max-w-[1350px] rounded-[50px] mx-auto mt-20 py-5 z-0 overflow-hidden">
            <div
                className="absolute top-[-160px] right-[-200px] w-[400px] h-[400px] bg-cover opacity-75"
                style={{ backgroundImage: "url('/footer.svg')" }}
            ></div>

            <div
                className="absolute bottom-[-130px] left-[-100px] w-[300px] h-[300px] bg-cover opacity-30 z-5 rotate-180"
                style={{ backgroundImage: "url('/footer.svg')" }}
            ></div>

            <div className="text-center mb-8 lg:max-w-xl mx-auto bg-orange-500 px-5 py-10 rounded-[50px]" style={{ backgroundImage: "url('/jali.svg')" }}>

                <h2 className="text-3xl font-bold mb-4">Ready to use Meetbot?</h2>
                <p className="mt-10 text-xs font-thin text-opacity-25 text-center">Subscribe to read our unique perspective on all things user<br />
                    research and product feedback.</p>
                <div className="flex justify-center space-x-4 mt-5">
                    <button className="bg-white text-o px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition duration-300">Try free now</button>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">Schedule a call now</button>
                </div>
            </div>

            <div className=" mx-auto flex flex-col lg:flex-row justify-between max-w-6xl items-center  mt-10 z-10">
                <div className="flex flex-col gap-5 justify-center bg-orange-500 px-5 py-16 rounded-xl">
                    <h3 className="font-bold mb-4 lg:text-3xl">Before you go check<br /> these links</h3>

                    <div className="grid grid-cols-1 md:grid-flow-col-2 lg:grid-cols-3 lg:gap-36 gap-10 justify-center">
                        <ul className="flex flex-col space-y-2">
                            <li className="font-sans lg:text-2xl">Product</li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Streaming</a></li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Human Transcription</a></li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Insights</a></li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Languages</a></li>
                        </ul>

                        <ul className="flex flex-col space-y-2">
                            <li className="font-sans lg:text-2xl">Get Started</li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Help Center</a></li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Sign up</a></li>
                        </ul>

                        <ul className="flex flex-col space-y-2">
                            <li className="font-sans lg:text-2xl">Company</li>
                            <li><a href="#" className="hover:underline font-sans font-thin">About Meetbot</a></li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Blog</a></li>
                            <li><a href="#" className="hover:underline font-sans font-thin">Security and privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:mt-0 mt-10">
                    <div className="text-left   p-5 bg-orange-500 px-5 py-10 rounded-xl">
                        <h3 className="font-bold text-3xl text-white mb-4">See you on Meetbot</h3>
                        <p className='text-xl font-sans'>CONTACT US</p>
                        <p className="mb-4 flex gap-2 mt-5 font-sans font-extralight"><Icons.Mail className='border rounded-full p-1' />support@gmail.com</p>
                    </div>
                    <div className="flex space-x-3 ">
                        <a href="#" className="hover:text-gray-300 bg-orange-500 p-4 rounded-xl">
                            <RiFacebookFill className="size-20 text-white" />
                        </a>
                        <a href="#" className="hover:text-gray-300 bg-orange-500  p-4 rounded-xl">
                            <InstagramLogoIcon className="size-20 text-white" />
                        </a>
                        <a href="#" className="hover:text-gray-300 bg-orange-500 p-4 rounded-xl">
                            <LinkedInLogoIcon className="size-20 text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

