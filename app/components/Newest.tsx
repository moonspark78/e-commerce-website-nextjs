import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Newest = () => {
  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
                    Our Newest products
                </h2>
                <Link className='text-primary flex items-center gap-x-1' href="/all">See All</Link>
                <span>
                    <ArrowRight/>
                </span>
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default Newest