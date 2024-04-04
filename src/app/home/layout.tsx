"use client";
import TopBar from "../components/TopBar";
import TabBar from "../components/TabBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar />
      <TabBar />
      {children}
    </>
  );
}
