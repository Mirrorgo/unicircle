import { Subject } from "@/service/subject";
import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";

function SubjectCard({ content }: { content: Subject }) {
  useEffect(() => {
    console.log("content", content);
    return () => {};
  }, []);

  return (
    <Card
      sx={{
        width: "calc(50vw - 5px)",
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
            flexWrap: "wrap",
            alignItems: "center",
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
              fontSize: "16px",
            }}
          >
            {`🔥${content.heat > 999 ? "999+" : content.heat}`}
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
