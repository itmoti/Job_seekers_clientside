import React from 'react';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { CiGps } from 'react-icons/ci';

const FreshersJob = () => {
    return (
        <div className='text-center mt-[20px] text-black lg:w-[820px] mx-auto'>
            <h1 className='text-3xl'>Freshers Job</h1>
            <div>


                <button>Apply</button>
                <div className=" w-96   text-black bg-white p-4 text-lg">
                    <div className="p-3 flex justify-between items-center">
                        <div className='text-left' >
                        <h2 className='text-2xl mb-2 text-' >Senior Webdeveloper</h2>
                       <div className='flex'> <h3 className='mr-4 flex items-center'><CiGps/>Dhaka</h3>
                        <h3 className='flex items-center'><BsFillCalendarEventFill/> Interfare.com</h3></div>
                        </div>
                        <div >
                            <button className="btn text-blue-500 hover:text-white hover:bg-blue-500">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreshersJob;