import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Form from './components/Form';
import ListaGastos from './components/ListaGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [ presupuestoInicial, setPresupuestoInicial ] = useState(0);
  const [presupuestoRestante, setPresupuestoRestante] = useState(0);
  const [agregandoGasto, setAgregandoGasto] = useState(false);
  const [ gasto, setGasto ] = useState({});
  const [gastos, setGastos] = useState([]);

  // Detectar cambios en el state
  // Detect changes in the state
  useEffect(() => {
    if(agregandoGasto){
      let listadoGastos = [...gastos, gasto];
      setGastos(listadoGastos);
      const restante = presupuestoRestante - gasto.cantidadGasto;
      setPresupuestoRestante(restante);
      setAgregandoGasto(false);
    }
  }, [agregandoGasto, gastos, gasto, presupuestoRestante])

  const eliminarGasto = id => {
    // eliminar de gastos ([]) y actualizar el "restante"
    // delete from gastos ([]) and update the "restante"
    let restante;
    gastos.forEach( gasto => {
      if (gasto.id === id) restante = presupuestoRestante + parseInt( gasto.cantidadGasto, 10 );
      setPresupuestoRestante(restante);
    })
    const nuevaListaGastos = gastos.filter(gasto => gasto.id !== id);
    setGastos(nuevaListaGastos);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="card shadow mb-5">
          <h1 className="card-header text-center text-success">Gestor de Gastos</h1>
          <div className="card-body">
            {(!presupuestoInicial)
            ? <Pregunta 
                setPresupuestoInicial={setPresupuestoInicial}
                setPresupuestoRestante={setPresupuestoRestante}
                />
            : (
              <div className="row">
                <div className="col-md-6 mt-3">
                  <Form
                    setGasto={setGasto}
                    setAgregandoGasto={setAgregandoGasto}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <ListaGastos 
                    gastos={gastos}
                    eliminarGasto={eliminarGasto}
                  />
                  <ControlPresupuesto 
                    presupuestoInicial={presupuestoInicial}
                    presupuestoRestante={presupuestoRestante}
                  />
                </div>
              </div>
            )
            }            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
