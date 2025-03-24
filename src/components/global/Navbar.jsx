import { ChevronDown, Heart, PhoneCall, User, Search } from "lucide-react";

import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="h-[2rem] w-full bg-violet-700 text-white text-sm flex items-center justify-center px-12">
        <div className=" flex justify-between w-[70rem] ">
          <div className="flex gap-8">
            <span> mhhasanul@gmail.com </span>
            <span>
              <PhoneCall className="size-4" />
            </span>
          </div>
          <div className="flex gap-4">
            <button className="flex gap-0.5 cursor-pointer">
              <span>English</span> <ChevronDown className=" size-4" />
            </button>
            <button className="flex gap-0.5 cursor-pointer">
              <span>USD</span>
              <ChevronDown className=" size-4" />
            </button>
            <button className="flex gap-1 cursor-pointer">
              <span>Login</span>
              <User className=" size-4" />
            </button>
            <button className="flex gap-1 cursor-pointer">
              <span>Wishlist</span>
              <Heart className=" size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[3.5rem] w-full   text-sm flex items-center justify-center px-12">
        <div className=" flex justify-between w-[70rem]  ">
          <div className="flex text-black gap-10">
            <button className="font-bold  text-[#0D0E43] font-serif text-2xl">
              <span> Hekto </span>
            </button>
            <button className="gap-0.5 pt-2 text-[#FB2E86] flex cursor-pointer">
              <span>Home</span>
              <ChevronDown className=" size-4" />
            </button>

            <button className=" cursor-pointer text-[#0D0E43]">
              <span>Pages</span>
            </button>
            <button className=" cursor-pointer text-[#0D0E43]">
              <span>Products</span>
            </button>
            <button className=" text-[#0D0E43] cursor-pointer">
              <span>Blogs</span>
            </button>

            <button className=" text-[#0D0E43] cursor-pointer">
              <span>Shop</span>
            </button>

            <button className=" text-[#0D0E43] cursor-pointer">
              <span>Contact</span>
            </button>

            </div>
            <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden h-8">
              <input
                type="text"
                placeholder="Search..."
                class="px-4 py-2 w-64 focus:outline-none"
              />
              <button class="bg-[#FB2E86] text-white px-4 py-2 hover:bg-blue-600">
                <Search />
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
}
