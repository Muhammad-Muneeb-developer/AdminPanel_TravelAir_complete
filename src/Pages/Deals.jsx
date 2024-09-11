import React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather"

function Deals(props) {
    const items = [
        { image: "./public/texp.jpg" },
        { image: "./public/texp1.webp" },
        { image: "./public/texp3.jfif" },
        { image: "./public/texp4.webp" },
        { image: "./public/texp6.jfif" },
        { image: "./public/texp7.jfif" },
        { image: "./public/texp8.jfif" },
        { image: "./public/texp.jpg" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < items.length - visibleItems()) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Determine how many items to display based on screen size
    const visibleItems = () => {
        if (window.innerWidth >= 1280) return 4; // Show 4 items on large screens
        if (window.innerWidth >= 768) return 2; // Show 2 items on medium screens
        return 1; // Show 1 item on small screens
    };
    return (
        <div>
            <div className=' xl:ml-10  mt-20 '>
                <form action="">
                    <div className='xl:flex xl:flex-row xl:justify-center lg:flex lg:justify-center lg:gap-1 xl:gap-4 text-center xl:p-0 p-4 m-4 xl:ml-0 ml-8'>
                        <label htmlFor="" className='text-black mt-5 xl:text-start text-center'>From</label>
                        <div className=''>
                            <select className='w-[150px] h-[60px]' name="from">
                                <option value=""> --- Select --- </option>
                                <option value="new_york">New York</option>
                                <option value="london">London</option>
                                <option value="paris">Paris</option>
                                <option value="tokyo">Tokyo</option>
                            </select>
                        </div>
                        <label htmlFor="" className='text-black mt-5'>To</label>
                        <div>
                            <select className='w-[150px] h-[60px]' name="" id="">
                                <option value="">--- Select ---</option>
                                <option value="new_york">New York</option>
                                <option value="london">London</option>
                                <option value="paris">Paris</option>
                                <option value="tokyo">Tokyo</option>
                            </select>
                        </div>
                        <label htmlFor="" className='text-black mt-5'>departure</label>
                        <div>
                            <input className='w-[150px] h-[60px]'
                                type="date"
                                name="departure"
                                placeholder="ADD date"
                            />
                        </div>
                        <label htmlFor="" className='text-black mt-5'>Return</label>
                        <div>
                            <input className='w-[150px] h-[60px]'
                                type="date"
                                name="departure"
                                placeholder="ADD date"
                            />
                        </div>
                        <label htmlFor="" className='text-black mt-5'>Class</label>
                        <div className=''>
                            <select className='w-[150px] h-[60px]' name="travelers">
                                <option value="">1 Adult, Economy</option>
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First</option>
                                <option value="standard">Standard</option>
                            </select>

                        </div>
                    </div>
                </form>
                {/* QUERY SEND */}
                <div className=' button xl:ml-0 ml-5  mt-10 xl:text-start text-center flex justify-center'>
                    <button className=' border border-solid text-white border-white bg-[#026CE8] w-[140px] p-3 rounded-md xl:mr-0  '>Send query</button>
                </div>
            </div>
            <div>
                <div className="relative w-full mt-16">
                    <p className='text-center text-xl font-serif font-semibold'>EXPERIENCES</p>
                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems())}%)` }}
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 p-2 ${window.innerWidth >= 1280
                                        ? 'w-1/4'
                                        : window.innerWidth >= 768
                                            ? 'w-1/2'
                                            : 'w-full'
                                        }`}
                                >
                                    <div className="bg-white rounded-lg shadow-md p-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-40 w-full object-cover rounded-md"
                                        />
                                        <h3 className="text-lg font-medium mt-4">{item.name}</h3>
                                        <p className="text-gray-600 mt-2">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-100 text-black p-4 rounded-full"
                        style={{ zIndex: 10 }}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-100 text-black p-4 rounded-full"
                        style={{ zIndex: 10 }}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                {/* EXPLORE TRAVEL AIR INTERNATINOL */}
                <div className=' mt-24'>
                    <div className='flex justify-center  '>
                        <div>
                            <img src="./public/image 6.png" alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl  font-semibold xl:mt-10 mt-3 font-serif'>Explore Travel Air International</h4>
                        </div>
                        <div>
                            <img src="./public/image 6.png" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <div className=' xl:w-[50%] md:w-[90%] xl:ml-12 text-center text-balance md:text-center '>
                            <p className='text-balance font-serif'>TRAVELAIR INTERNATIONAL is one of the leading lATA accredited travel agencies of Islamabad (Pakistan) well established since 1974, offering airline reservations, ticketing of major international and domestic airlines and variety of other travel related services.</p>
                        </div>
                    </div>
                </div>
                {/* WELCOME TRAVEL AIR INTERNATIONAL */}
                <div className=' content mt-24 xl:flex xl:justify-center '>
                    <div className='xl:flex xl:justify-around lg:flex  lg:gap-3 xl:p-4  p-4  '>
                        {/* IMAGE SECTION */}
                        <div className='image-section text-center lg:mt-10 xl:flex xl:justify-start  flex justify-center lg:w-[90%] '>
                            <img className='xl:w-[650px] lg:w-[100%]  w-[90%] md:w-[100%] md:object-contain' src="./public/pexel.png" alt="" />
                        </div>
                        {/* TEXT AREA SECTION */}
                        <div className='xl:w-[85%] md:w-[90%] w-[90%] xl:flex xl:justify-start lg:justify-start   flex flex-wrap  '>
                            <h3 className=' font-semibold xl:text-xl text-base font-serif lg:text-xl lg:text-start mt-7 xl:text-start xl:ml-0 md:ml-0 ml-4 text-center '>Welcome Travel Air InterNational</h3>
                            <div className='xl:mt-10 xl:p-0 lg:p-0 p-4'>
                                <h5 className=' font-semibold text-xl'>Vision:</h5>
                                <p className='font-serif text-balance'>To see Travelair International has become a standard and aspires to be seen as the benchmark against which others are judged.</p>
                            </div>
                            <div className=' xl:mt-12 xl:p-0 lg:p-0 p-4'>
                                <h4 className=' font-semibold text-xl text-balance'>Mission & Objective:</h4>
                                <p className=' font-serif text-balance'>Endeavor to expand the tourism potential and strive to excel in providing optimum value travel services to the travellers and to excel in tourism related services backed by efficient and effective planning while seeking to enlarge their scope and dimension.Endeavor to expand the tourism potential and strive to excel in providing optimum value travel services to the travellers and to excel in tourism related services backed by efficient and effective planning while seeking to enlarge their scope and dimension.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TEAMING SECTION */}
                <div className='mt-24'>
                    <h3 className=' text-xl font-semibold text-center font-serif'>Meet Our Team</h3>
                </div>

                <div className='bg-white flex xl:justify-around flex-wrap justify-center md:justify-around hover:scale-105 '>
                   <div className=' shadow-2xl bg-white xl:w-[300px] md:w-[300px] w-[90%] h-[400px] flex justify-center mt-14 '>
                        <div className='p-4 mt-16 text-center'>
                                <img className='w-[100px] object-cover ml-8' src="./public/image 10.png" alt="" />
                             <div>
                             <p className='font-bold font-serif text-xl mt-6'>MR Shoaib Butt</p>
                             <p>CEO OF COMPANY</p>
                             </div>
                        </div>
                   </div>

                   <div className=' shadow-2xl bg-white xl:w-[300px] md:w-[300px] w-[90%] h-[400px] flex justify-center mt-14 hover:scale-105'>
                        <div className='p-4 mt-16 text-center'>
                                <img className='w-[100px] object-cover ml-8' src="./public/image 10.png" alt="" />
                             <div>
                             <p className='font-bold font-serif text-xl mt-6'>MR Shoaib Butt</p>
                             <p>CEO OF COMPANY</p>
                             </div>
                        </div>
                       
                   </div>
                </div>

                {/* CONTACT US SECTION */}
                <div className='mt-24'>
                    <h3 className=' font-semibold text-center text-xl font-serif'>Know More About Travel Air International</h3>
                    <div className='flex xl:justify-around justify-center lg:flex lg:flex-nowrap lg:justify-between flex-wrap p-4 mt-16 '>
                        <div className='flex justify-center'>
                            <img className='xl:w-[300px] lg:w-[80%] w-[90%]' src="./public/image 12.png" alt="" />
                        </div>
                        <div className=' border border-solid border-inherit xl:w-[500px] xl:h-[400px] lg:w-[500px] lg:mt-12 lg:h-[500px] w-[90%] xl:p-0 p-2 rounded-md  '>
                            <div className='xl:flex xl:justify-around xl:gap-0 gap-3 mt-10'>
                                <input className='p-2 border border-solid border-inherit xl:w-auto  w-[90%]' type="text" placeholder='Frist Name' />
                                <input className='p-2 border border-solid border-inherit xl:mt-0 mt-8  xl:w-auto w-[90%]' type="text" placeholder='Last Name' />
                            </div>
                            <div className='xl:flex xl:justify-around mt-10'>
                                <input className='p-2 border border-solid border-inherit  xl:w-auto w-[90%] ' type="text" placeholder='Phone Number' />
                                <input className='p-2 border border-solid border-inherit  xl:w-auto xl:mt-0 mt-8 w-[90%]' type="email" placeholder='Email Address' />
                            </div>
                            <div className='xl:flex xl:justify-center mt-10'>
                                <textarea className='xl:w-[450px] border border-solid border-inherit  w-[90%]' name="" id="" placeholder='Comments'></textarea>
                            </div>
                            <div className='xl:flex xl:justify-center mt-14 p-4'>
                                <button className=' bg-slate-900 w-[120px] p-2 transition-all duration-500 hover:bg-gradient-to-l rounded-lg text-white'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SERVICES SECTIONS */}
                <div className='mt-24'>
                    <h3 className='text-center text-xl font-semibold'>OUR SERVICES</h3>
                    <div className='flex flex-wrap justify-around mt-10 '>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl xl:mt-0 mt-6 hover:scale-105'>
                            <div>
                                <img  src="./public/tickiting.png" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>Ticket Managing </p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl xl:mt-0 mt-6 hover:scale-105'>
                            <div>
                                <img className='h-[180px]' src="./public/3213.png" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>AirLine Reservation </p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl xl:mt-0 mt-6 hover:scale-105'>
                            <div>
                                <img className='h-[180px]' src="./public/HB.webp" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>Hotel Booking</p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl xl:mt-0 mt-6 hover:scale-105'>
                            <div>
                                <img className='h-[180px] object-cover' src="./public/RC1.jfif" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>Rental Cars</p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl mt-12 hover:scale-105'>
                            <div>
                                <img className='h-[180px] w-[280px] object-cover' src="./public/VS.jfif" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>Visa assistance</p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl mt-12 hover:scale-105'>
                            <div>
                                <img className='h-[180px] w-[280px] object-cover' src="./public/TI.jfif" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>Travel Insurance</p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl mt-12 hover:scale-105'>
                            <div>
                                <img className='h-[180px] w-[280px] object-cover' src="./public/DDS1.avif" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>Delivery at Door step</p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                       <div className=' w-[280px] h-[300px] bg-white shadow-xl mt-12 hover:scale-105'>
                            <div>
                                <img className='h-[180px] w-[280px] ' src="./public/2hs.jpg" alt="" />
                                <p className=' font-bold text-xl font-serif mt-6 p-0 text-center'>24 Hour Servives</p>
                                <hr className='mt-5' />
                            </div>
                       </div>
                    </div>
                </div>
                {/* SELLABLE AIRLINES */}
                <div className=' mt-28'>
                    <h2 className=' font-semibold text-xl text-center'>Major Sellable Airlines</h2>
                    <div className='flex flex-wrap xl:gap-0 gap-4 justify-center xl:justify-between p-4'>
                        <div className=' shadow-lg p-4 w-[200px]  h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[100px] object-contain' src="./public/Airblue-removebg-preview.png " alt="" />
                        </div>

                        <div className=' shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[100px] object-contain' src="./public/airsial-removebg-preview.png " alt="" />
                        </div>

                        <div className=' shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105' >
                            <img className='w-[150px] xl:ml-8 object-contain' src="./public/British-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[150px] object-contain' src="./public/eithad-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[150px] object-contain' src="./public/gulf-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[150px] object-contain' src="./public/KLM_logo-removebg-preview.png " alt="" />
                        </div>

                        <div className=' shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className=' w-[150px] object-contain' src="./public/Malasyia-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[150px] object-contain' src="./public/Oman-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[100px] mr-5 object-contain' src="./public/PIA-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[130px] ml-4 object-contain' src="./public/qatar-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[100px] object-contain' src="./public/serene-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[150px] mr-6 object-contain' src="./public/sirilankkan-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[150px] object-contain' src="./public/suadia-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[100px] object-contain' src="./public/swiss-removebg-preview.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[150px] object-contain' src="./public/Thai_Airways.png " alt="" />
                        </div>

                        <div className='shadow-lg p-4 w-[200px] h-auto flex justify-center mt-6 hover:scale-105'>
                            <img className='w-[100px] object-contain' src="./public/turkish-removebg-preview.png " alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Deals;