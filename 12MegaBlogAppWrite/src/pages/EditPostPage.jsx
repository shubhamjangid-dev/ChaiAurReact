import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import PostForm from "../components/postForm/PostForm";
import service from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

function EditPostPage() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      service.getPost(slug).then(post => {
        if (post) setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPostPage;
