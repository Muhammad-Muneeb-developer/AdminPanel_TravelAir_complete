import React from 'react';

function Footer(props) {
    return (
        <div>
            {/* FOOTER SECTION */}
            <div className='w-full h-auto bg-slate-900 mt-32 md:p-4'>
                <div className='xl:flex  xl:justify-around  md:flex md:flex-wrap  md:justify-around'>
                    <div className='xl:mt-8 xl:text-start md:text-start text-center'>
                        <p className='text-white xl:p-0 p-6 m-6 xl:mt-0 md:mt-0 mt-10'>Follow us here</p>
                        <div className='address-section mt-10'>
                            <p className='text-white'>Address</p>
                            <div>
                                <p className='text-white'>office No 10, Block 51</p>
                            </div>
                            <div>
                                <p className='text-white'>Chaudray plaza, jinnah Avenue, Blue Area</p>
                            </div>
                            <div>
                                <p className='text-white'>Islamabad</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='text-white'>Phone 051-2274080 /  2274341</p>
                        </div>
                        <div className="xl:w-full w-auto h-[200px] mt-4">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.417924882525!2d73.0819637!3d33.7240077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf81873bd0d1%3A0xc4db2246f35913dd!2s5%20Jinnah%20Ave%2C%20F-6%2F4%20F%206%2F4%20Blue%20Area%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1723950270211!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className='service-section mt-16 xl:flex flex flex-wrap justify-center gap-10  xl:gap-40'>

                        <ol className="list-disc mb-4 text-white xl:mt-7 md:mt-7">
                            <p className='text-white'>Services</p>
                            <li>Airline Reservations</li>
                            <li>Ticketing of all the major airlines.</li>
                            <li> Worldwide Hotel accommodations</li>
                            <li>Tour packages & Car rentals</li>
                            <li> Visa assistance</li>
                            <li> Travel Insurance</li>
                        </ol>
                        <div className=" xl:mt-10 md:mt-10 ">
                            <div>
                                <ol className="list-disc mb-4 xl:mr-0 mr-10 text-white">
                                    <li>Ticket delivery at door step</li>
                                    <li>24 hours answering capability</li>
                                    <li>Visa/ Master Card acceptance</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='text-white text-center'>Powered By Structres ltd @2024</p>
                </div>
            </div>
            <div className=' fixed  bottom-0 flex justify-end p-4 left-0 right-0'>
              <img className=' w-[80px] object-cover' src="./public/what1-removebg-preview.png" alt="" />
            </div>
        </div>
    );
}

export default Footer;