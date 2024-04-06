import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import styles from "./index.module.css";
import { Button, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

export default function Bottom() {
  const router = useRouter();
  const [value, setValue] = useState("/home");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(`/${newValue}`);
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
        <Button className={styles.roundButton} variant="contained" onClick={() => router.push('/new-post', { scroll: false })}>
          <AddIcon />
        </Button>
        <BottomNavigationAction
          label="Message"
          value="message"
          icon={<MessageIcon />}
        />
        <BottomNavigationAction onClick={() => router.push('/you', { scroll: false })} label="Profile" value="you" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
