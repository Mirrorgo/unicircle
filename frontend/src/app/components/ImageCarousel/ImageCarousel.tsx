import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconButton onClick={handlePrev} aria-label="Previous image">
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box sx={{ maxWidth: '100%', maxHeight: '500px', overflow: 'hidden' }}>
        <img src={images[currentIndex]} alt={`Post image ${currentIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
      </Box>
      <IconButton onClick={handleNext} aria-label="Next image">
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};



// import React from 'react';
// import { Box, Button } from '@mui/material';

// interface ImageCarouselProps {
//   images: string[];
// }

// export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
//   return (
//     <Box>
//       {images.map((image, index) => (
//         <Box key={index} sx={{ margin: 'auto' }}>
//           <img src={image} alt={`Post image ${index + 1}`} style={{ maxWidth: '100%' }} />
//         </Box>
//       ))}
//     </Box>
//   );
// };

