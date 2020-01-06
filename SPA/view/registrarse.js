import { setdatos} from '../functions/controller-firebase.js';
import { authEmail} from '../functions/auth-firebase.js';

export default () => {
  const contentViewSignIn = `
  <header class="header-inicio">
    <figure class="img-header">
      <img src="img/fondo-pet.jpg" alt="fondo de cabecera">
    </figure>
    <a href=""><h1 class="logo-home" >PET LOVERS</h1></a>
  </header>
  <form>
    <h1>Regístrate</h1>
    <input type="text" id='nameSignIn' placeholder="Nombre" required>
    <input type="text" id='lastNameSignIn' placeholder="Apellidos" required>
    <input type="email" id ='email' placeholder="Correo electrónico" required>
    <input type="password" id ='password' placeholder="Contraseña nueva" required>
    <!-- <p>Fecha de nacimiento</p>
    <input type='date' required> -->
    <button href="" id='btnSignIn'>Crear cuenta</button>
  </form>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = contentViewSignIn;

  const funcion = () => {
    const nameUser = divElement.querySelector('#nameSignIn').value;
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    if (email !== '' && password !== '') {
      authEmail(email, password)
        .then((newUser) => {
          const datitos = {
            name: nameUser,
            email: newUser.user.email,
            photoURL: 'https://img.icons8.com/ios-glyphs/120/000000/user-female.png',
          };
          setdatos('probando', datitos);
  }
  };
  };
  // Selección de elementos del DOM
  const btnSignIn = divElement.querySelector('#btnSignIn');
  btnSignIn.addEventListener('click', (e) => {
    e.preventDefault();
   
          // window.location.hash = '#/';
        });
    // window.location.hash('');
  };
  return divElement;
};
