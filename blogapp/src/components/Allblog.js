import { BlogCard } from "./BlogCard";

export const Allblog = ({articles}) => {
    return (
      
<div>

  <div className="gap-8 px-4">
    <h1>All blog post mt-4</h1>
    <ul className="flex gap-6 mt-4">
            <li className="text-xs font-bold">All</li>
            <li className="text-xs font-bold">Design</li>
            <li className="text-xs font-bold">Travel</li>
            <li className="text-xs font-bold">Technology</li>
            <li className="text-xs font-bold">Blog</li>
            <li className="text-xs font-bold">Branding</li>
          </ul>
      
  </div>

  <div className="flex flex-col p-4 gap4">

{
    articles.map((item, index) => {
     return(
        <>
            <BlogCard
            cover={item.cover_image}
            tag={item.tag}
            desc={item.description}
            date={item.published_at}
            />
        </>
         
     );
 
    })
}

</div>
</div>
)
};



  