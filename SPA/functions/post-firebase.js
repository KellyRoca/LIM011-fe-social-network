/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-cycle
import { time } from './functions-dom.js';

export const addCommentFirestore = (texto, userActual, privacy) => {
  const db = firebase.firestore();
  return db.collection('publicaciones').add({
    id: userActual().uid,
    nombre: userActual().name,
    contenido: texto.value,
    fecha: `${time(new Date()).day}/${time(new Date()).month}/${time(new Date()).year}`,
    hora: `${time(new Date()).hours}:${time(new Date()).minutes}`,
    likes: 0,
    fechaYhora: new Date(),
    privacidad: privacy.value,
  });
};

export const showAllComments = (fnGetData) => {
  // removeChild(container);
  // console.log(container);
  const docRef = firebase.firestore().collection('publicaciones');
  docRef.orderBy('fechaYhora', 'desc').onSnapshot((allDocs) => {
    // if (allDocs.size >= 1) {
    const arrData = [];
    allDocs.forEach((doc) => {
      const obj = {
        id: doc.id,
        data: doc.data(),
      };
      arrData.push(obj);
      /* createComment(container, doc); */
    });
    fnGetData(arrData);
  //  }
  });
};

export const deleteComment = (id) => {
  firebase.firestore().collection('publicaciones').doc(id).delete()
    .then(() => {
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
    });
};

export const newText = (texto, id, privacy) => {
  const ref = firebase.firestore().collection('publicaciones').doc(id);
  return ref.update({
    contenido: texto.value,
    privacidad: privacy,
  })
    .then(() => {
    })
    .catch((error) => {
    // The document probably doesn't exist.
    });
};

export const editCommentDom = (texto) => {
  texto.disabled = false;
  texto.focus();
};

export const saveNewComment = (texto, id, privacy) => {
  newText(texto, id, privacy);
  texto.disabled = true;
};

export const iterateComments = (data, createComment, container) => {
  data.forEach((doc) => {
    createComment(container, doc);
  });
};
