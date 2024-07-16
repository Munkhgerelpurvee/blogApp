"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BlogCard } from "../../components/BlogCard";



export default function Page() {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        const getData = async () => {
            try{
                const res = await fetch(`https://dev.to/api/articles`);
                const data = await res.json();
                setBlogs(data);

            } catch(error){
                console.log(error);
            }
        };

        getData();

    }, []);




    return (<>

    <Navbar/>

    <main className="flex flex-col mx-[100px] my-14 gap-8 lg:W-[1200px] m-auto">
        <div className="grid w-full grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.id}`}>
                  <BlogCard
                         key={blog.title}
                         image={blog.social_image}
                         title={blog.title}
                         date={blog.published_at}
                         tags={blog.tag_list}
                   />
                
                </Link>


            ))}


        </div>



    </main>

    <div>Blogs page</div>
    <Footer />
    
    
    </>)
}