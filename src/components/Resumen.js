import React, { Fragment } from 'react';
import { primeraMayuscula } from '../helpers.js';


const Resumen = ({ datos }) => {
  
  // Extraemos los datos
  const { marca, year, plan } = datos;

  if(marca === '' || year === '' || plan === '') return null

  return (
    <Fragment>
      <h3 className="txt-a-c">Resumen de cotización</h3>
      <hr />
      <ul className="list-group vm-3">
        <li className="list-item"><span className="txt-strong txt-secondary">Marca:</span> { primeraMayuscula(marca) }</li>
        <li className="list-item"><span className="txt-strong txt-secondary">Año:</span> { year }</li>
        <li className="list-item"><span className="txt-strong txt-secondary">Plan:</span> { primeraMayuscula(plan) }</li>
      </ul>
    </Fragment>
  );
};

export default Resumen