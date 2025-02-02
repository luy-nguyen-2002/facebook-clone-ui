"use client";
import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { RiFlag2Line } from "react-icons/ri";
import { IoVideocamOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      <div className="flex min-w-fit">
        <Image
          className="rounded-full"
          alt="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
          width={50}
          height={50}
        />
        {/* create a search bar same as facebook in a div */}
        <div className="flex items-center space-x-2 p-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <IoIosSearch size={25} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search facebook"
          />
        </div>
      </div>

      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoHomeOutline size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiFlag2Line size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoVideocamOutline size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <CiShop size={25} className="mx-auto" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameControllerOutline size={25} className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          alt="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
          src={session?.user.image}
          width={30}
          height={30}
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {session?.user.name}
        </p>
        <CgMenuGridO
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <IoChatbubbleEllipsesOutline
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <FaBell
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <FaChevronDown
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
