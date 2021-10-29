import React, { useEffect } from 'react';
import styled from 'styled-components';
import EditRoundIcon from '@material-ui/icons/EditRounded';
import Tipografia from '../../../../ExibicaoDeDados/Tipografia';
import Botao from '../../../../Campos/Botao';
import Modal from '../../../../Utilidades/Modal';
import segmentosService from '../../../../../serviços/segmentosService';
import FormularioAlteraSegmento from '../FormularioAlteraSegmento';
import { Contexto } from './componentes/Contexto';

const WrapperSegmentoSelecionado = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

function SegmentoSelecionado() {
  const [modalEstahAberto, alteraModalEstahAberto] = React.useState(false);
  const [segmentoSelecionado, alteraSegmentoSelecionado] = React.useState({});
  const [segmentoPreSelecionado, alteraSegmentoPreSelecionado] = React.useState({});

  useEffect(() => {
    const { listar } = segmentosService;

    listar('Serviços de Beleza')
      .then(({ list }) => {
        alteraSegmentoSelecionado({
          id: list[0].id,
          descricao: list[0].descricao,
        });
      });
  }, []);

  return (
    <Contexto.Provider
      value={{
        alteraSegmentoPreSelecionado: (segmento) => alteraSegmentoPreSelecionado(segmento),
        segmentoPreSelecionado,
      }}
    >
      <WrapperSegmentoSelecionado>
        <Tipografia
          variant="body1"
          component="p"
        >
          Segmento Selecionado:
        </Tipografia>
        <Tipografia
          variant="h3"
          component="h1"
          color="primary"
          key={segmentoSelecionado.id}
        >
          { segmentoSelecionado.descricao }
          {' '}
          <Botao
            variant="contained"
            onClick={() => alteraModalEstahAberto(true)}
          >
            <EditRoundIcon />
          </Botao>
        </Tipografia>
      </WrapperSegmentoSelecionado>
      <Modal
        open={modalEstahAberto}
        aoFechar={() => alteraModalEstahAberto(false)}
        aoSalvar={() => {
          alteraModalEstahAberto(false);
          alteraSegmentoSelecionado(segmentoPreSelecionado);
        }}
        aria-labelledby="Editar segmento"
      >
        <FormularioAlteraSegmento />
      </Modal>
    </Contexto.Provider>
  );
}

export default SegmentoSelecionado;
