import React, { useState } from "react";
import { IoIosCart } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


import "./Navbar.css";

const Navbar = () => {
  const [category, setcategory] = useState(false);

  const openCategories = () => {
    setcategory(!category);
  };

  return (
    <div className="relative">
      <nav className="bg-green-200 flex items-center justify-evenly h-16">
        <h1 className="text-4xl text-black tracking-wider font my-2">
          Ecommerce
        </h1>
        <input
          className="w-[500px] my-1 px-2 focus:outline-0 rounded-lg tracking-widest py-2"
          placeholder="Search Products..."
          type="text"
        />
        <div className="flex gap-x-10">
          <h3  className="cursor-pointer font-medium tracking-wider text-lg hover:text-green-400" >
            Home
          </h3>
          <h3
            className="cursor-pointer font-medium tracking-wider text-lg hover:text-green-400 flex items-center "
            onClick={openCategories}
          >
            Categories
            {
                category ? <MdOutlineKeyboardArrowDown className="text-3xl pt-1"/> : <MdOutlineKeyboardArrowUp className="text-3xl pt-1"/>
            }
          </h3>
          <h1 className="cursor-pointer font-medium tracking-wider text-lg gap-x-1 flex items-center hover:text-green-400">
            {" "}
            <IoIosCart className="text-xl" /> Cart
          </h1>
          <h1 className="cursor-pointer font-medium tracking-wider text-lg gap-x-1 flex items-center hover:text-green-400">
            {" "}
            <MdAccountCircle className="text-xl" /> Account{" "}
          </h1>
        </div>

        {category && (
          <div className="  bg-white absolute w-[600px] justify-center right-[350px] border rounded-lg top-[74px] z-10">
            <TiArrowSortedUp className="absolute bottom-[374.7px] right-4 text-5xl text-green-400" />
            <div className="grid grid-cols-2 gap-10 pl-24  py-10">
              <div>
                <h1 className="text-green-400 font-semibold text-xl">Mens</h1>
                <p>Bottom wear</p>
                <p>Foot wear</p>
                <p>Top wear</p>
                <p>Sports</p>
                <p>Fashion Accessories</p>
              </div>
              <div>
                <h1 className="text-green-400 font-semibold text-xl">Women</h1>
                <p>Western wear</p>
                <p>Indian Wear</p>
                <p>Lingerie & SleepWear</p>
                <p>Beauty & Personal Care</p>
                <p>Jwellery</p>
              </div>
              <div>
                <h1 className="text-green-400 font-semibold text-xl">Kids</h1>
                <p>Toys & Games</p>
                <p>Diaper</p>
                <p>Kaala Teeka</p>
                <p>Lolipop</p>
              </div>
              <div>
                <h1 className="text-green-400 font-semibold text-xl">
                  Electronics
                </h1>
                <p>Mobiles</p>
                <p>Laptops</p>
                <p>SmartWatches</p>
                <p>Airdopes</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
