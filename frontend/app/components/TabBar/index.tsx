import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { SyntheticEvent, useState } from "react";

const tabs = ["hot", "posts", "subjects", "activities"];

function TabBar() {
  const [tabNum, setTabNum] = useState<number>(0);
  const router = useRouter();
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTabNum(newValue);
    router.push(`/home/${tabs[newValue]}`);
  };
  return (
    <>
      <Tabs
        value={tabNum}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabs.map((value, index) => (
          <Tab key={index} label={value} id={value} />
        ))}
      </Tabs>
    </>
  );
}

export default TabBar;
