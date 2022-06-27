import React, { useState } from "react";
import classes from "./index.module.css";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");
  const handleTogglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#706FA7",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });
  return (
    <div className={classes.container}>
      <div className={classes.logo}></div>
      <div className={classes.form}>
        <h2 className={classes.header}>LOGIN</h2>
        <TextField id="outlined-basic" label="UserName" variant="outlined" />
        <TextField
          className={classes.password}
          name="password"
          type={type}
          placeholder="password"
          label="Password"
        ></TextField>
        <div className={classes.forget}>
          <IconButton
            color="secondary"
            onClick={() => {
              handleTogglePassword();
            }}
          >
            {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
          <h5 className={classes.forgetText}>Forget Password</h5>
        </div>

        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Login;
