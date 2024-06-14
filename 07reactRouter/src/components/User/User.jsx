import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userName} = useParams()
    return (
        <div className="w-full text-center bg-orange-700 text-2xl text-white py-4">
            <h1>User : {userName}</h1>
        </div>
    )
}
export default User;