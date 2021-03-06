import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const date=new Date();
    const year=date.getFullYear();
  return (
    <footer className='w-full flex items-center justify-center h-20 shadow-2xl'>
      <p className='text-sm font-bold '>All rights reserved ©{year}|Made by
      <Link href={"https://twitter.com/iamsidar07"}>
       <span className='cursor-pointer text-red-500'>@Manoj kumar</span>
      </Link>
       ♨️</p>
    </footer>
  )
}

export default Footer
