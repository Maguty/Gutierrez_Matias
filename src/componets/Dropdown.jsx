import React from 'react';

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Ofertas</a>
                  <a className="dropdown-item" href="#">Más Vendidos</a>
                  <a className="dropdown-item" href="#">Outlet</a>
                </div>
              </li>
        </>
    );
}

export default Dropdown;
