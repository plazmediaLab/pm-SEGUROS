import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header'; 
import Formulario from './components/Formulario'; 

const ContenedorFormulario = styled.div`
  padding: 2rem;
  background-color: var(--White);
  border-top: .8rem solid var(--secondary-dark);
`;

const App = () => {

  const [error, guardarError] = useState(false);

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
        />
      </ContenedorFormulario>
    </div>
  );
};

export default App