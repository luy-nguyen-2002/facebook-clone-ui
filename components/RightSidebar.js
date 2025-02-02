import React from 'react'
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='flex space-x-1 px-2'>
                    <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                        <RiVideoAddFill className='text-2xl' />
                    </div>
                    <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                        <BiSearch className='text-2xl' />
                    </div>
                    <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                        <CgMoreAlt className='text-2xl' />
                    </div>
                </div>
            </div>
        </div>
        <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png" name="Luy Nguyen" status="Online"/>
        <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png" name="Kaden Jorhn" status="Offline"/>
        <Contacts src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png" name="Joe Biden" status="Online"/>
    </div>
  )
}

export default RightSidebar