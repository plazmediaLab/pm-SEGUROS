import React, { useState } from 'react';
import styled from '@emotion/styled';


/*=================================================================================
*	 Styled Component
* --------------------------------------------------------------------------------*/
const ItemForm = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5rem auto;
  grid-column-gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  color: var(--texto-light);
  text-align: right;

  @media (max-width: 589px) {
    text-align: left;
  }
`;
const InputRadio = styled.input`
  margin: 0 .9rem;
`;
/* ============================================================================= */


const Formulario = ({ mensajeError, guardarError }) => {

  const [datos, guardarDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });


  // Extraer valores del STATE
  const { marca, year, plan } = datos;

  // Leer datos del formulario y colocarlos en el STATE
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  };

  // Submit al formulario
  const cotizarSeguro = e => {
    e.preventDefault();
    
    if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
      guardarError(true);
      return
    }

    guardarError(false);

    // Obtener la diferencia de años

    // Por cada año hay que restar el 3%

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%

    // Básico aumenta 20%
    // completo 50%

    
    // Total

  };


  return (
    <form
      onSubmit={cotizarSeguro}
    >
      {mensajeError('Todos los campos son requeridos')}
      <ItemForm>
        <Label>Marca: </Label>
        <select
          name="marca"
          value={marca}
          onChange={obtenerInformacion} 
        >
          <option value="">--- Seleccione ---</option>
          <option value="americano">--- Americano ---</option>
          <option value="europeo">--- Europeo ---</option>
          <option value="asiatico">--- Asiatico ---</option>
        </select>
      </ItemForm>
      <ItemForm>
        <Label>Año: </Label>
        <select
          name="year"
          value={year}
          onChange={obtenerInformacion}
        >
          <option value="">-- Seleccione --</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </select>
      </ItemForm>
      <ItemForm>
        <Label>Plan:</Label>
        <div>
          <InputRadio 
            type="radio"
            name="plan"
            value="basico"
            checked={plan === "basico"}
            onChange={obtenerInformacion}
          /> Básico
          <InputRadio 
            type="radio"
            name="plan"
            value="completo"
            checked={plan === "completo"}
            onChange={obtenerInformacion}
          /> Completo
        </div>
      </ItemForm>
      <div className="jc-end mt-4">
        <button type="submit" className="btn-interactive btn-blue">
          <i className="a-assignment_turned_in"></i> Cotizar
        </button>
      </div>
    </form>
  );
};

export default Formulario