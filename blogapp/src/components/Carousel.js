import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";

export const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const clickNext = () => {
    activeImage === blogs.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(blogs.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    setLoading(true);

    fetch(`https://dev.to/api/articles?page=1&per_page=20`)
      .then((resourse) => resourse.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(blogs);

  return (
    <div className="">
      <main className="flex place-items-center w-full mt-[130px] mx-auto max-w-2xl shadow-2xl rounded-2xl">
        <div
          className={`w-full flex justify-center items-center gap-4  md:rounded-2xl p-6 md:p-0`}
        >
          {blogs.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "flex w-10xl h-[50vh] object-cover"
                  : "hidden"
              }`}
            >
              {/* <Image
               src={elem.cover_image}
               alt=""
               width={100}
               height={100}
               className="object-cover w-full mt-8 rounded-lg "
             /> */}
              <div
                className="w-[570px] h-[570px]"
                style={{
                  backgroundImage: `url(${elem.cover_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ))}
        </div>
      </main>

      <div>
        <Description
          // activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </div>
  );
};
