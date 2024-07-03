import Image from "next/image";
// import { MdFacebook } from "react-icons/md";
// import { FaTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (


<section className="fixed bottom-0 left-0 flex flex-col justify-between p-4 bg-slate-200 lg:flex-row ">


  <div className="flex flex-col justify-between p-4 bg-slate-200 lg:flex-row ">
    <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <span>Email : info@jstemplate.net</span>
      <span>Phone : 880 123 456 789</span>
    </div>

    <div>
    <div className="flex flex-col lg:flex-row">
        <ul className="flex gap-8">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
   
    {/* <div>
    <ul className="flex gap-6">
            <li><MdFacebook /></li>
            <li><FaTwitter /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
          </ul>


    </div> */}
    </div>


  </div>
  <div className="flex flex-col justify-between p-4 bg-slate-200 lg:flex-row ">


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
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

  </div>
       
       
    </section>


  
  );
}
