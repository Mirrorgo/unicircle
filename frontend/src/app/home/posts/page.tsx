"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid } from '@mui/material';
import PostCard from '@/app/components/PostCard/PostCard'; // 确保路径正确
import { Post, queryPostsList } from '../../../service/posts'; // 确保路径正确
import { useRouter } from "next/navigation";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const observerRef = useRef(null);
  const router = useRouter();

  const fetchPosts = async () => {
    try {
      // 可以在这里传递参数给 queryPostsList，比如分页信息
      const response = await queryPostsList({});
      if (response.data.code === 200) {
        // 假设后端返回的数据结构是 { code: 200, msg: '成功', data: [...] }
        setPosts((prevPosts) => [...prevPosts, ...response.data.data]);
      } else {
        console.error('Failed to fetch posts:', response.data.msg);
      }
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log('Reached bottom, loading more posts...');
          fetchPosts();
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    // Initial fetch
    fetchPosts();

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item key={post.id} xs={6} sm={6} onClick={() => router.push(`/home/posts/${post.id}`)}
          style={{ cursor: 'pointer' }}>
            <PostCard post={post} />
          </Grid>
        ))}
        <div ref={observerRef} style={{ width: '100%', height: '20px' }}></div>
      </Grid>
    </Container>
  );
}

export default Posts;

// import Link from "next/link";
// import React from "react";

// function Posts() {
//   return (
//     <div>
//       <p>Posts</p>
//       <Link href="/home/posts/post-detail">
//         Go to Post Detail
//       </Link>
//     </div>
//   );
// }

// export default Posts;
