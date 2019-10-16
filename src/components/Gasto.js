import React from 'react';

const Gasto = ({gasto, eliminarGasto}) => {
    // tomar el id a borrar
    // take the id to delete
    const handleClick = e => {
        eliminarGasto(e.target.id);
    }
    return (
        <div className="card bg-light m-2">
            <p className="m-0 p-2 font-weight-bold">
                <span onClick={handleClick} className="btn badge badge-danger p-2 mr-1" id={gasto.id}>&times;</span>
                {gasto.nombreGasto} <span className="badge badge-dark p-2 float-right">- {gasto.cantidadGasto}</span>
            </p>
        </div>
    )
}

export default Gasto;
