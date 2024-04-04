"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import Bottom from "./components/Bottom";
import TopBar from "./components/TopBar";
export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Button>测试</Button>
      <Bottom />
    </main>
  );
}
