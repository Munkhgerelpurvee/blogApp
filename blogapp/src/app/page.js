
"use client";
import Navbar from "../components/Navbar";
import { Container } from "../assets/Container";
// import Footer from "../components/Footer";
import { Slider } from "../components/Slider";
import { Allblog } from "../components/Allblog";
import {useState, useEffect} from "react";

// import Custom404 from "../components/404"
// import { format } from "date-fns";



const getArticle = async () => {
  const response = await fetch("https://dev.to/api/articles");

  const articles = response.json();
  return articles;
};



export default function Home() {

  // const [a, setA] = useState(0);
  const [articles, setArticles] = useState([]);



  const getData = async () => {
    const data = await getArticle();
    setArticles(data);
  }


  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   console.log("Hi");;
  // }, []);
  // console.log(a);


  return (
    <main >
      {/* <button onClick={() => {
        setA(a+1);
      }}>Add button</button> */}

      <div className="">
        <Navbar/>
        {/* <Container background="[#F9FAFB] dark:bg-[#111827]">
          <Footer />
        </Container> */}
        <Container background="bg-[#fff] dark:bg-[#030712]">
          <Slider/>
        </Container>
        <Container background="">
          <Allblog articles={articles}/>
        </Container>  
      </div>


    </main>
  );
};
