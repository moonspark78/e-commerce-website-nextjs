"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {ShoppingBag} from "lucide-react"


const links = [
  { name: "Home", href: "/"},
  { name: "Men", href: "/Men"},
  { name: "Women", href: "/Women"},
  { name: "Teens", href: "/Teens"},
]

const Navbar = () => {

  const pathname = usePathname()

  return (
    <header className='mb-8 border-b'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
          <Link href="/">
              <h1 className='text-xl md:text-3xl font-bold'>Next <span className='text-primary'>Commerce</span> </h1>
          </Link>


          <nav className='hidden gap-12 lg:flex'>
            {links.map((link,idx) =>(
              <div key={idx}>
                {pathname === link.href ? (
                    <Link className='text-lg font-semibold text-primary' href={link.href}>
                      {link.name}
                    </Link>
                ):(
                    <Link href={link.href} className='text-lg font-semibold hover:text-primary transition duration-300 text-gray-600'>
                      {link.name}
                    </Link>
                )}
              </div>
            ))}
          </nav>


          <div className='flex divide-x border-r sm:border-l'>
            <Button variant={"outline"} className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 md:h-24 md:w-24 rounded-none'>
              <ShoppingBag/>
              <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
                Cart
              </span>
            </Button>
          </div>
      </div>
    </header>
  )
}

export default Navbar