import React from 'react';
import { useState } from 'react';
import { Link } from 'react-feather';
import { NavLink } from 'react-router-dom';

function Home(props) {

    return (
        <>
            <div class="relative overflow-hidden text-center ">

                <video controls autoPlay loop muted className=' xl:w-full xl:h-[600px] h-screen    bg-contain object-cover' src="./public/airlinevideo.mp4"></video>

                <div className=' bg-[#3333] w-full absolute top-0 p-2'>
                    <div className='flex justify-between'>
                        <div>
                            <img className='w-[80px]' src="./public/logo1-removebg-preview.png" alt="" />
                        </div>
                        <div className='xl:block lg:block md:block hidden'>
                            <p className='text-white mt-7'>051-2274080 / 2274341</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-[50px] mt-1 object-contain' src="./public/fb123-removebg-preview.png" alt="" />
                            <img className='w-[50px] mt-1 object-contain' src="./public/inLinked-removebg-preview.png" alt="" />
                            <img className='w-[43px] mt-1 object-contain' src="./public/insta1234-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className=' absolute xl:top-36 top-44 mt-11 flex flex-wrap xl:justify-center justify-center  p-4 gap-7'>
                    <div className=' border border-solid border-white w-[130px] rounded-full p-2 text-center text-white '>
                        <NavLink className=''>Home</NavLink>
                    </div>
                    <div className=' border border-solid border-white w-[130px] rounded-full p-2 text-center text-white '>
                        <NavLink className=''>AirLines</NavLink>
                    </div>
                    <div className=' border border-solid border-white w-[130px] rounded-full p-2 text-center text-white '>
                        <NavLink className=''>About</NavLink>
                    </div>
                    <div className=' border border-solid border-white w-[130px] rounded-full p-2 text-center text-white '>
                        <NavLink className=''>Contact</NavLink>
                    </div>
                </div>
                <div className=' xl:mt-32 lg:32 mt-56 absolute top-40 p-4 '>
                    <h3 className=' text-2xl text-white font-bold font-serif'>Delivering World Class Travel Experiences Since 1974 </h3>
                    <div className='button-section mt-14 flex xl:justify-start justify-center gap-4'>
                        <button className=' border border-solid border-white rounded-full text-white p-2 w-[140px]'>Call Now</button>
                        <div className='flex'>
                            <button className=' border border-solid border-white rounded-full text-white p-2 w-[140px]'>Book Ticket</button>
                        </div>
                    </div>
                </div>
              
            </div>




            {/* ANOTHER SECTIONS */}

        </>
    );
}

export default Home;