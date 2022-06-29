import React from "react";
import classes from "./index.module.css";

const SubMenu = ({ list }) => {
  return (
    <>
      <div className={classes["submenu-container"]}>
        <ul className={classes.list}>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default SubMenu;
