import { Card } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Topic } from "@/service/subject";
import { getDurationSince } from "@/utils/subjects";
function WideCard({ topic }: { topic: Topic }) {
  return (
    <Card style={{ width: "90vw" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span>
          <HelpOutlineIcon />
        </span>
        <span>{topic.title}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "100px", display: "flex", gap: "10px" }}>
          <span style={{ color: "purple", fontWeight: "bold" }}>
            {topic.typeName}
          </span>
          <span>user</span>
          <span>{getDurationSince(topic.createdAt)}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <ChatBubbleOutlineIcon fontSize="small" />
          <span>{topic.commentNumber}</span>
        </div>
      </div>
    </Card>
  );
}

export default WideCard;
