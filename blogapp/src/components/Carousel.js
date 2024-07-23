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

  if (!blogs) return <>Loading</>;

  // console.log(blogs);

  return (
    <div className="max-w-3xl mx-auto md:w-[1200px] p-4 ">
      <main className="flex place-items-center mt-[130px] mx-auto max-w-2xl shadow-2xl rounded-2xl ">
        <div
          className={`w-full flex justify-center items-center gap-4  md:rounded-2xl p-6 md:p-0`}
        >
          {blogs.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "flex w-full h-[320px] object-cover"
                  : "hidden"
              }`}
            >
            
              <div
                className="w-full h-[320px] "
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
