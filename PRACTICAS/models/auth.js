/* eslint-disable max-len */
export const createNewUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const loginWithEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const loginWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const currentUser = () => firebase.auth().currentUser;

export const outUser = () => firebase.auth().signOut();
