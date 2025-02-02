"use client"; 
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto'>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
        width={240}
        height={240}
        alt='login'/>
        <p onClick={signIn} className='px-20 py-4 z-10 text-2xl cursor-pointer mt-16 bg-blue-500 rounded-md text-white'>Login</p>
    </div>
  )
}

export default Login