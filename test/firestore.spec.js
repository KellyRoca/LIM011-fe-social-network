// import MockFirebase from 'mock-cloud-firestore';
// import { addInFirestore } from '../SPA/functions/user-model.js';

// const dataUsers = {
//   __collection__: {
//     users: {
//       __doc__: {
//         user0: {
//           email: 'user0@prueba.com',
//         },
//       },
//     },
//   },
// };

// global.firebase = new MockFirebase(dataUsers, { isNaiveSnapshotListenerEnabled: true });

// // Test crear colecciones
// describe('addInFirestore', () => {
//   it('debería agregar a la colección users un doc con nombre:user1 y un set de datos', () => {
//     const datos = {
//       email: 'prueba@prueba.com',
//     };
//     return addInFirestore('users', 'user1', datos)
//     .then(() => )
//     expect(mo).toBe();
//   });
// });

// it('Debería porder agregar una nota', (done) => {
//   return addNote('preparar la pildora')
//     .then(() => getNotes(
//       (data) => {
//         const result = data.find((note) => note.title === 'preparar la pildora');
//         expect(result.title).toBe('preparar la pildora');
//         done()
//       }
//     ))
// });
