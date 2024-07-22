import { useEffect, useState } from "react";
import { BlogCard } from "./BlogCard";
import Link from "next/link";


const categories = [
  "All",
  "git",
  "welcome",
  "ai",
  "nextjs",
  "news",
];

export const Allblog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const [category, setCategoty] = useState("All");
  const [perPage, setPerpage] = useState(9);

  const handleCategoty = (category) => {
    setCategoty(category);
    setPerpage(9);
  };

  const handleLoadMore = () => {
    setPerpage(perPage + 3);
  };

  // Ask this???


  // 

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://dev.to/api/articles?page=1&per_page=${perPage}
       ${category !== "All" ? `&tag=${category}` : ""}`
    )
      .then((resourse) => resourse.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [perPage, category]);


  

  return (
    <div className="flex flex-col mx-24 gap-8 md:W-[1200px] m-auto md:flex-col ">
      <h1 className="mt-3 text-2xl font-bold">All blog post</h1>
      
      <div className="flex justify-between">

      <div className="flex gap-3 flex-wrap">
        
        {categories.map((item, index) => (
          <button
            className="px-2 py-1 bg-gray-300 rounded-md"
            style={{ color: category === item ? "#4B6BFB" : "" }}
    
            key={index}
            onClick={() => handleCategoty(item)}
          >
          
            {item}
          </button>)
        )}
      </div>

      <div className="hidden md:block">
        
        <Link href={`/blogs/`}>
        View All
        </Link>
        
        </div>

      </div>


      <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
            
            <BlogCard
              key={blog.title}
              image={blog.social_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
            />
            
            </Link>
          );
        })}
      </div>
      
      <button
        className="m-auto W-[200px] py-2 px-5 mb-[150px] bg-[#4B6BFB] text-slate-700 rounded-md"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading ...</p> : <p>Load More</p>}
      </button>

  
    </div>
  );
};
