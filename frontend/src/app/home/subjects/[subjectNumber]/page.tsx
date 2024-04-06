"use client";
import { queryTopicList, queryTypeList } from "@/service/subject";
import type { Subject, Topic, TopicType } from "@/service/subject";
import { Chip, colors, Paper } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import WideCard from "./components/WideCard";

const tagColors: any = [
  // "default",
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];
function Subject({ params }: { params: { subjectNumber: string } }) {
  const router = useRouter();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [topicTypes, setTopicTypes] = useState<TopicType[]>([]);
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  useEffect(() => {
    async function getTypesList() {
      const res = await queryTypeList({ subjectNumber: params.subjectNumber });
      if (res.data.msg === "Error") {
        setTopicTypes([]);
        return;
      }
      const newTypes: TopicType[] = res.data.data;
      console.log("types", newTypes);
      setTopicTypes(newTypes);
    }
    getTypesList();
    return () => {};
  }, [params.subjectNumber]);

  useEffect(() => {
    async function getTopicsList() {
      const res = await queryTopicList({
        subjectNumber: params.subjectNumber,
        typeId: selectedChip != null ? topicTypes[selectedChip].typeId : null,
      });
      if (res.data.msg === "Error") {
        setTopics([]);
        return;
      }
      const newTopics: Topic[] = res.data.data;
      setTopics(newTopics);
    }
    getTopicsList();
    return () => {};
  }, [selectedChip, params.subjectNumber]);

  const handleSelectTopic = (index: number) => {
    if (selectedChip === index) {
      setSelectedChip(null); // 如果点击的是当前选定的chip，则取消选定
    } else {
      setSelectedChip(index); // 否则设置选定的chip
    }
  };
  return (
    <>
      <div
        style={{
          width: "90vw",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {topicTypes.map((cur, idx) => {
          const colorValue = tagColors[idx % tagColors.length];
          const isSelected = selectedChip === idx;
          return (
            <Chip
              label={cur.typeName}
              variant={isSelected ? "filled" : "outlined"}
              onClick={() => handleSelectTopic(idx)}
              color={colorValue}
              key={cur.typeId}
              style={{
                margin: "4px", // 设置 Chip 的间距
                cursor: "pointer", // 鼠标样式为指针
                borderRadius: "12px", // 设置 Chip 的边框半径
                boxShadow: isSelected
                  ? // ? "0px 3px 8px rgba(0, 0, 0, 0.3)"
                    "0px 4px 8px rgba(0, 0, 0, 0.3)"
                  : "none", // 根据是否选中添加阴影效果
              }}
            />
          );
        })}
      </div>
      {/* <div>{params.subjectId}subject</div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {topics.map((cur, idx) => {
          return (
            <div
              key={cur.topicId}
              onClick={() =>
                router.push(
                  `/home/subjects/${params.subjectNumber}/${cur.topicId}`
                )
              }
            >
              <WideCard topic={cur} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Subject;
