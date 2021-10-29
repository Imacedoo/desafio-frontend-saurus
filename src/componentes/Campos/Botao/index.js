import React from 'react';
import { Button as BotaoBase } from '@material-ui/core';

function Botao({ ...props }) {
  return (
    <BotaoBase {...props} />
  );
}

export default Botao;
