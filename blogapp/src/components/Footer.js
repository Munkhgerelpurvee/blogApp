import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (

    <main className="fixed bottom-0 left-0  text-[#3B3C4A] justify-between w-full p-2 m-auto bg-slate-100">
      <div className="w-full m-auto lg:[1200px] h-[64px] flex justify-between items-center">


        <div  className="mx-24 hidden lg:block">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={100}
              height={24}
              priority
              
            />

            </div>

            <div className="hidden lg:block">
        <ul className="flex gap-6 ">
          <li>
              <Link href="page.js">Terms of Use |</Link>
          </li>

          <li> 
              <Link href="/posts/first-post/">Privacy Policy |</Link>
          </li>

        <li>
           
            <Link href="https://nextjs.org/">Cookie Policy</Link>
       </li>
          </ul>
        </div>
 
    <div className="">
  
       <ul className="flex gap-6 mx-24 items-center m-auto">

                  <li style={{color:"red"}}>< MdFacebook /></li>
                  <li style={{color:"green"}}><FaTwitter /></li>
                  <li style={{color:"blue"}}><FaInstagram /></li>
                  <li style={{color:"gray"}}><FaLinkedin /></li>
      </ul>

  
        </div> 
      </div>
    </main>



 


  
  );
}
