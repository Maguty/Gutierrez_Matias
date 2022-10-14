import { BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import '../styles/App.css'
import Navbar from './Contenido/Navbar'
import Home from './Contenido/Home';
import Producto from './Contenido/Producto'
import Contacto from './Contenido/Contacto'
import VerCarrito from './Contenido/VerCarrito';
import Categoria from './Contenido/Categoria';
const App = () => {
    return (
        <>
         <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Producto/:id" element={<Producto/>} />
              <Route path="/categoria/:id" element={<Categoria/>} />
              <Route path="/VerCarrito" element={<VerCarrito/>} />
              <Route path="/Contacto" element={<Contacto/>} />
              
            </Routes>
          </BrowserRouter>
        
      </>
    );
}

export default App;
