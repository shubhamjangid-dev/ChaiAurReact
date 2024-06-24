import React, { useState, useEffect } from "react";
import service from "../appwrite/config";
import Container from "../components/Container/Container";
import PostCard from "../components/PostCard";

function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts().then(allPosts => {
      if (allPosts) setPosts(allPosts.documents);
    });
  }, []);

  if (posts.length === 0) {
    return <div>No post Found :</div>;
  }
  console.log("posts ", posts);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="w-full flex flex-wrap">
          {posts.map(post => (
            <div
              key={post.$id}
              className="w-full h-1/4 md:w-1/2 lg:w-1/4 p-2"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
