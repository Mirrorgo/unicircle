"use client";
import { queryTopic } from "@/service/subject";
import type { Topic } from "@/service/subject";
import { getDurationSince } from "@/utils/subjects";
import React, { useEffect, useState } from "react";

function Topic({
  params,
}: {
  params: { subjectNumber: string; topicId: string };
}) {
  // { subjectNumber: string }

  const [topic, setTopic] = useState<Topic>();

  useEffect(() => {
    async function getTopic() {
      const res = await queryTopic({
        topicId: params.topicId,
      });
      const newTopic: Topic = res.data.data;
      console.log("newTopic", newTopic);
      setTopic(newTopic);
    }

    getTopic();
    return () => {};
  }, []);
  // 前端手动获取单个topic
  return (
    <div style={{ padding: "15px" }}>
      <div style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "bold" }}>
        {topic?.title}
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <div style={{ marginRight: "20px" }}>
          <div style={{ color: "red" }}>{topic?.username}</div>
          <span style={{ fontStyle: "italic" }}>
            {getDurationSince(topic?.createdAt, false)} ago in
          </span>
          <span style={{ color: "purple" }}> {topic?.typeName}</span>
        </div>
        {/* <div>STAR WATCH VIEW LIKE</div> */}
      </div>
      <div>{topic?.body}</div>
      <div style={{ marginTop: "20px" }}>
        <div>Comments</div>
        <div style={{ fontStyle: "italic", color: "gray" }}>
          No comments yet.
        </div>
        {/* map render comments */}
      </div>
    </div>
  );
}

export default Topic;
