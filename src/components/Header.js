import React from 'react';
import styled from '@emotion/styled';

/*=================================================================================
*	 Styled Components
* --------------------------------------------------------------------------------*/
const H1 = styled.h1`
  font-family: var(--font-1);
  font-weight: 600;
  color: var(--secondary);
`;

/* ============================================================================= */


const Header = () => {
  return (
    <header className="bg-white txt-a-c p-2">
      <H1><i className="a-outlined_flag i-h-flip"></i>pm/SEGUROS</H1>
    </header>
  );
};

export default Header