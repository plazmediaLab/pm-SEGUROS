import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header'; 
import Formulario from './components/Formulario'; 
import Resumen from './components/Resumen'; 
import Resultado from './components/Resultado'; 
import Spinner from './components/Spinner';

const ContenedorFormulario = styled.div`
  padding: 2rem;
  background-color: var(--White);
  border-top: .8rem solid var(--secondary-dark);
`;

const App = () => {

  const [error, guardarError] = useState(false);
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });
  // Extraer datos
  const { datos, cotizacion } = resumen;
  const [ spinner, cargarSpinner ] = useState(false);

  // Mensaje error global
  const mensajeError = (mensaje) => {
    return error ? <p className="msn msn-l-cancel mb-2"><i className="a-report"></i> {mensaje}</p> : null
  };

  return (
    <div className="container">
      <Header />

      <ContenedorFormulario className="box-shadow-lg">
        <Formulario 
          guardarError={guardarError}
          mensajeError={mensajeError}
          guardarResumen={guardarResumen}
          cargarSpinner={cargarSpinner}
        />
        
        <Resumen 
          datos={datos}
        />
        { !spinner
        ?
          <Resultado 
            cotizacion={cotizacion}
          /> : null
        }

        {spinner ? <Spinner /> : null}

      </ContenedorFormulario>
    </div>
  );
};

export default App