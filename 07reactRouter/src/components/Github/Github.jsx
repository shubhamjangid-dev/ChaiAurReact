import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github (){
    const data = useLoaderData()

    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then((result)=>{
    //         // console.log(result);
    //         setData(result);
    //     })
    // },[])
    return (
        <div className="w-full text-center text-orange-700 text-2xl">
            <h1 className="p-4">Followers : {data.followers}</h1>
            <img className="rounded-full m-auto justify-center" src={data.avatar_url} width={300}></img>
            <h1 className="p-4">{data.name}</h1>
        </div>
    );
}

// production grade ke hisab se ye loader ko nayi file me likh te h
const githubLoaderInfo = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
export default Github;
export {githubLoaderInfo};