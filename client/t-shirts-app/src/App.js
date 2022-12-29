import { Button, Container, CssBaseline, Stack, Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
// import Appbar from "./components/Appbar";
import { useEffect } from "react";
import theme from "./Styles/theme";
// import Banner from "./pages/HomePage/Banner";
// import Products from "./pages/products/Products";
// import AppDrawer from "./components/Appbar/Drawer";
// import { UIProvider } from "./context/ui";
// import SearchBox from "./components/Appbar/Search";
// import Checkout from "./components/checkout/Checkout";
import { Path } from "./routs/Path";
import SignUp from "./components/signup/SignUp";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignIn from "./components/signin/SignIn";

function App() {
  useEffect(() => {
    document.title = "T-STORE";
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      {/* <SignUp /> */}
        <Routes>
          <Route exact path={Path.HOME} element={<SignIn />} />
          <Route exact path={Path.SIGN_IN} element={<SignIn />} />
          <Route exact path={Path.SIGN_UP} element={<SignUp />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
