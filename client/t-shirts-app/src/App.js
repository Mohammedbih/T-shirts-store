 import {Container} from '@mui/material'
 import { ThemeProvider } from '@mui/system';
import Appbar from './components/Appbar/AppbarDesktop'
import { Routes , Route} from 'react-router-dom';
import Home from './pages/Home'
import { useEffect } from 'react';
import theme from './Styles/theme';

function App() {
  useEffect(() =>{
    document.title = "T-STORE"
  },[]);
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl"
    sx={{
      background:'#C576F6'
    }}>
      <Appbar/>
      <Routes>
  <Route path='/' element={<Home/>}/>
      </Routes>
    </Container>
    </ThemeProvider>
  );
}

export default App;