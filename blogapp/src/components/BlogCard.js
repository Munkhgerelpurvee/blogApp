
export const BlogCard = ( { cover, tag,  desc, date } ) => {
    
  
    return (
      <main className="flex text-[gray] w-[400px] h-[400px] ">
        <div className="wrapper">
        
      
        <pre className="flex mt-8">
            <img
            src={"hhttps://dev.to/api/articles"}
            className="rounded mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
            <pre className="font-bold mb-1">
                {tag}
                Амар Өсөхбаяр
            </pre>
      </pre>
         <div>
            <div className="card-date">{date}</div>
          </div>

        <img src={cover} className="rounded py-4"></img>
        <div>{desc}</div>
        
        </div>
      </main>
    );
  };
  