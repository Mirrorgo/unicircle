"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { PostHeader } from "../../../components/PostHead/PostHead";
import { ImageCarousel } from "../../../components/ImageCarousel/ImageCarousel";
import { CommentSection } from "../../../components/CommentSection/CommentSection";
import PostContent from "@/app/components/PostContent/PostContent";
import { useSearchParams } from "next/navigation";
import { queryPostDetail, queryPostsList } from "@/service/posts";

const PostDetailPage: React.FC = () => {
  const [post, setPost] = useState<any>(null);
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  useEffect(() => {
    // 确保 postId 不是 undefined 或数组
    if (typeof postId === "string") {
      // 使用 postId 请求 post 的详细信息
      queryPostDetail(postId)
        .then((response) => {
          // 假设后端正确返回数据
          setPost(response.data.data);
        })
        .catch((error) => {
          console.error("获取帖子详情出错:", error);
        });
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
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
