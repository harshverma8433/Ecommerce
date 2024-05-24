import React from 'react';
import Product from '../PopularProduct/Product';
import Data from './Data';

const LatestProduct = () => {
  return (
    <>
        <div className='flex items-center flex-col mt-16'>
            <h1 className='text-4xl font-semibold pb-6'>LATEEST PRODUCTS</h1>
            <div className='w-96 border-double border-s-8 h-1  border-x-green-500 border-x-8  bg-green-300'/>
        </div>
       
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">

        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {Data.map((product) => (
            <Product product={product}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default LatestProduct