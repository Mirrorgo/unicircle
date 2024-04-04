import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";

enum TABS {
  hot,
  posts,
  courses,
  activities,
}

function TabBar() {
  const [tabNum, setTabNum] = useState<number>(0);
  const router = useRouter();
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTabNum(newValue);
    // console.log(newValue, "?");
    router.push(TABS[newValue]);
  };
  return (
    <>
      <Tabs
        value={tabNum}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {/* href="/" */}
        <Tab label="Hot" id="hot" />
        <Tab label="Posts" id="posts" />
        <Tab label="Courses" id="courses" />
        <Tab label="Activities" id="activities" />
      </Tabs>
    </>
  );
}

export default TabBar;
