"use client";
import React, { useState } from "react";
import styles from "./page.module.css"
import { Avatar, Card, CardContent, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
function You() {
  const [school, setSchool] = useState('The University of Melbourne');
  const [email, setEmail] = useState('8audbox@gmail.com');
  const [isEditingSchool, setIsEditingSchool] = useState(false); // 新增状态跟踪是否编辑学校信息
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
      <Avatar
  alt="Remy Sharp"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtVw4cM18uUbGRoAXZAzzWaX5izm27GyIh_tCA8eWhw&s"
  sx={{ width: 156, height: 156 ,top:50}}
/>
      </div>
    <div className={styles.info}>
    <Card sx={{
                width: 360,
                height: 460,
                position: 'relative',
                mx: "auto",
                borderRadius: '16px',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top:100
              }}>
          <CardContent>
          <Typography
        variant="h5"
        component="h2"
        sx={{
          position: 'absolute',
          fontSize: '3.5rem',
          color: 'navy',
          fontWeight: 'bold',
          top: '1rem', 
          left:100
        }}
      >
        8 $ Box
      </Typography>
      School:
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TextField
            fullWidth
            variant="standard"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            disabled={!isEditingSchool} // 根据isEditingSchool状态启用或禁用编辑
            InputProps={{ disableUnderline: !isEditingSchool }} // 当不在编辑模式时隐藏下划线
            sx={{
              fontSize: '1.5rem',
              '& .MuiInput-input': {
                fontSize: '1.5rem',
                color: 'darkgreen',
              }
            }}
          />
          <IconButton onClick={() => setIsEditingSchool(!isEditingSchool)}>
            <EditIcon />
          </IconButton>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          Email:
          <TextField
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditingEmail} // 根据isEditingEmail状态启用或禁用编辑
            InputProps={{ disableUnderline: !isEditingEmail }} // 当不在编辑模式时隐藏下划线
            sx={{
              fontSize: '1.5rem',
              '& .MuiInput-input': {
                fontSize: '1.5rem',
                color: 'grey',
              }
            }}
          />
          <IconButton onClick={() => setIsEditingEmail(!isEditingEmail)}>
            <EditIcon />
          </IconButton>
        </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default You;
