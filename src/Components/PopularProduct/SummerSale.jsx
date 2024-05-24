import React from 'react';
import logo from '../../Images/banneroffer.png'

const SummerSale = () => {
  return (
    <div className='relative flex'>
        <img src={logo} alt="sale.png" className='w-full' />
        <div className='absolute top-32 left-24'>
          <h1 className='text-5xl font-semibold tracking-widest mb-2'>Summer Sale </h1>
          <h1 className='text-4xl font-semibold tracking-wider mb-6'>Men's Adidas Shoes</h1>
          <a href="#" className='bg-black text-white text-xl   px-6 py-2 rounded-full mt-6'>Go To Store</a>
        </div>
    </div>
  )
}

export default SummerSale