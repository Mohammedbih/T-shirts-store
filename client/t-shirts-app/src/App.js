<<<<<<< HEAD
import "./App.css";
import MyAccount from "./pages/MyAccount";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

=======
import { Container, CssBaseline, Stack, Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/Appbar";
import { useEffect } from "react";
import theme from "./Styles/theme";
// import Banner from "./pages/HomePage/Banner";
import Products from "./pages/products/Products";
// import StyledRating from "./pages/products/Products";
import AppDrawer from "./components/Appbar/Drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/Appbar/Search";
import Footer from "./components/Footer";
import Categories from "./pages/categories/Categories";
import Cart from "./pages/Cart";
>>>>>>> c6ad05064795eb5a1aae2bdc66303ef93adc73e0
function App() {
  useEffect(() => {
    document.title = "T-STORE";
  }, []);
  
  return (
<<<<<<< HEAD

    
    <div className="App">

<MyAccount/>

=======
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ background: "#fff" }}>
          <Stack>
            <UIProvider>
              <Appbar />
              <AppDrawer />
              {/* <Box sx={{ marginTop: "70px" }}>
                <Banner />
              </Box> */}
              
        <Products/>
       
              <SearchBox />
              
              <Categories />
              {/* <Cart/> */}
              <Footer />
            </UIProvider>
          </Stack>
        </Container>
      </ThemeProvider>
>>>>>>> c6ad05064795eb5a1aae2bdc66303ef93adc73e0
    </div>
  );
}

export default App;
