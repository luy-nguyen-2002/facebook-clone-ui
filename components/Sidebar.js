"use client"
import Image from 'next/image'
import React from 'react'
import { ImUsers } from "react-icons/im";
import SidebarItem from './SidebarItem';
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { MdOutlineExpandMore } from "react-icons/md";
import { useSession } from 'next-auth/react';

const Sidebar = () => {
    const { data: session } = useSession();
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
            <Image
                      className="rounded-full cursor-pointer"
                      alt="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
                      src={session?.user.image}
                      width={30}
                      height={30}
                    />
                    <p className='hidden sm:inline-flex font-medium'>{session?.user.name}</p>
        </div>
        <SidebarItem Icon={ImUsers} value="Friends"/>
        <SidebarItem Icon={MdGroups} value="Groups"/>
        <SidebarItem Icon={AiOutlineShop} value="Marketplace"/>
        <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch"/>
        <SidebarItem Icon={BsStopwatch} value="Memories"/>
        <SidebarItem Icon={MdOutlineExpandMore} value="See More"/>
    </div>
  )
}

export default Sidebar