import React from "react";
import classes from "./index.module.css";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import HouseIcon from "@mui/icons-material/House";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";

const MainSchool = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>Schools</p>
      </div>
      <div className={classes.infos}>
        <div className={classes["sm_container"]}>
          <div className={classes.box}>
            <div className={classes.icon}>
              <AvTimerIcon />
            </div>
            <p className={classes.num}>11</p>
            <p className={classes.type}>Pending Schools</p>
          </div>
          <div className={classes.box}>
            <div className={classes.icon2}>
              <HouseIcon />
            </div>
            <p className={classes.num}>100</p>
            <p className={classes.type2}>Total Schools</p>
          </div>
        </div>
        <div className={classes.btnContain}>
          <div className={classes.btn}>
            <Button variant="contained" endIcon={<KeyboardArrowDownIcon />}>
              View options
            </Button>
          </div>
          <div className={classes.btn}>
            <Button variant="contained" endIcon={<KeyboardArrowDownIcon />}>
              Filter
            </Button>
          </div>
        </div>
      </div>
      <div className={classes["btn_container"]}>
        <div className={classes.buttons}>
          <div className={classes.btn}>
            <Button
              sx={{
                backgroundColor: "primary.light",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
              size="small"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Add New School
            </Button>
          </div>
          <div className={classes.btn}>
            <Button size="small" variant="contained" startIcon={<CheckIcon />}>
              Mass Approve
            </Button>
          </div>
          <div className={classes.btn}>
            <Button
              sx={{ color: "white" }}
              size="small"
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Mass Delete
            </Button>
          </div>
        </div>
        <div className={classes.search}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "5px",
            }}
          >
            <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Search For Schools"
              variant="standard"
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MainSchool;
