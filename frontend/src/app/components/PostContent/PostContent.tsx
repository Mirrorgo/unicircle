import React from 'react';
import { CardContent, Typography, Chip } from '@mui/material';
import { PostContentData } from '@/service/posts';

interface PostContentProps {
  content: PostContentData; // 使用定义的类型
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <CardContent sx={{ padding: 2 }}>
      <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
        {content.title}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        {content.description}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
        Location: {content.location}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
        Address: {content.detailedAddress}
      </Typography>
      {content.price && (
        <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: 2, color: '#d32f2f' }}>
          Price: {content.price}
        </Typography>
      )}
      {/* Displaying the tag as a Chip component at the bottom */}
      {content.tag && (
        <Chip
          label={`Label: ${content.tag}`}
          variant="outlined"
          sx={{ marginTop: 2, background: '#f0f0f0', fontWeight: 'bold' }}
        />
      )}
    </CardContent>
  );
}

export default PostContent;


// import React from 'react';
// import { CardContent, Typography } from '@mui/material';

// interface PostContentProps {
//   content: string;
// }

// const PostContent: React.FC<PostContentProps> = ({ content }) => {
//   return (
//     <CardContent>
//       <Typography variant="body2" color="textSecondary" component="p">
//         {content}
//       </Typography>
//     </CardContent>
//   );
// }

// export default PostContent;
