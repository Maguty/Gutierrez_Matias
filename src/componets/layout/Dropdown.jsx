import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({Lista}) => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
                <div className="dropdown-menu">
                  <Link className='dropdown-item'to={'/categoria/1'}>{Lista[0]}</Link>
                  <Link className='dropdown-item'to={'/categoria/2'}>{Lista[1]}</Link>
                  <Link className='dropdown-item'to={'/categoria/3'}>{Lista[2]}</Link>
                </div>
              </li>
        </>
    );
}

export default Dropdown;
