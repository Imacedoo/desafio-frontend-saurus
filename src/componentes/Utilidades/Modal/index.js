import React from 'react';
import { Modal as ModalBase } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Botao from '../../Campos/Botao';

const WrapperModal = styled.div`
  background-color: #FFF;
  box-shadow: -10px 0 24px rgba(7, 12, 14, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 400px;
`;

const BotoesAcoes = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Modal({
  children, aoFechar, aoSalvar, ...props
}) {
  return (
    <ModalBase {...props}>
      <WrapperModal>
        { children }
        <BotoesAcoes>
          <Botao
            variant="outlined"
            onClick={() => aoFechar()}
          >
            Voltar
          </Botao>
          <Botao
            variant="contained"
            onClick={() => aoSalvar()}
          >
            Salvar
          </Botao>
        </BotoesAcoes>
      </WrapperModal>
    </ModalBase>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  aoFechar: PropTypes.func.isRequired,
  aoSalvar: PropTypes.func.isRequired,
};

export default Modal;
