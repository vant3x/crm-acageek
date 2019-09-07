import React from 'react';

/* Componentes Layout */
import Header from './components/Layout/Header';
import Navegacion from './components/Layout/Navegacion';

function App () {
  return (
    <React.Fragment>
      <Header />
      <div className="grid contenedor contenido-principal">
        <Navegacion />
        <main className="caja-contenido col-9">
          {/* TODO: Routing a los componentes*/}
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;

