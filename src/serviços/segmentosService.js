import requisicaoHttp from '../infra/http/requisicaoHttp';

const BASE_URL = 'https://apisaurussegmentos.azurewebsites.net/api/segmentos';

const segmentosService = {
  listar: async (filtro) => requisicaoHttp(`${BASE_URL}?Descricao=${filtro}`, {}),
};

export default segmentosService;
