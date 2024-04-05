import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface PostHeaderProps {
  name: string;
  avatar: string;
  onBack: () => void;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ name, avatar, onBack }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Button onClick={onBack}>
      <ArrowBackIosNewIcon />
    </Button>
    <Avatar src={avatar} />
    <Typography>{name}</Typography>
  </Box>
);

