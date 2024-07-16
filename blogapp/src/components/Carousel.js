import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";

export const Carousel = () => {

  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

 

    return (
     <div className="">

       <main className="flex place-items-center w-full mt-[60px] mx-auto max-w-2xl shadow-2xl rounded-2xl">
       <div
         className={`w-full flex justify-center items-center gap-4  md:rounded-2xl p-6 md:p-0`}
       >
         {images.map((elem, idx) => (
           <div
             key={idx}
             className={`${
               idx === activeImage
                 ? "flex w-full h-[60vh] object-cover"
                 : "hidden"
             }`}
           >
             <Image
               src={elem.src}
               alt=""
               width={100}
               height={100}
               className="w-full object-cover rounded-lg mt-8 "
             />
           </div>
         ))}
       </div>
     </main>

       <div>
      <Description
        // activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
       </div>
     </div>
    );
  };