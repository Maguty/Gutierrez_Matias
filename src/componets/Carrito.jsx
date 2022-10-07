import {Link} from 'react-router-dom'
import React from 'react';


const Carrito = () => {
    return (
        <Link to="/VerCarrito">
           <button><i className="bi bi-cart2"></i></button>
           </Link>

    );   
}

export default Carrito;
