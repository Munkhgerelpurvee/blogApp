"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


const SinglePost = () => {
    const params = useSearchParams();
    console.log(params.get("id"));




    return (

        <>
        
        <div>Hello single post</div>
        
        </>
    )
}

export default SinglePost;
