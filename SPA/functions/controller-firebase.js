// eslint-disable-next-line import/no-cycle
import { authFace, authGoogle, outUser } from './auth-firebase.js';
import { addCommentFirestore } from './post-firebase.js';


export const promAuthFace = () => authFace().then((result) => firebase.firestore().collection('users').add({
  email: result.user.email,
  name: result.user.displayName,
  photo: result.user.photoURL,
}));

export const promAuthGoogle = () => authGoogle().then((result) => firebase.firestore().collection('users').add({
  email: result.user.email,
  name: result.user.displayName,
  photo: result.user.photoURL,
}));


export const userActual = () => {
  const user = firebase.auth().currentUser;
  const infoUserActual = {
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    uid: user.uid,
  };
  return infoUserActual;
};


export const setdatos = (colecion, datos) => {
  firebase.firestore().collection(colecion).add(datos);
};

export const promOutUser = () => {
  outUser().then(() => {
  // eslint-disable-next-line no-unused-vars
  }).catch((error) => {
  });
};

// eslint-disable-next-line arrow-body-style
export const promAddCommentFirestore = (texto, privacy) => {
  return addCommentFirestore(texto, userActual, privacy).then((docRef) => docRef.id)
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
    });
};
