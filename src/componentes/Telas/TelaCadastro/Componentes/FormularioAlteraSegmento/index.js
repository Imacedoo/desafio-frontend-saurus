import React from 'react';
import CampoDeTexto from '../../../../Campos/CampoDeTexto';
import Tipografia from '../../../../ExibicaoDeDados/Tipografia';
import Lista, { ItemLista } from '../../../../ExibicaoDeDados/Lista';
import segmentosService from '../../../../../serviços/segmentosService';
import { Contexto } from '../SegmentoSelecionado/componentes/Contexto';

function FormularioAlteraSegmento() {
  const [filtro, alteraFiltro] = React.useState('');
  const [segmentosFiltrados, alteraSegmentosFiltrados] = React.useState([]);

  const contextoSegmentoSelecionado = React.useContext(Contexto);

  const onChange = (event) => {
    alteraFiltro(event.target.value);
  };

  const filtra = (event) => {
    const { listar } = segmentosService;
    const inputVazio = event.target.value === '';

    if (!inputVazio) {
      listar(filtro)
        .then(({ list }) => {
          alteraSegmentosFiltrados(list);
        });
      return;
    }
    alteraSegmentosFiltrados([]);
  };

  return (
    <>
      <Tipografia
        variant="body1"
        component="p"
      >
        {/* eslint-disable-next-line max-len */}
        Selecione abaixo o segmento que mais se aproxima com o ramo de atividade de sua empresa.
        {' '}
        <br />
        <strong>Segmento selecionado:</strong>
        {' '}
        {contextoSegmentoSelecionado.segmentoPreSelecionado?.descricao}
      </Tipografia>
      <CampoDeTexto
        id="outlined-name"
        margin="normal"
        fullWidth
        label="Digite o segmento para filtrar"
        placeholder="Ex: Restaurante"
        value={filtro}
        onChange={onChange}
        onKeyUp={filtra}
      />
      <Lista>
        { segmentosFiltrados?.map((segmento) => (
          <ItemLista
            key={segmento.id}
            texto={segmento.descricao}
            funcao={() => contextoSegmentoSelecionado.alteraSegmentoPreSelecionado({
              id: segmento.id,
              descricao: segmento.descricao,
            })}
          />
        ))}
      </Lista>
    </>
  );
}

export default FormularioAlteraSegmento;
