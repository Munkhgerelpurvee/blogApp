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
      <main className="flex flex-col  mx-24 gap-8  lg:W-[1200px] mb-10 m-auto ">
        <h1 className="mt-3 text-2xl font-bold">Trending</h1>

        

        <div className="grid w-full h-screen grid-cols-1 gap-4 md:grid-cols-4 ">

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

<div>


    <div className="relative" style = {{backgroundColor:"rgba(255, 99, 71, 0.7)"}}>

     <img src={image} alt="image" className="aspect-[2/1] rounded-lg gap-4 object-cover min-h-[450px] min-w-96 -z-20 "
      />
  


     <div className="absolute w-[280px] mx-auto bottom-3 left-8 py-4">

       <div className="bg-[#4B6BFB] py-1 px-[5px] rounded-md z-50 mb-4 flex">
        <p className="text-[#fff] font-medium text-md capitalize text-xs">{tags[0]}</p>
      </div>
  
       <h3 className="flex flex-wrap text-base font-semibold text-[#fff] z-50">{title}</h3>
   

     </div>
     </div>

</div>


    
    


    )
  };
  