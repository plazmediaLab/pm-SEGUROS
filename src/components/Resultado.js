import React, { Fragment } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import styled from '@emotion/styled';


const ResultadoDiv = styled.div`
  position: relative;
`;


const Resultado = ({ cotizacion }) => {

  return (
    <ResultadoDiv>
      {(cotizacion === 0)
        ?
        <div>
          <hr />
          <h4 className="txt-brand-2 txt-a-c">Arma el plan de seguro para tu auto</h4>
        </div>
        :
        <div>
          <hr />
          <h3 className="txt-a-r">Resultado</h3>
          <TransitionGroup
          component="h3"
          className="my-node"
          >
            <CSSTransition
              key={cotizacion}
              classNames="my-node"
              timeout={{ enter: 500, exit: 1000 }}
            >
              <h3 className="txt-a-r txt-secondary txt-strong resultado">$ { cotizacion }</h3>
            </CSSTransition>
          </TransitionGroup>
        </div>}
    </ResultadoDiv>
  );
};

export default Resultado