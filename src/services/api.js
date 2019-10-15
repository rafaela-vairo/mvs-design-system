import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'https://testecontato.multisite.olimpo.tic.ufrj.br',
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/json'
  },
});

export default Api;