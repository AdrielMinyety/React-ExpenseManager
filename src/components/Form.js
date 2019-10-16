import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setGasto, setAgregandoGasto }) => {

    const StateInicial = {
        nombreGasto : "",
        cantidadGasto : "",
        id: shortid.generate()
    }

    const [error, setError] = useState(false);
    const [gastoData, setGastoData] = useState(StateInicial);
    // actualizar state
    // update state
    const handleChange = e => {
        setGastoData({
            ...gastoData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // validar campos
        // validate fields
        if(gastoData.cantidadGasto <= 1 || isNaN( gastoData.cantidadGasto ) || /^\s+$/.test( gastoData.nombreGasto) || gastoData.nombreGasto === '' ) {
            setError(true);
            return;
        }
        // enviar a App
        // send to App
        setGasto(gastoData);
        setAgregandoGasto(true);
        // resetear Form
        // reset Form
        setGastoData(StateInicial);
        setError(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            {(error) 
            ? <Error mensaje="Datos no válidos"/>
            : null
            }
            <div className="input-group input-group-lg">
                <input 
                    type="text"
                    name="nombreGasto"
                    className="form-control text-center font-weight-bold mb-2"
                    placeholder="Nombre del gasto"
                    onChange={handleChange}
                    value={gastoData.nombreGasto}
                    />
            </div>
            <div className="input-group input-group-lg">
                <input 
                    type="number"
                    name="cantidadGasto"
                    className="form-control text-center font-weight-bold mb-2"
                    placeholder="Cantidad (ej: 450)"
                    onChange={handleChange}
                    value={gastoData.cantidadGasto}
                    />
            </div>
            <button type="submit" className="btn btn-success btn-block">Empezar!</button>
        </form>
    )
}

export default Form
