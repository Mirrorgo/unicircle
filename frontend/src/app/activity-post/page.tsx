"use client";
import React, { useState } from 'react';
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
import { TextField, Box } from '@mui/material';
import { useRouter } from 'next/navigation'

const ActivityPost = () => {
    const router = useRouter();
    const handleCloseClick = () => {
        router.back();
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

            <main className={styles.main}>Main Content</main>
            <footer className={styles.footer}>Footer</footer>
        </div>
    );
};

export default ActivityPost;
