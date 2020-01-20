import { loginWithEmail, loginWithFacebook, loginWithGoogle } from '../models/auth.js';
import { addInFirestore } from '../models/firestore.js';

export const loginWithEmailEvent = (event) => {
  event.preventDefault();
  const buttonLogin = event.target;
  const email = buttonLogin.closest('div').querySelector('[type=email]').value;
  const password = buttonLogin.closest('div').querySelector('[type=password]').value;
  const errorMessage = buttonLogin.closest('div').querySelector('p');


  if (email !== '' && password !== '') {
    loginWithEmail(email, password)
      .then(() => {
        window.location.hash = '#/Home';
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

export const loginWithGoogleEvent = (event) => {
  event.preventDefault();
  loginWithGoogle()
    .then((result) => {
      const uidUser = result.user.uid;
      const dataUser = {
        name: result.user.displayName,
        photo: result.user.photoURL,
        email: result.user.email,
      };
      addInFirestore('users', uidUser, dataUser);
      window.location.hash = '#/Home';
    });
};

export const loginWithFacebookEvent = (event) => {
  event.preventDefault();
  loginWithFacebook()
    .then((result) => {
      const uidUser = result.user.uid;
      const dataUser = {
        name: result.user.displayName,
        photo: result.user.photoURL,
        email: result.user.email,
      };
      addInFirestore('users', uidUser, dataUser);
      window.location.hash = '#/Home';
    });
};
