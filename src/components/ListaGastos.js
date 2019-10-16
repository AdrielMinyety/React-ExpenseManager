import React from 'react';
import Gasto from './Gasto';

const ListaGastos = ({gastos, eliminarGasto}) =>(
    <div className="card p-2">            
        <h2 className="text-center text-muted">Gastos</h2>
        {gastos.map(gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                eliminarGasto={eliminarGasto}
            />
        ))}
    </div>
)

export default ListaGastos
