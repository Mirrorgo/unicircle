import { Chip, colors } from "@mui/material";
import { green, red } from "@mui/material/colors";
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
const types = [
  { typeId: 1, typeName: "90006" },
  { typeId: 2, typeName: "90007" },
  { typeId: 3, typeName: "90007" },
  { typeId: 5, typeName: "90007" },
  { typeId: 4, typeName: "90007" },
  { typeId: 6, typeName: "90007" },
  { typeId: 7, typeName: "90007" },
  { typeId: 8, typeName: "90007" },
];
function Subject({ params }: { params: { subjectId: string } }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {types.map((cur, idx) => {
          const colorValue = tagColors[idx % tagColors.length];
          return (
            <Chip
              label={cur.typeName}
              // variant="outlined"
              color={colorValue}
              key={cur.typeId}
            />
          );
        })}
      </div>
      <div>{params.subjectId}subject</div>
    </>
  );
}

export default Subject;
