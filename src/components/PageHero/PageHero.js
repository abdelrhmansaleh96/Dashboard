import React from "react";
import classes from "./PageHero.module.css";
import ConstructionIcon from "@mui/icons-material/Construction";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const PageHero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.icon}>
          <ConstructionIcon />
        </div>
        <h2 className={classes.head}>Settings</h2>
      </div>
      <div className={classes["space_icon"]}>
        <ArrowForwardIosIcon />
      </div>
      <div className={classes.direction}>
        <h1>Schools</h1>
      </div>
    </div>
  );
};

export default PageHero;
