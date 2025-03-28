import React from "react";

export default function FeatureProductCard({ name, price, imageUrl }) {
  return (
    <div className="  p-4  shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border flex flex-col   border-gray-100  h-[19rem] w-[15rem]">
      <img
        className=" h-[178px] w-full object-contain rounded-md"
        src={imageUrl}
        alt={name}
      />
      <p className="flex justify-center items-center pt-2.5 text-[#FB2E86]">
        {name}
      </p>
      <p className=" text-[#151875] text-xs flex justify-center items-center">
        Code - Y523201
      </p>
      <p className="text-[#151875] text-xs flex justify-center items-center">
        {price}
      </p>
    </div>
  );
}
