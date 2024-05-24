import React from 'react'

const XclusiveMail = () => {
  return (
    <div className='h-96 bg-gray-200 w-full flex flex-col items-center justify-center'>
        <h1  className='text-4xl font-semibold'>Get Exclusive offers on Your Email</h1>
        
        <h1 className='text-2xl font-medium py-6 '>Subscribe to our NewsLetter And Stay Updated</h1>
        <div className='relative flex'>
            <input type="email" className='border bg-gray-100 w-[500px] py-2.5 rounded-full pl-3 focus:outline-0' placeholder='Your Email Address'/>
            <button className='bg-black text-white px-6 py-2 rounded-full text-xl tracking-wide absolute right-0 bottom-0'>Subscribe</button>
        </div>
    </div>
  )
}

export default XclusiveMail