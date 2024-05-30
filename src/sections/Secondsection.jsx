import React from 'react'
import dots from '../assets/icon/dots.svg'
import hand from '../assets/icon/hand.svg'
import { Button } from '@material-tailwind/react';

function Secondsection() {
  return (
    <div>
        <div>
            <div className='flex flex-col justify-center items-center'> 
                <img src={dots} alt="" />
            </div>
            <div className='flex justify-center items-center mt-8'>
              <img src={hand} alt="" width={78} height={112} className='hidden lg:block'/>
              <h1 className='text-4xl md:text-6xl font-bold font-work text-gray-800 leading-[1.1] md:leading-[1.1] mb-6 max-w-3xl text-center px-4'>Beautify your designs with Notioly</h1>
              <img src={hand} alt="" className='scale-x-[-1] hidden lg:block ' width={78} height={48}/>
            </div>
            <div className='flex justify-center'>
              <p className='font-pop text-[#655956] text-lg max-w-3xl text-center mt-4 md:mt-4 px-4'>You will get access to more than 400 high-resolution SVG illustrations along with additional designs I will release each month.</p>
            </div>
            <div>
            <div className='flex justify-center my-16'>
              <Button className='font-bold capitalize text-sm md:text-lg'>Buy Notioly - $39</Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Secondsection