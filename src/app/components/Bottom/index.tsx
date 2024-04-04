import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import styles from "./index.module.css";
import { Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";

export default function Bottom() {
  const [value, setValue] = useState("recents");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Follow"
          value="follow"
          icon={<BookmarkIcon />}
        />
        <BottomNavigationAction
          label="Message"
          value="message"
          icon={<MessageIcon />}
        />

        <BottomNavigationAction label="You" value="you" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
