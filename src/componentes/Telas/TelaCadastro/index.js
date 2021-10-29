import React from 'react';
import styled from 'styled-components';
import Header from './Componentes/Header';
import BotoesNavegacao from './Componentes/BotoesNavegacao';
import SegmentoSelecionado from './Componentes/SegmentoSelecionado';

const WrapperTelaCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height:calc(100vh - 24px);
`;

function TelaCadastro() {
  return (
    <WrapperTelaCadastro>
      <Header />
      <SegmentoSelecionado />
      <BotoesNavegacao />
    </WrapperTelaCadastro>
  );
}

export default TelaCadastro;
