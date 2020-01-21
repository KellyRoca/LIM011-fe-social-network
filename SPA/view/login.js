import { loginUserEvent, loginGoogleEvent, loginFacebookEvent } from '../view-controler/login-controller.js';

export default () => {
  const loginView = `<header class="header-inicio">
<figure class="img-header">
  <img src="img/fondo-pet.jpg" alt="fondo de cabecera">
</figure>
</header>
<main class="main-home">
<h1 class="logo-home">PET LOVERS</h1>
<p id="welcome-text" class="msj text">¡Bienvenid@ PetLover!</p>
<form class="form-loging">
  <input class="input-form" type="email" placeholder="e-mail" id="email">
  <input class="input-form" type="password" placeholder="contraseña" id="password">
  <button class="btn-init" type="text" id="btnLogin"><a id= "changeView" href="#/Principal">Iniciar sesión</a></button>
  <p class="p-alert" id = "errorMensaje"><p>
  <p class="text">O bien ingresa con...</p>
  <section class="section-redes">

    <i id="btn-facebook" class="btn-icon"><img class="icon-network" src="https://img.icons8.com/color/48/000000/facebook-new.png"></i>

    <i id="btn-google" class="btn-icon"><img class="icon-network" src="https://img.icons8.com/color/48/000000/google-logo.png"></i>
  </section>
  <p class="text">¿No tienes una cuenta? <a class="text-link" href="#/Registro">Regístrate</a></p>
</form>
</main>
`;

  const divElement = document.createElement('div');
  divElement.classList.add('div-home');
  divElement.innerHTML = loginView;

  // Manejo de DOM
  const btnLogin = divElement.querySelector('#btnLogin');
  btnLogin.addEventListener('click', loginUserEvent);

  const btnGoogle = divElement.querySelector('#btn-google');
  btnGoogle.addEventListener('click', loginGoogleEvent);

  const btnFacebook = divElement.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', loginFacebookEvent);

  return divElement;
};
