import React from 'react'
import FeatureProductCard from './FeatureProductCard';
import { products } from '@/util/constant';
import LatestProductCard from './LatestProductCard';

export default function LatestProduct() {
  return (
    <>
      <div className=" w-screen h-screen bg-white">
        <span className="flex font-josefin justify-center items-center text-3xl text-[#1A0B5B] font-semibold mt-4 pt-5 ">
          Latest Products
        </span>
        <div className='flex justify-center items-center gap-7 pt-2 text-xs text-[#1A0B5B]'>
        <span><button className=' cursor-pointer text-[#FB2E86]'>New Arrival</button></span>
        <span><button className=' cursor-pointer'>Best Seller</button></span>
        <span><button className=' cursor-pointer'>Featured</button></span>
        <span><button className=' cursor-pointer'>Special Offer</button></span>
        </div>

        <div className="flex items-center justify-center mt-10">
          
          <div className="grid grid-cols-3 gap-4">
            {products.slice(0, 6).map((product) => {
              return (
                <LatestProductCard
                  key={product.name}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              );
            })}
          </div>
          
        </div>
      </div>
    </>
  )
}
