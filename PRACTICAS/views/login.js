import {
  loginWithEmailEvent,
  loginWithGoogleEvent,
  loginWithFacebookEvent,
} from '../controllers/login-controller.js';

export default () => {
  const viewLogin = `
  <header></header>
  <main>
    <a href = ""><h1>Pet Lovers</h1></a>
    <h2>Bienvenid@ a Pet Lovers, la red social sobre mascotas.</h2>
    <form class="form">
      <input class="input-form" type="email" placeholder="Correo Electrónico">
      <input class="input-form" type="password" placeholder="Contraseña">
      <button id="btn-loginEmail">Iniciar sesión</button>
      <p></p>
    </form>
    <h2>O bien con...</h2>
    <button id="btn-loginGoogle"><img class="icon-network" src="https://img.icons8.com/color/48/000000/google-logo.png"></button>
    <button id="btn-loginFacebook"><img class="icon-network" src="https://img.icons8.com/color/48/000000/facebook-new.png"></button>
    <h2>¿No tienes una cuenta? <a href="#/Registro">Regístrate</a></h2>
  </main>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  // DOM
  const btnLoginWithEmail = divElement.querySelector('#btn-loginEmail');
  btnLoginWithEmail.addEventListener('click', loginWithEmailEvent);

  const btnLoginWithGoogle = divElement.querySelector('#btn-loginGoogle');
  btnLoginWithGoogle.addEventListener('click', loginWithGoogleEvent);

  const btnLoginWithFacebook = divElement.querySelector('#btn-loginFacebook');
  btnLoginWithFacebook.addEventListener('click', loginWithFacebookEvent);

  return divElement;
};
