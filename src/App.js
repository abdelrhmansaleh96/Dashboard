import "./App.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import MainSchool from "./components/MainSchool";
// import PageHero from "./components/PageHero/PageHero";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#B5C3FC",
        main: "#706FA7",
      },
      secondary: {
        main: "#f50057",
      },
      error: {
        main: "#F3797E",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        {/* <PageHero /> */}
        <MainSchool />
      </ThemeProvider>
    </>
  );
}

export default App;
