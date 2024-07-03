



export const BlogCard = ( { cover, tag,  desc, date } ) => {
    
  
    return (
      <div className="flex text-[gray] w-[400px] h-[400px]">
        <div>WORLD CUP</div>

        <img src={cover}></img>
  
        
        <div>{desc}</div>
        <div>{tag}</div>
        <div>{date}</div>
      </div>
    );
  };
  