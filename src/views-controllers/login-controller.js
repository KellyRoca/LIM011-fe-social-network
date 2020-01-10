import {
  loginUser, loginFacebook, loginGoogle, addInFirestore, outUser,
} from '../model/user-model.js';

export const loginUserEvent = (event) => {
  event.preventDefault();
  const buttonLogin = event.target;
  const email = buttonLogin.closest('form').querySelector('[type=email]').value;
  const password = buttonLogin.closest('form').querySelector('[type=password]').value;
  if (email !== '' && password !== '') {
    loginUser(email, password)
      .then(() => {
        window.location.hash = '#/Principal';
      }).catch((error) => {
        const errorCode = error.code;
        const erroMessage = error.message;
        console.log(errorCode, erroMessage);
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
