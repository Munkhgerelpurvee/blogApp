"use client";
import Navbar from "../components/Navbar";
import { Container } from "../assets/Container";
import Footer from "../components/Footer";

import { Allblog } from "../components/Allblog";
import { useState, useEffect } from "react";
import { Trending } from "../components/Trending"
import { Carousel} from "../components/Carousel"
import { Mybutton } from "../components/MyButton";
import {Comment} from "../components/Comment";




// import Custom404 from "../components/404"
// import { format } from "date-fns";

export default function Home() {
  // const [a, setA] = useState(0);

  return (
    <>
  

      {/* <button
        className="p-2 text-white bg-red-500 rounded-md"
        onClick={() => {
          setA(a + 1);
        }}
      >
        Add button
      </button> */}
      <Navbar />
      <Carousel/>
      <Trending/>
      {/* <Comment zohiogch = "Сараа"/> */}
      {/* <Comment zohiogch = "Идэрбат"/> */}
    
       {/* <Container background="[#ccc]"> */}
        {/* <Mybutton btnName = "Миний товч" btnText = "Click!"/>  */}
        <br/>
        {/* <Mybutton btnName = "ЛАЙТАЙ ГОЁ товч" btnText = "Click Here"/> */}
        <br/>
        {/* <Mybutton/> */}
       {/* </Container> */}
      <Container background="red">
      <Allblog />
      </Container>
      <Footer />
        
     

    </>
  );
}
