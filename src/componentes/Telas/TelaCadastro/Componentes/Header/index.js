import React from 'react';
import styled from 'styled-components';
import Tipografia from '../../../../ExibicaoDeDados/Tipografia';

const EmbrulhoHeader = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

function Header() {
  return (
    <EmbrulhoHeader>
      <Tipografia
        variant="h3"
        component="h1"
        color="primary"
      >
        Segmento da Empresa
      </Tipografia>
      <Tipografia
        variant="body1"
        component="p"
      >
        {/* eslint-disable-next-line max-len */}
        Confirme o segmento que sua empresa atua para personalizarmos sua experiência em nosso aplicativo
      </Tipografia>
    </EmbrulhoHeader>
  );
}

export default Header;
