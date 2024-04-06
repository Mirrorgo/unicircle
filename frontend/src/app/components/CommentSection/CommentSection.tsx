import React from 'react';
import { Box, Avatar, Typography, Button, TextField } from '@mui/material';

interface Comment {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => (
  <Box>
    <Button variant="outlined">Add Comment</Button>
    <TextField label="Comment" variant="outlined" fullWidth multiline />
    <Box>
      {comments.map((comment) => (
        <Box key={comment.id} sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <Avatar src={comment.author.avatar} />
          <Box>
            <Typography variant="subtitle2">{comment.author.name}</Typography>
            <Typography variant="body2">{comment.content}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

