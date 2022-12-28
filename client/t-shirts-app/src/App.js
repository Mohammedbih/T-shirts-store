<<<<<<< HEAD
import "./App.css";
// import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
=======
import { Button, Container, CssBaseline, Stack ,Box} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/Appbar"
import { useEffect } from "react";
import theme from "./Styles/theme";
import Banner from "./pages/HomePage/Banner";
import Products from "./pages/products/Products";
import AppDrawer from "./components/Appbar/Drawer";
import { UIProvider } from "./context/ui";
import SearchBox from "./components/Appbar/Search";

>>>>>>> origin/Menna
function App() {
  useEffect(() => {
    document.title = "T-STORE";
  }, []);
  return (
<<<<<<< HEAD

    
    <div className="App">
      <Category/>
<Cart/>
<Footer/>


=======
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" 
      sx={{background: "#fff"}}>
        <Stack>
        <UIProvider>
        <Appbar/>
        <AppDrawer/>
        <Box sx={{marginTop:"70px"}}>
        <Banner/>
        </Box>
        {/*
        <Products/> */}
        <SearchBox/>
        </UIProvider>
        </Stack>
         
      </Container>
      </ThemeProvider>
>>>>>>> origin/Menna
    </div>
    
  );
}

export default App;
