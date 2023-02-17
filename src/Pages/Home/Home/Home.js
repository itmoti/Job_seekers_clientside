import React, { useState } from 'react';
import './Home.css'

const Home = () => {
   const [jobSeekers, setJobSeekers] = useState(false);
   console.log(jobSeekers)
   
    return (
        <div className='text-center homeCover border border-red-100 flex justify-center items-center   h-[80vh] '>
        
         <div className='flex justify-center flex-col'>
            <div className='mb-0 '>
            <button onClick={()=>setJobSeekers(true)} className={`mr-1 p-3 text-white   bg-[#FFA400] hover:bg-white hover:text-black  ${jobSeekers && 'bg-[#ffffff]  text-black'}`}>Find a Job</button>
            <button onClick={()=>setJobSeekers(false)} className={` p-3 text-white   bg-[#FFA400] hover:bg-white hover:text-black  ${!jobSeekers && 'bg-[#ffffff]  text-black'}`}>Find a Candidate</button>
            </div>
            <br></br>
           {
            jobSeekers ? 
            <div className='bg-white block mt-[-25px] p-5 text-xs after:mr-3'>
            <input type="text" placeholder="eg. Web Developer" className="input input-bordered w-full max-w-[170px] mr-2" />
            <input type="text" placeholder="Catagory" className="input input-bordered w-full max-w-[170px] mr-2" />
            
            <input type="text" placeholder="Location" className="input input-bordered w-full max-w-[170px] mr-2" />
            
            <button className="btn btn-primary text-white">Button</button>
          
            </div>
            : 
            <div className='bg-white block mt-[-25px] p-5 text-xs after:mr-3'>
            <input type="text" placeholder="eg. Motiar Rahman" className="input input-bordered w-full max-w-[170px] mr-2" />
            <input type="text" placeholder="Catagory" className="input input-bordered w-full max-w-[170px] mr-2" />
            
            <input type="text" placeholder="Location" className="input input-bordered w-full max-w-[170px] mr-2" />
            
            <button className="btn btn-primary text-white">Button</button>
          
            </div>
           }
         </div>
         <div>

         </div>

         </div>
       
    );
};

export default Home;