import { Chip, colors } from "@mui/material";
import { green, red } from "@mui/material/colors";
import Link from "next/link";
import React from "react";

const tagColors: any = [
  "default",
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];
// 课程id, 课程名称, 热度
const subjects = [
  { subjectId: 1, subjectName: "90006" },
  { subjectId: 2, subjectName: "90007" },
  { subjectId: 3, subjectName: "90008" },
  { subjectId: 4, subjectName: "90009" },
  { subjectId: 5, subjectName: "90010" },
  { subjectId: 6, subjectName: "90006" },
  { subjectId: 7, subjectName: "90006" },
  { subjectId: 8, subjectName: "90006" },
];
function Subjects() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {subjects.map((cur, idx) => {
        return (
          <div key={cur.subjectId}>
            <Link href={`/home/subjects/${cur.subjectId}`}>
              {cur.subjectName}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Subjects;
