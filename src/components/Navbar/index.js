import classes from "./index.module.css";
import logo from "../../assets/logo_.png";
import { Avatar } from "@mui/material";
import user1 from "../../assets/Ellipse_14_fod@2x.png";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img className={classes.img} src={logo} alt="logo" />
      </div>
      <div className={classes.user}>
        <IconButton className={classes.bell}>
          <div className={classes.num}>1</div>
          <NotificationsNoneOutlinedIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
        <Avatar className={classes.avatar} alt="user1" src={user1} />
        <IconButton>
          <ArrowDropDownIcon
            onClick={() => {
              setActive(!active);
            }}
            sx={{
              color: "white",
            }}
          />
        </IconButton>
        {active && (
          <div className={classes.info}>
            <div className={classes.user_contain}>
              <p>User1</p>
              <h6 className={classes.name_user}>Name</h6>
            </div>
            <div className={classes.icon_contain}>
              <HomeIcon
                sx={{
                  color: "#706fa7",
                }}
              />
              <p>Home</p>
            </div>
            <div className={classes.icon_contain}>
              <PersonIcon
                sx={{
                  color: "#706fa7",
                }}
              />
              <p>profile</p>
            </div>
            <div className={classes.icon_contain}>
              <PowerSettingsNewIcon
                sx={{
                  color: "#706fa7",
                }}
              />
              <p>logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
