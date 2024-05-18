// import './App.css'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ButtonGroup, createTheme, Box} from '@mui/material';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// User Defined modules
import Navbar from './navbar/navbar';
import HomePage from './HomePage/HomePage';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';


function App() {

  return (
    <>
      <CssBaseline />
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          {/* <Route path='/contact' element={<ContactUs />} /> */}
          {/* <Route path='/clients' element={<ClientsPage />} /> */}
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
