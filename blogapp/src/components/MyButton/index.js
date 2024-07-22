
import React, {useState}  from "react";

export const Mybutton = (props) => {

    const [count, setCount]=useState(0);
    const [commentHistory, setCommentHistory] = useState([]);


    // const clickHandler = (k) => alert(`Коммент орж ирлээ:  ${k}`);
    const clickHandler= () =>  {
        setCount(count+1);
        // alert('Коммент бичигдлээ:'  + props.comment);
        setCommentHistory([...commentHistory, props.comment]);
    }

    

    return (
        <div className=" flex flex-col w-[1000px] justify-center bg-[#bdaeae] py-4 m-auto items-center" >

            <p className="text-center text-[#da60a7] mb-4">{props.btnName ? props.btnName : "Нэргүй товч" }</p>
            {/* <p className="mb-4">{`Өнөөдөр : ${new Date()}`}</p> */}
        < input className=" flex w-[150px] h-10 text-xs justify-center items-center bg-slate-200 text-center rounded-md" 
        type = "button"  
        value ={props.btnText ? count + ')' +  props.btnText : "Намайг клик хийгээрэй" }
        // onClick = {() => clickHandler(props.comment)}
        onClick = {clickHandler}

        />

        <div>
            {commentHistory.map((el, index)=> (
                <div key={index}>{el}</div>
            ))}
        </div>


        </div>
        
        
        

    )

        

}
