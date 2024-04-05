"use client";
import SubjectCard from "@/app/you/SubjectCard";
import { querySubjectList, Subject } from "@/service/subject";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Subjects() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function getSubjectList() {
      const res = await querySubjectList({
        // dataSetID: dataSetId,
      });
      const newSubjects: Subject[] = res.data.data;
      setSubjects(newSubjects);
      console.log("length", newSubjects.length);
    }
    getSubjectList();
    return () => {};
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {subjects.map((cur, idx) => {
        return (
          <div
            key={cur.subjectId}
            onClick={() => router.push(`/home/subjects/${cur.subjectId}`)}
          >
            {/* <Link href={`/home/subjects/${cur.subjectId}`}> */}
            <SubjectCard content={cur} />
            {/* </Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default Subjects;
