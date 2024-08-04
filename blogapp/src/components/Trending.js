import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import Link from "next/link";




export const Trending = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerpage] = useState(4);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dev.to/api/articles?page=4&per_page=4`)
      .then((resourse) => resourse.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  if (!blogs) return <>Loading</>;
  console.log(blogs);


  


    return (
      <main className="flex flex-col mx-24 gap-8 md:W-[1200px] m-auto md:flex-col ">
        <h1 className="mt-3 text-2xl font-bold">Trending</h1>

        

        <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 mx-auto lg:grid-cols-4">

        {blogs.map((blog) => {
          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>

                 <TrendingCard
                  title = {blog.title}
                  tags = {blog.tag_list}
                  image={blog.social_image}/>
        
            </Link>

          );
        })}

        
        </div >
      </main>
         
    );
  };
  

  const TrendingCard = ({ title, tags, image}) => {
    
    return (

<div className=" relative flex flex-col max-w-[273px] min-h-[320px]  justify-end rounded-xl bg-[#141624] bg-opacity-40 object-cover">



     <img src={image} alt="image" className="absolute top-0 left-0 max-w-[273px] min-h-[320px] -z-10 rounded-xl"
      />
  


     <div className="px-8 pb-7 rounded-2xl flex flex-col gap-3">
         <div className="flex">
        <div className="bg-blue-700 text-[#fff] leading-7 font-medium px-3 py-1 rounded-lg">{tags[0]}</div>
         </div>
     
  
       <h3 className="text-[#fff] leading-7 font-semibold">{title}</h3>
   

     </div>
     </div>



    
    


    )
  };
  