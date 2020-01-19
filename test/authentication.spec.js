/* eslint-disable no-console */

import {
  createUserAuth,
  loginUser,
  loginFacebook,
  currentUser,
  loginGoogle,
  outUser,
} from '../SPA/functions/user-model.js';

// configurando mock
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();

mockauth.autoFlush();
mockfirestore.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
);

// test crear usuario
describe('createUserAuth', () => {
  it('debería crear un usuario con email: prueba@prueba.com y contraseña: prueba123', () => createUserAuth('prueba@prueba.com', 'prueba123')
    .then((users) => {
      expect(users.email).toBe('prueba@prueba.com');
    }));
});

// Test observador de usuario (currentUser)
describe('currentUser', () => {
  it('debería mostrar null si no existe logueo', () => {
    currentUser();
    expect(currentUser()).toBe(null);
  });
});

// test iniciar sesión normal
describe('loginUser', () => {
  it('debería poder iniciar sesión', () => loginUser('prueba@prueba.com', 'prueba123')
    .then((users) => {
      expect(users.email).toBe('prueba@prueba.com');
    }));
});

// test iniciar con facebook
describe('loginFacebook', () => {
  it('debería poder iniciar sesión con facebook', () => loginFacebook()
    .then((users) => {
      currentUser();
      expect(users).not.toBe(null);
    }));
});

// test iniciar con google
describe('loginGoogle', () => {
  it('debería poder iniciar sesión con google', () => loginGoogle()
    .then((users) => {
      currentUser();
      expect(users).not.toBe(null);
    }));
});

// cerrar sesión
describe('outUser', () => {
  it('debería poder cerrar sesión', () => {
    loginUser('prueba@prueba.com', 'prueba123');
    console.log(currentUser());
    // el user es el email
    outUser();
    console.log(currentUser());
    // el user es null... cerraste sesión
    expect(currentUser()).toBe(null);
  });
});
