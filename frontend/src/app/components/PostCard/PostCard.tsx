import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Avatar, Grid } from '@mui/material';
import { Post } from '@/app/home/posts/types'; // 确保路径正确
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
    <Card>
      <Link href={`/home/posts/${post.id}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={post.images[0]}
            alt="Post cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.content.title}
            </Typography>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Avatar src={post.author.avatar} alt={post.author.name} />
              </Grid>
              <Grid item xs>
                <Typography variant="body2" color="text.secondary">
                  {post.author.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {post.content.tag}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );

export default PostCard;