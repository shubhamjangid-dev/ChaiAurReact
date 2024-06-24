import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredimage }) {
  console.log(service.getFilePreview(featuredimage));
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            className="rounded-xl"
            src={service.getFilePreview(featuredimage)}
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
