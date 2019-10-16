import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'https://testecontato.multisite.olimpo.tic.ufrj.br',
});

export default Api;