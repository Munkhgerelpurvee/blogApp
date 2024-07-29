"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";



const pageSize = 6;
export default function BlogPage() {

    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [ended, setEnded] = useState(false);


    useEffect(() => {
       
        LoadMore ()
    }, []);



 function LoadMore () {


         fetch(`https://dev.to/api/articles?username=bigsondev&page=${page}&per_page=${pageSize}`)
             .then((res) => {
               return res.json()
            })
             .then((data) => {
                // Өмнөх дээрээ залгаж байна
              const newBlogs = blogs.concat(data);
              setBlogs(newBlogs);
              setPage(page + 1);
              if(data.length < pageSize) {
                setEnded(true);
              }
            
             });
          
    };
        
    

    return (<>

    <Navbar/>
    <h1 className="mt-24 text-2xl font-bold p-4 mx-24">All blog post</h1>
    <div className="container bg-yellow-500 mx-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
       
        {/* {
        art.map((item, index) => ( 
          <div key={index}>{item.title}</div>
          ))
        } */}
  
        {
  
          blogs.map((el, id) => {
            return(

                <Link key={el.id} href={`/blogs/${el.id}`}>
              <div className="bg-slate-700 w-80 shadow-lg rounded-lg mb-2 p-4 ">
            <Image src={el.social_image} width={500} height={500} />
            <div className="flex">
                <div className="bg-blue-400 rounded-xl px-2 my-2">{el.tag_list[0]}</div>

            </div>
              <Link href={el.url} target="_blank" key={el.id} className=" text-[#fff]">
                {el.title}</Link>

              <div className="flex gap-2 items-center mt-4 text-[#fff]">
                <Image src={el.user.profile_image_90} width={30} height={50}/>
                <div>{el.user.name}</div>
                <div>{el.published_at}</div>

              </div>
              </div>
              </Link>
  
            )
          })
        }
  
       
      
      </div>
      {/* Хэрвээ төгссөн байх юм бол энэ товч харагдахаа болино */}
      {
      !ended && (
      <div className="text-center mt-6"   onClick={LoadMore} >
      <button
        className="m-auto W-[200px] py-2 px-5 mb-[150px] bg-[#4B6BFB] text-slate-700 rounded-md"
      >
        Load More
      </button>
      </div>

        )
      }

  

    </div>
    

    <Footer />
    
    </>)
}

    