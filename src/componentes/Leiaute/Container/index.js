import React from 'react';
import PropTypes from 'prop-types';
import { Container as ContainerBase } from '@material-ui/core';

function Container({ children }) {
  return (
    <ContainerBase>
      {children}
    </ContainerBase>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
