import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='font-outfit'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                
                {/* ----- Left Section ------ */}
                <div>
                    <img className='mb-5 w-40' src={assets.Logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    Connecting alumni, empowering students, and fostering a vibrant professional community.
                    </p>
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    Join us in transforming lives and careers through meaningful connections.
                    </p>
                </div>

                {/* ----- Center Section ------ */}
                <div>
                    <p className='text-xl font-medium mb-5 text-secondary'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* ----- Right Section ------ */}
                <div>
                    <p className='text-xl font-medium mb-5  text-secondary'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600' >
                        <li>+91 7975962858</li>
                        <li>codexx@gmail.com</li>
                    </ul>
                </div>
                
            </div>
            {/*copyright*/}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Alumni Connect - All Right Reserved.</p>
            </div>
        </div>
    );
}


export default Footer