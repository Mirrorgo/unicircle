"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid } from '@mui/material';
import PostCard from '@/app/components/PostCard/PostCard'; // 确保路径正确
import { Post } from './types'; // 确保路径正确

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const observerRef = useRef(null);

  const mockPosts = [
    {
      "id": 1,
      "author": {
        "name": "Jane Doe",
        "avatar": "https://via.placeholder.com/150"
      },
      "images": [
        "https://via.placeholder.com/600x400"
      ],
      "content": {
        "title": "美丽的海滩度假",
        "description": "度假的最佳选择，美丽的海滩和温暖的阳光。",
        "tag": "Task",
        "location": "马尔代夫",
        "detailedAddress": "马尔代夫某岛屿",
        "price": "￥3000起"
      },
      "comments": [
        {
          "id": 1,
          "author": {
            "name": "评论者A",
            "avatar": "https://via.placeholder.com/150"
          },
          "content": "这是一个评论。"
        }
      ]
    },
    {
      "id": 2,
      "author": {
        "name": "John Smith",
        "avatar": "https://via.placeholder.com/150"
      },
      "images": [
        "https://via.placeholder.com/600x400"
      ],
      "content": {
        "title": "城市探险",
        "description": "探索城市的每个角落，发现未知的美。",
        "tag": "Item",
        "location": "纽约",
        "detailedAddress": "纽约市中心",
        "price": "免费"
      },
      "comments": [
        {
          "id": 2,
          "author": {
            "name": "评论者B",
            "avatar": "https://via.placeholder.com/150"
          },
          "content": "非常棒的体验！"
        }
      ]
    },
    {
      "id": 3,
      "author": {
        "name": "John Smith",
        "avatar": "https://via.placeholder.com/150"
      },
      "images": [
        "https://via.placeholder.com/600x400"
      ],
      "content": {
        "title": "城市探险",
        "description": "探索城市的每个角落，发现未知的美。",
        "tag": "Item",
        "location": "纽约",
        "detailedAddress": "纽约市中心",
        "price": "免费"
      },
      "comments": [
        {
          "id": 4,
          "author": {
            "name": "评论者B",
            "avatar": "https://via.placeholder.com/150"
          },
          "content": "非常棒的体验！"
        }
      ]
    },
    {
      "id": 2,
      "author": {
        "name": "John Smith",
        "avatar": "https://via.placeholder.com/150"
      },
      "images": [
        "https://via.placeholder.com/600x400"
      ],
      "content": {
        "title": "城市探险",
        "description": "探索城市的每个角落，发现未知的美。",
        "tag": "Item",
        "location": "纽约",
        "detailedAddress": "纽约市中心",
        "price": "免费"
      },
      "comments": [
        {
          "id": 2,
          "author": {
            "name": "评论者B",
            "avatar": "https://via.placeholder.com/150"
          },
          "content": "非常棒的体验！"
        }
      ]
    },
    {
      "id": 5,
      "author": {
        "name": "John Smith",
        "avatar": "https://via.placeholder.com/150"
      },
      "images": [
        "https://via.placeholder.com/600x400"
      ],
      "content": {
        "title": "城市探险",
        "description": "探索城市的每个角落，发现未知的美。",
        "tag": "Item",
        "location": "纽约",
        "detailedAddress": "纽约市中心",
        "price": "免费"
      },
      "comments": [
        {
          "id": 2,
          "author": {
            "name": "评论者B",
            "avatar": "https://via.placeholder.com/150"
          },
          "content": "非常棒的体验！"
        }
      ]
    }
  ];

  const fetchPosts = async () => {
    // Simulate a delay to mimic fetching data
    setTimeout(() => {
      setPosts((prevPosts) => [...prevPosts, ...mockPosts]);
    }, 500);
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
          <Grid item key={post.id} xs={6} sm={6}>
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
