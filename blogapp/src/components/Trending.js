import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import Link from "next/link";




export const Trending = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerpage] = useState(4);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dev.to/api/articles?page=10&per_page=4`)
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

        

        <div className="flex justify-between gap-6 ">

        {blogs.map((blog) => {
          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
        
              {/* <div
                className="w-[393px] h-[450px] rounded-md object-cover"
                style={{
                  backgroundImage: `url(${blog.cover_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div> */}

        
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


    <div className="relative">

     <img src={image} alt="image" className="aspect-[2/1] rounded-md gap-4 object-cover h-[450px] w-96 "
      style = {{backgroundColor:"rgba(255, 99, 71, 0.6)"}}/>
  


     <div className="absolute w-[280px] mx-auto  bottom-3 left-2 py-4">

       <div className="bg-[#4B6BFB] py-1 px-[5px] rounded-md w-[80px] z-50 mb-4">
        <p className="text-[#fff] font-medium text-md capitalize text-xs w-1.5">{tags[0]}</p>
      </div>
  
       <h3 className=" text-base font-semibold text-[#fff] z-50">{title}</h3>
   

     </div>
     </div>

</div>


    
    


    )
  };
  