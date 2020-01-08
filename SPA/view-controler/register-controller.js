import { createUserAuth, addInFirestore } from '../functions/auth-firebase.js';

export default (event) => {
  event.preventDefault();
  const buttonRegister = event.target;
  const email = buttonRegister.closest('form').querySelector('input[type=email]').value;
  const password = buttonRegister.closest('form').querySelector('input[type=password]').value;
  const nameUser = buttonRegister.closest('form').querySelector('input[type=text]').value;
  const lastNameUser = buttonRegister.closest('form').querySelector('input[name=latName]').value;
  const space = ' ';
  const nameCompleteUser = nameUser + space + lastNameUser;

  if (email !== '' && password !== '') {
    createUserAuth(email, password)
      .then((result) => {
        const uidUser = result.user.uid;
        const dataUser = {
          displayName: nameCompleteUser,
          photoURL: 'https://icons8.com/icon/23265/ios-filled',
          email: result.user.email,
        };
        addInFirestore('probando', uidUser, dataUser);
      });
  }
};
