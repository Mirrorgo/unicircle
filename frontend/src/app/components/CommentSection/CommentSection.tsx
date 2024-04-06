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
  <Box sx={{ mt: 4 }}>
    <TextField label="Add a comment..." variant="outlined" fullWidth multiline sx={{ mb: 2 }} />
    <Box>
      {comments.map((comment) => (
        <Box key={comment.id} sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
          <Avatar src={comment.author.avatar} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{comment.author.name}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{comment.content}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

