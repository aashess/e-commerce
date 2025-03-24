import React from "react";
import { Search } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#EEEFFB]  text-[#000000] mt-[27rem] py-10">
        <div className="max-w-6xl m-10 mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* <!-- Company Info --> */}

            <div>
              <h2 className="text-2xl font-bold">Hekto</h2>
              <div class="flex items-center border text-sm   border-gray-300 h-8 rounded-lg mt-8  overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="px-4 py-2 w-full "
                />
              <button className=" w-[8rem] bg-red-400 h-full">sign up</button>
              </div>

              <span className="flex items-center text text-[#8A8FB9] mt-2">
                Contact Info
              </span>
              <span className="text-xs  text-[#8A8FB9]">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </span>
            </div>

            {/* <!-- Navigation Links --> */}
            <div>
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="mt-8 space-y-2 text-[#8A8FB9]">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Laptop & Computers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Cameras & Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Smart Phones & Tablets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Vedio Games & Consoles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Waterproof Headphones
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Support --> */}
            <div>
              <h3 className="text-lg font-semibold">Customer Care</h3>
              <ul className="mt-8 space-y-2 text-[#8A8FB9]">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Discount
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Order Tracking
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Social Media --> */}
            <div>
              <h3 className="text-lg font-semibold">Customer Care</h3>
              <ul className="mt-8 space-y-2 text-[#8A8FB9]">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Browse the Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Category
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Pre-Build Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Visual Composer Elements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    WooCommerce Pages
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Copyright Section --> */}

          </div>
        </div>
            <div className="mb-0.5ƒ bg-[#E7E4F8]   border-gray-700 pt-4 text-center text-gray-400">
              © Your Brand. All rights reserved.
            </div>
      </footer>
    </>
  );
}
