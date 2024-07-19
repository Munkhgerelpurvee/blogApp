"use client";
import { useParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useState, useEffect } from "react";
import { BlogCard } from "../../../components/BlogCard";
import Image from "next/image";





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

          <p className="pt-6 text-gray-500 mb-11">{blog.user.twitter_username}</p> 
          <p className="pt-6 text-gray-500 mb-11">{blog.published_at}</p> 

          </div>

          <img
            src={blog.cover_image}
            alt="image"
            className="object-cover aspect-[2/1] w-full rounded-lg"
          />
          <br />
          <h1 className="my-10 text-2xl font-semibold">{blog.description}</h1>
          <br />

          <div className="[&>p]:text-md [&>p]:leading-7 [&>p]:py-4 [&>h2]:text-2xl [&>h2]:py-4 [&>img]:w-full" dangerouslySetInnerHTML={{ __html: blog.body_html }}></div>
          <br/>
          <br/>
          {/* <div> dangerouslySetInnerHTML={{ __html: blog.body_markdown }}</div> */}
          <br />

    
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogId;
