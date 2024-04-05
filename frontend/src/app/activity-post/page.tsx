"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField, Box, Select, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const ActivityPost = () => {
    const [text, setText] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const defaultText = "Describe your activities...";
    const router = useRouter();
    const handleCloseClick = () => {
        router.back();
    };
    const handleTagInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const inputValue = (event.target as HTMLInputElement).value;
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            event.preventDefault();
            setTags(prevTags => [...prevTags, inputValue.trim()]);
            (event.target as HTMLInputElement).value = '';
        }
    };

    const handleDeleteTag = (tagToDelete: string) => {
        setTags(tags => tags.filter(tag => tag !== tagToDelete));
    };
    return (
        <div className={styles.container}>
            <header className={styles['Post-header']}>
                <div className={styles['Left-items']}>
                    <button className={styles['Close-button']} onClick={handleCloseClick}>×</button>
                    <label className={styles['Post-label']}>Post An Activity</label>
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
                                borderRadius: '16px',
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
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter tags"
                            onKeyDown={handleTagInput}
                            sx={{ mt: 32 }}
                        />
                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                                mt: 2,
                                flexWrap: 'wrap', 
                                maxWidth: 400, 
                                width: '100%', 
                            }}
                        >
                            {tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    onDelete={() => handleDeleteTag(tag)}
                                    sx={{
                                        mb: 1, 
                                    }}
                                />
                            ))}
                        </Stack>
                    </CardContent>
                </Card>
            </main>
            <footer className={styles.footer}>
                <Card sx={{ margin: 2, borderRadius: '16px' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            People:
                            <Select
                                sx={{ borderRadius: '16px', margin: 2 }}
                                value={people}
                                onChange={(e) => setPeople(Number(e.target.value))}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {Array.from({ length: 8 }, (_, i) => (
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                            <Typography variant="h6" component="div">
                                Time:
                            </Typography>
                            <TextField
                                type="datetime-local"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                sx={{ marginLeft: 2, borderRadius: '24px' }}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </footer>
        </div>
    );
};

export default ActivityPost;
