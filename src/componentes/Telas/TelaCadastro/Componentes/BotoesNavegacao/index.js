import React from 'react';
import styled from 'styled-components';
import Botao from '../../../../Campos/Botao';

const WrapperNavegacao = styled.div`
  display: flex;
  justify-content: space-around;
`;

function BotoesNavegacao() {
  return (
    <WrapperNavegacao>
      <Botao
        variant="outlined"
      >
        Voltar
      </Botao>
      <Botao
        variant="contained"
      >
        Finalizar Cadastro
      </Botao>
    </WrapperNavegacao>
  );
}

export default BotoesNavegacao;
