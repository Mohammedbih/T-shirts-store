import { Button, Container, CssBaseline, Stack, Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/Appbar";
import { useEffect } from "react";
import theme from "./Styles/theme";
import AppDrawer from "./components/Appbar/Drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/Appbar/Search";
import { Path } from "./routs/Path";
import SignUp from "./components/signup/SignUp";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Products from "./pages/products/Products";

function App() {
  useEffect(() => {
    document.title = "T-STORE";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={"xl"} sx={{ background: "#fff" }}>
        <Stack>
          <UIProvider >
          <Appbar />
          <AppDrawer />
          <SearchBox />
          
          <Routes>
            <Route exact path={Path.HOME} element={<Home />} />
            <Route exact path={Path.PRODUCTS} element={<Products />} />
            <Route exact path={Path.SIGN_IN} element={<SignIn />} />
            <Route exact path={Path.SIGN_UP} element={<SignUp />} />
            <Route exact path={Path.PRODUCTS} element={<SignIn />} />
          </Routes>
          <Footer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
