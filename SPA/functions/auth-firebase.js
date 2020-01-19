/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { changeView } from '../view-controler/index.js';

export const initFire = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log('gsddgs', user);
    if (user) {
      console.log('conectado');
      changeView('#/catalogo');
    } else {
      console.log('El usuario NO stá conectado');
      changeView('');
    }
  });
};
// Crear usuario con email y password
export const createUserAuth = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};

// Loguearse con email y password
export const logInUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

// Auth con Facebook
export const authFace = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Auth con Google
export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Observador del usuario
export const currentUser = () => firebase.auth().currentUser;

// Crear en colecciones en Firestore
export const addInFirestore = (nameCollection, id, set) => {
  const addCollection = firebase.firestore().collection(nameCollection).doc(id).set(set);
  return addCollection;
};

// Salir de sesión
export const outUser = () => firebase.auth().signOut();
