const dateFns = require("date-fns");
import Date from "./Date";


export const BlogCard = ({ image, title, date, tags }) => {
  

  // console.log("Image", image);
  // console.log("Where is tag", tags);
  // console.log("Where is date", date);
  // console.log("Where is title", title);
  
  return (
    <div className="flex flex-col w-full gap-4 p-4 bg-white border rounded-md">
      <img src={image} alt="image" className="aspect-[2/1] w-full rounded-md" />

      <div className="flex flex-col gap-4 py-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((mapedtag, index) => (
            <BlogTag key={index} itemtag={mapedtag} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold">{title}</h3>
    
        <div className="text-gray-500 font-semibold">
        <Date  dateString = {date}/>

        </div>
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
