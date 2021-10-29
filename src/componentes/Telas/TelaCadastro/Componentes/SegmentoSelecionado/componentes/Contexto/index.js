import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const Contexto = React.createContext({
  alteraSegmentoPreSelecionado: () => {},
  segmentoPreSelecionado: {},
});
