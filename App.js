import React,{ useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

  const [cantidad, setCantidad] = useState(0);
  const [cargando, setCargando] = useState(false);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Header
        titulo='Cotizador de prestamos'
      />
      <div className='container'>
        <Formulario
          cantidad={cantidad}
          plazo={plazo}
          setCantidad={setCantidad}
          setCargando={setCargando}
          setPlazo={setPlazo}
          setTotal={setTotal}
        />
        {cargando ? (
          <Spinner/>
        ): (
          total === 0 ? (
            <div className='mensajes'>
              <Mensaje/>
            </div>
          ) : (
            <div className='mensajes'>
              <Resultado
                cantidad={cantidad}
                plazo={plazo}
                total={total}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
