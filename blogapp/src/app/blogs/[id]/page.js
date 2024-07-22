"use client";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useState, useEffect } from "react";
import Date from "../../../components/Date";





const BlogId = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  if (!blog) return <>Loading</>;

  console.log(blog);

  

  return (
    <>
      <Navbar />

      <main className="flex flex-col mx-[250px] my-24 gap-8 lg:W-[1200px] m-auto">
        {/* <h1>Blog Id</h1>
        <p> Blog Id: {id}</p> */}


        <div>
          <h1 className="my-10 text-2xl font-semibold">{blog.title}</h1>
          <div className="flex gap-5 mb-[80px] items-center text-center">



            <img
            src={blog.user.profile_image}
            alt="image"
            width={70}
            height={0}
            className="object-cover rounded-full "
            />  

          <p className="pt-8 text-gray-500 font-semibold mb-11">{blog.user.twitter_username}</p> 
         
          <div className="text-gray-500 font-semibold pt-8 mb-11">
          <Date  dateString = {blog.published_at}/>

          </div>

          </div>

          <img
            src={blog.cover_image}
            alt="image"
            className="object-cover aspect-[2/1] w-full rounded-lg"
          />
          <br />
          <h1 className="my-10 text-2xl font-semibold">{blog.description}</h1>
          <br />

          <div className="[&>p]:text-md [&>p]:leading-7 [&>p]:mb-4 [&>p]:py-6 [&>h2]:text-2xl [&>h2]:py-4 [&>img]:w-full" dangerouslySetInnerHTML={{ __html: blog.body_html }}></div>
          <br/>
          <br/>
        
          <br />

    
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogId;
