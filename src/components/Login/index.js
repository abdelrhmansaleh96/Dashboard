import React, { useState } from "react";
import classes from "./index.module.css";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import logo from "../../assets/bg.jpg";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Login = () => {
  const [forget, setForget] = useState(false);
  const forgetHandler = () => {
    setForget(!forget);
  };
  const [values, setValues] = useState({
    password: "",

    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      <div>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      {!forget && (
        <div className={classes.form}>
          <div>
            <h2 className={classes.header}>LOGIN</h2>
            <div className={classes.underline}></div>
          </div>
          <TextField
            color="secondary"
            id="outlined-basic"
            label="UserName"
            variant="outlined"
          />

          <FormControl variant="outlined">
            <InputLabel color="secondary" htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              color="secondary"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="secondary"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <h5 className={classes.forgetText} onClick={forgetHandler}>
            Forget Password
          </h5>

          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </ThemeProvider>
        </div>
      )}
      {forget && (
        <div className={classes.form}>
          <div>
            <h2 className={classes.header1}>FORGET YOUR PASSWORD ?</h2>
            <div className={classes.underline}></div>
            <p className={classes.words}>please enter your registered e-mail</p>
          </div>
          <TextField
            color="secondary"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <ThemeProvider theme={theme}>
            <Button onClick={forgetHandler} variant="contained" color="primary">
              NEXT
            </Button>
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default Login;
