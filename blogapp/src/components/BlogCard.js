
export const BlogCard = ( { image, title, tags, date } ) => {
    
  
    return (
      <main className="flex flex-col w-full gap-5 p-4 border rounded-md ">
         <div>

          <img
            className = "flex flex-col py-2"
            src={image}
            alt="image"
          />
          
          
            <div className="flex flex-col gap-4 py-2">
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => {

                  <BloaTag key={tag} tag={tag}/>
                }
                
              )

                }
              </div>
            </div>

             <h3 className="text-2xl font-font-semibold">{title}</h3>
             <div className="text-gray-400">{date}</div>

         </div>
        
      </main>
        );
    };
  

  const BlogTag = ({tag}) => {
    return (

      <div className="bg-[#4b6bfb0b] py-1 px-4 rounded-md ">
        <p className="text-[4B6BFB] font-medium text-md capitalize"> {tag} </p>

      </div>
    )
  }