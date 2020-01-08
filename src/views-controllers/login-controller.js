import {
  loginUser, loginFacebook, loginGoogle, addInFirestore, outUser,
} from '../model/user-model.js';

export const loginUserEvent = (event) => {
  event.preventDefault();
  const btnLogin = event.target;
  const email = btnLogin.closest('form').querySelector('input[type=email]').value;
  const password = btnLogin.closest('form').querySelector('input[type=password]').value;
  if (email !== '' && password !== '') {
    loginUser(email, password).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
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
      addInFirestore('probando', uidUser, dataUser);
      window.location.hash = '#/Principal';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
      console.log(errorCode, erroMessage);
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
      addInFirestore('probando', uidUser, dataUser);
      window.location.hash = '#/Principal';
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
      console.log(errorCode, erroMessage);
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
      console.log(errorCode, erroMessage);
    });
};
