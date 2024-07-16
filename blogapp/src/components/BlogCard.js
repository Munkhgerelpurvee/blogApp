

export const BlogCard = ({ image, title, date, tags }) => {

  // console.log("Image", image);
  // console.log("Where is tag", tags);
  // console.log("Where is date", date);
  // console.log("Where is title", title);
  
  return (
    <div className="border p-4 flex flex-col gap-4 w-full rounded-md bg-white">
      <img src={image} alt="image" className="aspect-[2/1] w-full rounded-md" />

      <div className="py-2 flex flex-col gap-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map((mapedtag, index) => (
            <BlogTag key={index} itemtag={mapedtag} />
          ))}
        </div>

        <h3 className="font-semibold text-2xl">{title}</h3>

        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

const BlogTag = ({ itemtag }) => {
  return (
    <div className="bg-gray-200 py-1 px-[10px] rounded-md">
      <p className="text-[#4B6BFB] font-medium text-md capitalize">{itemtag}</p>
    </div>
  );
};
