async function requisicaoHttp(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((responseServer) => {
      if (responseServer.ok) {
        return responseServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor');
    });
}

export default requisicaoHttp;
