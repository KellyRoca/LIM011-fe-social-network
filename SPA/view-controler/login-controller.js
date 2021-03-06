/* eslint-disable no-unused-vars */
import {
  loginUser, loginFacebook, loginGoogle, addInFirestore, outUser,
} from '../functions/user-model.js';

export const loginUserEvent = (event) => {
  event.preventDefault();
  const buttonLogin = event.target;
  const email = buttonLogin.closest('form').querySelector('input[type=email]').value;
  const password = buttonLogin.closest('form').querySelector('input[type=password]').value;
  const errorMessage = buttonLogin.closest('div').querySelector('#errorMensaje');

  if (email !== '' && password !== '') {
    loginUser(email, password)
      .then(() => {
        window.location.hash = '#/Catalogo';
      }).catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage.innerHTML = 'El correo electrónico no es válido';
            break;
          case 'auth/user-disabled':
            errorMessage.innerHTML = 'El usuario ha sido deshabilitado de la base de datos';
            break;
          case 'auth/user-not-found':
            errorMessage.innerHTML = 'No se encontró ningún usuario con ese correo electrónico';
            break;
          case 'auth/wrong-password':
            errorMessage.innerHTML = 'La contraseña es incorrecta.';
            break;
          default:
            errorMessage.innerHTML = 'Se produjo un error';
            break;
        }
      });
  } else {
    errorMessage.innerHTML = 'Ingrese todos los campos.';
  }
};

export const loginFacebookEvent = (event) => {
  event.preventDefault();
  loginFacebook()
    .then((result) => {
      const uidUser = result.user.uid;
      const dataUser = {
        name: result.user.displayName,
        photo: result.user.photoURL,
        email: result.user.email,
      };
      addInFirestore('users', uidUser, dataUser);
      window.location.hash = '#/Catalogo';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
    });
};

export const loginGoogleEvent = (event) => {
  event.preventDefault();
  loginGoogle()
    .then((result) => {
      const uidUser = result.user.uid;
      const dataUser = {
        name: result.user.displayName,
        photo: result.user.photoURL,
        email: result.user.email,
      };
      addInFirestore('users', uidUser, dataUser);
      window.location.hash = '#/Catalogo';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
    });
};

export const outSesion = (event) => {
  event.preventDefault();
  outUser()
    .then(() => {
      window.location = '';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
    });
};
