
"use client";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function Page() {
    return (
       <>
       
       <Navbar />
        <main className="my-24 gap-8 md:min-w-[1200px] mx-24">

          <div>
          <h1 className="my-8 mt-3 text-2xl font-bold mb-8 flex justify-center mx-24 md:max-w-[1200px]">Contact Us</h1>
          <p className="mb-8 mx-24 md:max-w-[1200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
  
          </div>
  
          <div className="gap-[10px] mx-24 md:flex md:min-w-[1200px]">
            <div  className="w-[345px] h-[133px]  p-8 border-2 border-slate-300   rounded-md mb-4  ">
                  <h1 className="mb-3 font-bold">Address</h1>
                   <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
                      <div className="min-w-[345px] min-h-[133px] p-4  border-2 border-slate-300  rounded-md mb-8  ">
                              <h1 className="mb-3 font-bold">Contact</h1>
                                <p>313-332-8662 info@email.com</p>
  
                      </div>
  
          </div>

          <div  className="min-w-[400px] p-4 mx-24 border-slate-500 bg-[#D1D5DB]  rounded-md md:max-w-[700px] mb-10 " >
          <h1 className="my-8 mt-3 text-2xl font-bold">Leave a Message</h1>
           <div className="gap-10 mb-4 md:flex">
          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-full mb-4 md:min-w-20xl border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Your Name" type="text" name="search"/> 

          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-full mb-4 md:min-w-10xl border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Your Email" type="email"name="search"/> 

           </div>
            
            
          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-full  border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Subject" type="text" name="search"/> 
          <br/>

          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-full border border-slate-300 rounded-md p-16 shadow-sm sm:text-sm" placeholder="Write a massage" type="text"/> 

           <button
            className="p-2 w-full md:flex md:w-[130px] md:justify-center bg-[#4B6BFB] mt-3 text-[#fff] text-sm rounded-md">
             Send Message
           </button>

          </div>



        </main>
        <Footer />
       </>
      
);
  }