import React from 'react';
import Form from '../layout/Form';
import Dropdown from '../layout/Dropdown';
import Secciones from '../layout/Secciones';
import Carrito from '../layout/Carrito';


const Navbar = () => {
  const listDrowpdon = ["Electro", "Celulares", "Televisores"]
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bienvenidos!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown Lista={listDrowpdon}/>
              <a href="">*Ver Carrito*</a><Carrito/>
            </ul>
            <Form busqueda = "Buscar Producto"/>
          </div>
        </div>
      </nav> 
        </>
    );
}

export default Navbar;
