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
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>




// import Custom404 from "../components/404"
// import { format } from "date-fns";



export default function Home() {
  // const [a, setA] = useState(0);
  const [data, setData] = useState([]);
  
  
  
  useEffect(() => {
    const getData = async () => {
      try {
  
        const res = await fetch ('http://localhost:3001/');
        const data = await res.json();
        
        console.log(data);
        
        setData(data);
  
      } catch (error) {
        console.log(console.log(error));
      }
      
    }

    getData();
  
  }, []);


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
      
      <div className="w-full bg-pink-400">

        {data.map((elem) => (
            <div key={elem.id} >

              <h1>{elem.title}</h1>
              <p>{elem.desc}</p>

              <div
                className="w-[250px] h-[300px] rounded-lg"
                style={{
                  backgroundImage: `url(${elem.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
      
            </div>
          ))}

          </div>

   
        
     

    </>
  );
}
