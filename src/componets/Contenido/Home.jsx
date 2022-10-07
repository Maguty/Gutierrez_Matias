import React,{useState,useEffect} from 'react';

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const consultarBase =async () =>{
        const response = await fetch ('./json/productos.json')
        const productos = await response.json()
        const cardProducto = productos.map(producto => 
            <div className="card cardProducto" key={producto.id}>
                <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text"> Modelo: {producto.modelo}</p>
                        <p className="card-text">Marca: {producto.marca}</p>
                        <p className="card-text">Precio: {producto.precio}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                        <button className='btn btn-dark'>Ver Producto</button>
                </div>
            </div>)
    
        return cardProducto
    }
        consultarBase().then(producto => setProductos(producto))
       
    }, []);
    return (
        <>
            <div className='row'>
                {productos}
            </div>
        </>
    );
}

export default Home;
