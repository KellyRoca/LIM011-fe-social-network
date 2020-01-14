/* eslint-disable no-unused-vars */
import {
  loginUser, loginFacebook, loginGoogle, addInFirestore, outUser,
} from '../functions/user-model.js';

export const loginUserEvent = (event) => {
  event.preventDefault();
  const btnLogin = event.target;
  const email = btnLogin.closest('form').querySelector('input[type=email]').value;
  const password = btnLogin.closest('form').querySelector('input[type=password]').value;
  if (email !== '' && password !== '') {
    loginUser(email, password).catch((error) => {
      const errorCode = error.code;
    });
  }
};

export const loginFacebookEvent = (event) => {
  event.preventDefault();
  loginFacebook()
    .then((result) => {
      const uidUser = result.user.uid;
      const dataUser = {
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
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
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        email: result.user.email,
      };
      addInFirestore('users', uidUser, dataUser);
      window.location.hash = '#/Catalogo';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
    });
};

export const OutSesion = (event) => {
  event.preventDefault();
  outUser()
    .then(() => {
      window.location.hash = '#/login';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
    });
};
