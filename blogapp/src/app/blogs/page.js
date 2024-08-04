"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Container } from "../../components/Container";
import Date from "../../components/Date";

const pageSize = 6;
export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    LoadMore();
  }, []);

  function LoadMore() {
    fetch(
      `https://dev.to/api/articles?username=bigsondev&page=${page}&per_page=${pageSize}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Өмнөх дээрээ залгаж байна
        const newBlogs = blogs.concat(data);
        setBlogs(newBlogs);
        setPage(page + 1);
        if (data.length < pageSize) {
          setEnded(true);
        }
      });
  }

  return (
    <>
      <Navbar />

      <Container>
        <div className="w-full px-4 h-fit">
          <div className="flex flex-col justify-center w-full gap-y-10 h-fit">
            <h1 className="px-4 mx-24 mt-24 text-2xl font-bold">
              All blog post
            </h1>

            <div className="grid  mx-24  items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* {
        art.map((item, index) => ( 
          <div key={index}>{item.title}</div>
          ))
        } */}

              {blogs.map((el, id) => {
                return (
                  <Link key={el.id} href={`/blogs/${el.id}`}>
                    <div className="p-4 mb-2 rounded-lg shadow-lg bg-slate-700 w-80 ">
                      <Image src={el.social_image} width={500} height={500} />
                      <div className="flex">
                        <div className="px-2 my-2 bg-blue-400 rounded-xl">
                          {el.tag_list[0]}
                        </div>
                      </div>
                      <Link
                        href={el.url}
                        target="_blank"
                        key={el.id}
                        className=" text-[#fff]"
                      >
                        {el.title}
                      </Link>

                      <div className="flex gap-2 items-center mt-4 text-[#fff]">
                        
                        <Image
                          src={el.user.profile_image_90}
                          width={30}
                          height={50}
                        />
                        <div className="text-[10px]">{el.user.name}</div>
                        <Date  className = " flex text-[5px]" dateString={el.published_at}/>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* Хэрвээ төгссөн байх юм бол энэ товч харагдахаа болино */}
            {!ended && (
              <div className="mt-6 text-center " onClick={LoadMore}>
                <button className="m-auto W-[200px] py-2 px-5 mb-[150px] bg-[#4B6BFB] text-slate-700 rounded-md">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
