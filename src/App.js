import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import Info from './Pages/Info';
import Smallnv from './Components/Navbar/SmallNavbar/Smallnv';

function App() {
  return (
    <>
      <BrowserRouter>
      <Smallnv/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/info' element={<Info/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
