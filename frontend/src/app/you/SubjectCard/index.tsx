import { Subject } from "@/service/subject";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
/**
 * subject
 */

function SubjectCard({ content }: { content: Subject }) {
  useEffect(() => {
    console.log("content", content);
    return () => {};
  }, []);

  return (
    <>
      <Card sx={{ width: 200, height: 200 }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 14,
              color: "text.secondary",
              display: "flex",
              justifyContent: "space-between", // Align items at both ends
            }}
            gutterBottom
          >
            <span>{content.subjectNumber}</span>
            <span>{`🔥${content.heat}`}</span>
          </Typography>
          <Typography variant="h5" component="div">
            {content.subjectName}
          </Typography>
          <Typography variant="body2">
            {content.subjectDescription}
            <br />
            {content.major}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
}

export default SubjectCard;
