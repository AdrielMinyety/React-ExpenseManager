import React, {useState} from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuestoInicial, setPresupuestoRestante }) => {

    const [presupuesto, setPresupuesto] = useState(null);
    const [error, setError] = useState(false);

    const handleChange = e => {
        setPresupuesto(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(presupuesto <= 1 || isNaN( presupuesto ) ) {
            setError(true);
            return;
        }
        setError(false);
        setPresupuestoInicial(presupuesto);
        setPresupuestoRestante(presupuesto);
    }

    return (
        <form onSubmit={handleSubmit}>
            {(error) 
            ? <Error mensaje="Presupuesto no válido"/>
            : null
            }
            <div className="input-group input-group-lg">
                <input 
                    type="number"
                    name="presupuesto"
                    className="form-control text-center font-weight-bold mb-2"
                    placeholder="Presupuesto (ej: 450)"
                    onChange={handleChange}
                    />
            </div>
            <button type="submit" className="btn btn-success btn-block">Empezar!</button>
        </form>
    )
}

export default Pregunta;
