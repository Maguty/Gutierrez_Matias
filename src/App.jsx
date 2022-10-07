import { BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css'
import Index from './componets/ItemListContainer';
import Contador from './componets/Contador';
import Navbar from './componets/Contenido/Navbar';
import Home from './componets/Contenido/Home';
import Producto from './componets/Contenido/Producto'
import DetalleProdcuto from './componets/Contenido/DetalleProducto'
import Contacto from './componets/Contenido/Contacto'
import VerCarrito from './componets/Contenido/VerCarrito';
const App = () => {
    return (
        <>
         <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Producto/:id" element={<Producto/>} />
              <Route path="/VerCarrito" element={<VerCarrito/>} />
              <Route path="/Contacto" element={<Contacto/>} />
              
            </Routes>
          </BrowserRouter>
        
      </>
    );
}

export default App;
