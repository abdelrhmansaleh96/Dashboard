import React, { useState } from "react";
import classes from "./index.module.css";
import sideBarItems from "../../helpers/SidebarItemData";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SubMenu from "../SubMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Sidebar = () => {
  const [active, setActive] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [clicked, setClicked] = useState(-1);
  return (
    <div
      className={
        active
          ? `${classes.container} ${classes["container-expand"]}`
          : classes.container
      }
    >
      <div
        onClick={() => {
          setActive(!active);
          setSubmenu(false);
          setClicked(0);
        }}
        className={
          active
            ? `${classes.expand} ${classes["open_icon"]}`
            : classes["open_icon"]
        }
      >
        {active ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
      </div>
      {sideBarItems.map((item, index) => {
        return (
          <div
            key={index}
            className={
              active && clicked === index
                ? `${classes.header} ${classes.active}`
                : classes.header
            }
          >
            <div className={classes.con}>
              <div
                onClick={() => {
                  setActive(true);
                  setClicked(index);
                }}
                className={
                  active && clicked === index
                    ? `${classes.icon} ${classes.active}`
                    : classes.icon
                }
              >
                {item.icon}
              </div>
              {active && <div className={classes.title}>{item.title}</div>}
              {active && clicked === index ? (
                <div
                  onClick={() => {
                    setSubmenu(!submenu);
                  }}
                  className={classes.header_icon}
                >
                  {submenu ? <KeyboardArrowDownIcon /> : <ArrowRightIcon />}
                </div>
              ) : null}
            </div>
            {active && submenu && clicked === index ? (
              <div className={classes.submenu}>
                <SubMenu list={item.list} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
