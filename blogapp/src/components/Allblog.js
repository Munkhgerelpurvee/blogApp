import { useEffect, useState } from "react";

import { BlogCard } from "./BlogCard";

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

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://dev.to/api/articles?page=1&per_page=${perPage}
       ${category !== "All" ? `&tag=${category}` : ""}`
    )
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [perPage, category]);


  

  return (
    <div className="flex flex-col w-full gap-8 lg:W-[1200px] m-auto">
      <h1 className="mt-3 text-2xl font-bold">All blog post</h1>
      <div className="flex gap-6 px-4">
        
        {categories.map((item) => (
          <button
            className="px-2 py-1 rounded-sm bg-slate -300"
            style={{ color: category == item ? "#4B6BFB" : "" }}
            
            key={item}
            onClick={() => handleCategoty(item)}
          >
          
            {item}
          </button>)
        )}
      </div>


      <div className="grid grid-cols-3 gap-6 w-fill">
        {blogs.map((blog) => {
          return (
            <BlogCard
              key={blog.title}
              image={blog.social_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
            />
          );
        })}
      </div>
      
      <button
        className="m-auto W-[200px] py-2 px-5 bg-[#4B6BFB] text-slate-700 rounded-md"
        onClick={handleLoadMore}
      >
        {loading ? <p>Loading ...</p> : <p>Load More</p>}
      </button>

      
      {/* 
  <div className="flex flex-col p-4 gap4">

{
    articles.map((item, index) => {
     return(
        <>
            <BlogCard
            cover={item.cover_image}
            tag={item.tags}
            desc={item.description}
            date={item.published_at}
            />
        </>
         
     );
 
    })
}

</div> */}
    </div>
  );
};
