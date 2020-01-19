/* eslint-disable import/no-cycle */
import Login from './login.js';
// eslint-disable-next-line import/no-cycle
import Catalogo from './catalogo.js';
import Diferent from './404.js';
import viewRegister from './registrarse.js';
import Perfil from './profile.js';

export const components = {
  login: Login,
  catalogo: Catalogo,
  diferent: Diferent,
  perfil: Perfil,
  register: viewRegister,
};
