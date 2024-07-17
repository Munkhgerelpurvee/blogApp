import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import Link from "next/link";




export const Trending = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerpage] = useState(4);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dev.to/api/articles?page=1&per_page=4`)
      .then((resourse) => resourse.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  if (!blogs) return <>Loading</>;
  console.log(blogs);


  


    return (
      <div className="flex flex-col m-auto w-full mb-10 max-w-[1200px]">
        <h1 className="mb-10 text-2xl font-bold">Trending</h1>

        <div className="grid grid-cols-4 gap-6 w-fill">

        {blogs.map((blog) => {
          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
        
              <div
                className="w-[263px] h-[320px] rounded-md"
                style={{
                  backgroundImage: `url(${blog.cover_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            
            </Link>
          );
        })}
      </div>



        
  
      </div>
    );
  };
  




  

  const TrendingCard = ({ title, tags }) => {
    
    return (

    <>

     <div className="bg-gray-200 py-1 px-[10px] rounded-md">
      <p className="text-[#4B6BFB] font-medium text-md capitalize">{tags}</p>
    </div>

     <h3 className="text-2xl font-semibold">{title}</h3>
 
    
    </>


    )
  };
  