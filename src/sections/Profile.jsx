import React from 'react'
import { Avatar } from "@material-tailwind/react";
import profile from '../assets/png/profile.jpg'
import lines from '../assets/icon/lines.svg'


function Profile() {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-x-4 rotate-[-6deg]'>
                <div>
                    <Avatar src={profile} size='sm'/>
                </div>
                <a href="https://www.instagram.com/yaa.itz_saiil/" target="_blank" className='font-pop font-semibold underline'>Sahilllll Sonar</a>
                <img src={lines} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Profile