import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { PostContentData } from '@/app/home/posts/types';

interface PostContentProps {
  content: PostContentData; // 使用定义的类型
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
        {content.title}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        {content.description}
      </Typography>
      <Typography variant="body2" style={{ fontWeight: 'bold', marginTop: '8px' }}>
        Label：{content.tag}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{ marginTop: '4px' }}>
        Location：{content.location}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{ marginTop: '4px' }}>
        Address：{content.detailedAddress}
      </Typography>
      {content.price && (
        <Typography variant="body2" style={{ fontWeight: 'bold', marginTop: '8px', color: '#d32f2f' }}>
          Price：{content.price}
        </Typography>
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
