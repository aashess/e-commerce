import React, { useState } from "react";
import { products } from "../../../util/constant";


import FeatureProductCard from "./FeatureProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FeaturedProduct() {
  const [startingIndex, setStartingIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const handlePrev = () => {
    if (startingIndex == 0) {
      return
    }
      setStartingIndex((prev) => prev - 1);
      setEndIndex((prev) => prev - 1);

  };
  const handleNext = () => {
    
    
    if (endIndex == products.length) {

      return
    }
    setEndIndex((prev) => prev + 1);
    setStartingIndex((prev) => prev + 1);
  };

  return (
    <>
      <div className=" w-screen h-[450px] bg-white">
        <span className="flex font-josefin justify-center items-center text-3xl text-[#1A0B5B] font-semibold mt-4 pt-5 ">
          Featured Products
        </span>

        <div className="flex items-center justify-center mt-10">
          <button className=" cursor-pointer" onClick={handlePrev}>
            <ArrowLeft className=" size-10 text-[#FB2E86]"/>
          </button>
          <div className="grid grid-cols-4 gap-4">
            {products.slice(startingIndex, endIndex).map((product) => {
              return (
                <FeatureProductCard
                  key={product.name}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              );
            })}
          </div>
          <button className="cursor-pointer" onClick={handleNext}>
          <ArrowRight  className=" size-10 text-[#FB2E86]"/>
          </button>
        </div>
      </div>
    </>
  );
}
