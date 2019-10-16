import React, {Fragment} from 'react';
import { revisarPresupuesto } from './helper';

const ControlPresupuesto = ({ presupuestoInicial, presupuestoRestante }) => {
    return (
        <Fragment>
            <div className="dropdown-divider my-3"></div>
            <div className="font-weight-bold text-right">
                <div className={revisarPresupuesto(presupuestoInicial, presupuestoRestante)}>
                    Restante: {presupuestoRestante}
                </div>
                <div className="alert alert-primary">
                    Presupuesto: {presupuestoInicial}
                </div>
            </div>
        </Fragment>
    )
}

export default ControlPresupuesto
