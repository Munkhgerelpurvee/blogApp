"use client";
import Image from "next/image";
// import { IoMdSearch } from "react-icons/io";
// import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  return (
    <main className="flex justify-between p-4 mb-6 bg-slate-200">
        <div className="">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={100}
              height={24}
              priority
            /></div>
        <div className="hidden lg:block">
        <ul className="flex gap-6">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>


        <div className="hidden lg:block">
  
{/* 
  <label class="relative flex imens-center"> */}
  {/* <input class="placeholder:italic placeholder:text-slate-400 block bg-[#D1D5DB] w-full border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Search" type="text" name="search"/> */}
  {/* <div className="absolute pt-2 pl-40"> */}
  {/* < IoMdSearch /> */}
  {/* </div> */}
{/* </label> */}
  
        </div>
        
       {/* <div className="lg:hidden"><IoIosMenu /></div> */}


    </main>

    // min-h-screen 	min-height: 100vh
  );
}
