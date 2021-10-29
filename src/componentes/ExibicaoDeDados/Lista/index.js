import React from 'react';
import { List, ListItemText, ListItemButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperLista = styled(List)`
  overflow: auto;
  height: 100%;
`;

export function ItemLista({ funcao, texto }) {
  return (
    <ListItemButton
      onClick={() => funcao()}
    >
      <ListItemText primary={texto} />
    </ListItemButton>
  );
}

function Lista({ children }) {
  return (
    <WrapperLista>
      {children}
    </WrapperLista>
  );
}

ItemLista.propTypes = {
  funcao: PropTypes.func,
  texto: PropTypes.string.isRequired,
};

ItemLista.defaultProps = {
  funcao: () => {},
};

Lista.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Lista;
