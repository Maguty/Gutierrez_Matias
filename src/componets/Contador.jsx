import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    return (
        <>
            <h1>{contador}</h1>
        </>
    );
}

export default Contador;
