"use client";
import React ,{useState}from 'react';
import styles from './page.module.css'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import {TextField, Box} from '@mui/material';
import { useRouter } from 'next/navigation'
interface LocationState {
    lat: number;
    lng: number;
  }
const Post: React.FC = () => {


  const [postType, setPostType] = useState<string>('Item');

  const handlePostTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostType(event.target.value);
    console.log(postType)
  };
    
  const router = useRouter(); 

  const handleCloseClick = () => {
      router.push('/home/hot'); 
  };
    const handleFileChange = ()=>{
    };
    const [buttonText, setButtonText] = useState('📍Get Location');
    const [location, setLocation] = useState<LocationState | null>(null);
    const [cityName, setCityName] = useState<string | null>(null);
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [text, setText] = useState('');
    const defaultText = "Describe your tasks/items, add any details, source...";
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    };
  
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(event.target.value);
    };
  
    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(event.target.value);
    };

    const handleGetLocation = async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
    
            try {
              const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`, {
                headers: { 'Accept-Language': 'en' },
              });
              if (!response.ok) throw new Error('Geocoding failed');
              const data = await response.json();
              const cityName = data.address.city || data.address.town || data.address.village;
              
              setButtonText('📍'+cityName); 
            } catch (error) {
              console.error("Error fetching city name: ", error);
              setButtonText('Location unavailable'); 
            }
          }, (error) => {
            console.error("Geolocation error: ", error);
            setButtonText('Location error'); 
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
          setButtonText('Geolocation not supported'); 
        }
      };
  
  return (
    <div className= {styles.Post}>
<header className={styles['Post-header']}>
  <div className={styles['Left-items']}>
    <button className={styles['Close-button']} onClick={handleCloseClick}>×</button>
    <label className={styles['Post-label']}>Post Items/Tasks</label>
  </div>
  <Button variant="contained" color="success">
    Post
  </Button>
</header>
      <main className={styles['Post-main']}>
      <Card sx={{ width: 410, height: 500, mx: "auto", borderRadius: '16px', position: 'relative' }}>
      <CardContent sx={{ height: '100%', position: 'relative' }}>
      <TextField
          fullWidth
          multiline
          variant="outlined"
          placeholder={defaultText}
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            fontSize: '1.25rem',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none', 
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none', 
              }
            }
          }}
        />
        <div style={{ position: 'absolute', bottom: 140, left: 0, padding: '16px' }}>
        <Card sx={{ 
      width: 180, 
      height: 180, 
      position: 'relative',  
      mx: "auto", 
      borderRadius: '16px', 
      backgroundColor: '#ededed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <CardContent sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
        <input
          type="file"
          hidden
          accept="image/*"
          id="upload-photo"
          onChange={handleFileChange}
        />
        <label htmlFor="upload-photo" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Typography variant="h1" sx={{ userSelect: 'none',color:'GrayText' }}>+</Typography>
        </label>
      </CardContent>
    </Card>
        </div>
        <div style={{ position: 'absolute', bottom: 100, left: 0, padding: '16px' }}>
      <Button 
        variant="contained" 
        onClick={handleGetLocation}
        sx={{
          backgroundColor: 'rgba(105, 105, 105, 0.2)', 
          color:'black',
          ':hover': {
            backgroundColor: 'rgba(105, 105, 105, 0.4)', 
          },
        }}
      >
        {buttonText}
      </Button>
    </div>
    <div style={{ position: 'absolute', bottom: 50, left: 0, padding: '16px',color:'#ededed' }}>
                            —————————————————
    </div>
    <div style={{ position: 'absolute', bottom: 20, left: 0, padding: '16px', color: '#ededed' }}>
      <FormControl component="fieldset">
        <FormLabel component="legend" style={{ color: 'black', fontWeight: 'bold', fontSize: '18px' }}>Labels:</FormLabel>
        <RadioGroup row aria-label="postType" name="postType" value={postType} onChange={handlePostTypeChange}>
          <FormControlLabel value="Item" control={<Radio />} label="Item" />
          <FormControlLabel value="Task" control={<Radio />} label="Task" />
        </RadioGroup>
      </FormControl>
    </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
      </main>
      <footer className={styles['Post-footer']} >
      <Card sx={{ width: 410, height: 140, mx: "auto", borderRadius: '16px' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2, 
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography minWidth={220} variant="body1" component="div" sx={{ marginRight: 1 }}>
              Price or Reward:
            </Typography>
            <TextField
              size="small"
              value={price}
              onChange={handlePriceChange}
            />
          </Box>
          <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography minWidth={220} variant="body1" component="div" sx={{ marginRight: 1 }}>
              Detailed Address:
            </Typography>
            <TextField
              size="small"
              value={address}
              onChange={handleAddressChange}
            />
          </Box>
        </Box>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
      </footer>
    </div>
  );
}

export default Post;
