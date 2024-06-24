import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import PostCard from "../components/PostCard";
import service from "../appwrite/config";
import { Query } from "appwrite";
import { useSelector } from "react-redux";
function AllPostPage() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector(state => state.authReducer.userData);
  console.log(userData);
  useEffect(() => {
    service.getPosts([Query.equal("userId", userData.$id)]).then(allPosts => {
      if (allPosts) setPosts(allPosts.documents);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="w-full flex flex-wrap">
          {posts.map(post => (
            <div
              key={post.$id}
              className="w-full md:w-1/2 lg:w-1/4 p-2"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPostPage;
