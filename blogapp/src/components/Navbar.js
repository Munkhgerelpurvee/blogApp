"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="flex p-14">
      <div className="w-full max-w-5xl text-sm lg:flex ">
        <div className="fixed top-0 left-0 flex justify-between w-full h-12 lg:static lg:h-auto lg:w-auto ">
          
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={100}
              height={24}
              priority
            />
         
        </div>
        <div className="hidden gap-6 lg:flex">
          <ul className="flex gap-[24px] text-slate-700 dark:text-[#D1D5DB] items-center">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <ul className="flex gap-[24px] justify-center items-center ">
          
            <li className="bg-[#D1D5DB] justify-center items-center rounded-lg w-[104px] h-[24px] text-[10px] ">
              <button className=" placeholder:Search text-slate-900"></button>
            </li>
          </ul>
        </div>
      </div>
    </main>

    // min-h-screen 	min-height: 100vh
  );
}
