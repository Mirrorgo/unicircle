"use client"
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { PostHeader } from '../../../components/PostHead/PostHead';
import { ImageCarousel } from '../../../components/ImageCarousel/ImageCarousel';
import { CommentSection } from '../../../components/CommentSection/CommentSection';
import PostContent from '@/app/components/PostContent/PostContent';

const testData = {
  "id": 1,
  "title": "示例帖子标题",
  "author": {
    "name": "作者名",
    "avatar": "https://via.placeholder.com/150"
  },
  "content": {
    "title": "示例帖子标题",
    "description": "这里是帖子内容的详细描述部分，提供更多关于帖子的信息。",
    "tag": "帖子分类",
    "location": "发帖人所在的位置信息",
    "detailedAddress": "发帖人的详细地址信息",
    "price": "如果适用，这里是价格信息"
  },
  "images": [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400"
  ],
  "comments": [
    {
      "id": 1,
      "author": {
        "name": "评论者A",
        "avatar": "https://via.placeholder.com/150"
      },
      "content": "这是一个评论。"
    },
    {
      "id": 2,
      "author": {
        "name": "评论者B",
        "avatar": "https://via.placeholder.com/150"
      },
      "content": "这是另一个评论。"
    }
  ]
}

export const PostDetailPage: React.FC = () => {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // 替换为您的APIFox Mock服务提供的接口URL
    //const apiUrl = 'https://mock.apifox.com/m1/4275735-3917683-default/api/postDetail';

    const fetchData = async () => {
      try {
        //const response = await fetch(apiUrl);
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const data = await response.json();
        setPost(testData);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <PostHeader name={post.author.name} avatar={post.author.avatar} onBack={() => window.history.back()} />
      <ImageCarousel images={post.images} />
      <PostContent content={post.content}/>
      <CommentSection comments={post.comments} />
    </Container>
  );
};

export default PostDetailPage;