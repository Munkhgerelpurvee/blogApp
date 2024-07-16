
"use client";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function Page() {
    return (
       <>
       
       <Navbar />
        <main className="flex flex-col mx-[250px] my-24 gap-8 lg:W-[1200px] m-auto">

          <div>
          <h1 className="mt-3 text-2xl font-bold my-8">Contact Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
  
          </div>
  
          <div className="flex gap-[10px]">
            <div  className="w-[345px] h-[133px]  p-4 border-slate-500 bg-[#D1D5DB]  rounded-md  ">
                  <h1 className="mb-3 font-bold">Address</h1>
                   <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
                        <div className="w-[345px] h-[133px] p-4   border-slate-500  rounded-md bg-[#D1D5DB] ">
                              <h1 className="mb-3 font-bold">Contact</h1>
                                <p>313-332-8662 info@email.com</p>
  
                      </div>
  
          </div>

          <div  className="w-[700px] p-4 border-slate-500 bg-[#D1D5DB]  rounded-md " >
          <h1 className="mt-3 text-2xl font-bold my-8">Leave a Message</h1>
           <div className="flex gap-10 mb-6">
          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-20xl border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Your Name" type="text" name="search"/> 

          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-10xl border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Your Email" type="email"name="search"/> 

           </div>
            
            
          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-full  border border-slate-300 rounded-md py-1 pr-2 shadow-sm sm:text-sm" placeholder="Subject" type="text" name="search"/> 
          <br/>

          <input class="placeholder:italic placeholder:text-slate-400 block bg-[#fff] w-full border border-slate-300 rounded-md p-16 shadow-sm sm:text-sm" placeholder="Write a massage" type="text"/> 
          </div>

        </main>
        <Footer />
       </>
      
);
  }