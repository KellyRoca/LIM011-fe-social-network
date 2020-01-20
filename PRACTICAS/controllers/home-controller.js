import { outUser, currentUser } from '../models/auth.js';
import { getDataUser, addInFirestore } from '../models/firestore.js';

export const logOutUser = (event) => {
  event.preventDefault();
  outUser()
    .then(() => {
      window.location = '';
    });
};

const addNoteInFirestore = (text, privacy) => {
  
}
// const addNoteInFirestore = (text, privacy) => {
//   const db = firebase.firestore();
//   return db.collection('publicaciones').add({
//     id: getDataUser().uid,
//     nombre: userActual().name,
//     contenido: texto.value,
//     fecha: `${time(new Date()).day}/${time(new Date()).month}/${time(new Date()).year}`,
//     hora: `${time(new Date()).hours}:${time(new Date()).minutes}`,
//     likesTotal: 0,
//     userLikes: [],
//     fechaYhora: new Date(),
//     privacidad: privacy.value,
//   });
// }
