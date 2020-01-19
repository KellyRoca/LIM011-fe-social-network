import createUser from '../view-controler/register-controller.js';

export default () => {
  const registerView = `<header class="header-inicio">
    <figure class="img-header">
      <img src="img/fondo-pet.jpg" alt="fondo de cabecera">
    </figure>
    <a href=""><h1 class="logo-home" >PET LOVERS</h1></a>
  </header>
  <main class = 'register-main'>
  <form class "form-loging" >
    <h1>Regístrate</h1>
    <input type="text" id='nameSignIn' placeholder="Nombre" required>
    <input type="text" id='lastNameSignIn' name= 'lastName' placeholder="Apellidos" required>
    <input type="email" id ='email' placeholder="Correo electrónico" required>
    <input type="password" id ='password' placeholder="Contraseña nueva" required>
    <button href="" id='btnRegister'>Crear cuenta</button>
    <p id="error-message"></p>
  </form>
  </main>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = registerView;

  // Selección de elementos del DOM
  const buttonRegister = divElement.querySelector('#btnRegister');
  buttonRegister.addEventListener('click', createUser);

  return divElement;
};
