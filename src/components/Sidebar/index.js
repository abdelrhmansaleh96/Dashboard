import React, { useState } from "react";
import classes from "./index.module.css";
import sideBarItems from "../../helpers/SidebarItemData";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SubMenu from "../SubMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
                  setActive(!active);
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
