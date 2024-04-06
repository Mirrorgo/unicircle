"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { PostHeader } from "../../../components/PostHead/PostHead";
import { ImageCarousel } from "../../../components/ImageCarousel/ImageCarousel";
import { CommentSection } from "../../../components/CommentSection/CommentSection";
import PostContent from "@/app/components/PostContent/PostContent";
import { useSearchParams } from "next/navigation";
import { Post, queryPostDetail, queryPostsList } from "@/service/posts";

function PostDetailPage({ params }: { params: { postId: string } }){
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    async function getPost() {
      const res = await queryPostDetail({ postId: params.postId });
      const newPost: Post = res.data.data;
      setPost(newPost);
    }
    getPost();
    return () => {};
  }, [params.postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <PostHeader
        name={post.author.name}
        avatar={post.author.avatar}
        onBack={() => window.history.back()}
      />
      <ImageCarousel images={post.images} />
      <PostContent content={post.content} />
      <CommentSection comments={post.comments} />
    </Container>
  );
};

export default PostDetailPage;
