import { Subject } from "@/service/subject";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

function SubjectCard({ content }: { content: Subject }) {
  useEffect(() => {
    console.log("content", content);
    return () => {};
  }, []);

  return (
    <Card
      sx={{
        width: 200,
        height: 200,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "#3f51b5",
              fontWeight: "bold",
            }}
          >
            {content.subjectNumber}
          </span>
          <span
            style={{
              color: "#f50057",
              fontWeight: "bold",
            }}
          >
            {`🔥${content.heat}`}
          </span>
        </Typography>
        <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
          {content.subjectName}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {content.subjectDescription}
        </Typography>
        <Typography variant="body2" sx={{ color: "#333333" }}>
          {content.major}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SubjectCard;
