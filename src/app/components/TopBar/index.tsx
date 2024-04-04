import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <div>
      <div>
        <Link href="/">Hot</Link>
      </div>
      <div>
        <Link href="/posts">Posts</Link>
      </div>
      <div>
        <Link href="/courses">Courses</Link>
      </div>
      <div>
        <Link href="/activities">Activities</Link>
      </div>
    </div>
  );
}

export default TopBar;
