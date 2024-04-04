import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import styles from "./index.module.css";
import { Paper } from "@mui/material";

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
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Follow"
          value="follow"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Message"
          value="message"
          icon={<FavoriteIcon />}
        />

        <BottomNavigationAction label="You" value="you" icon={<FolderIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
