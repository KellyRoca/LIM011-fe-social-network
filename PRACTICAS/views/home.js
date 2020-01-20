import { getDataUser } from '../models/firestore.js';
import { currentUser } from '../models/auth.js';
import { userDataView } from './data-user.js';
import { logOutUser } from '../controllers/home-controller.js';

export default () => {
  const viewHome = `
  <header class = "navigation">
    <h2 id ="name-current-user"></h2>
    <h1>Pet Lovers</h1>
    <h2><button id="out-user"></button> Cerrar sesión</h2>
  </header>
  <main>
    <section id="user-information"></section>
    <section id="post-section">
      <form class="form">
        <textarea id="create-post" cols="38" rows="5" placeholder="¿Qué quieres compartir?"></textarea>
        <div id="btns-form">
          <label><img src="https://img.icons8.com/flat_round/64/000000/image-file.png"></label>
          <select class="privacy">
            <option selected value="public">Público</option>
            <option value="private">Privado</option>
          </select>
          <label id="btn-send-post"><img src="https://img.icons8.com/color/48/000000/filled-sent.png"></label>
        </div>
      </form>
      <section id="all-posts"></section>
    </section>
  </main>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  // Pintar datos de usuario logeado
  const userInformation = divElement.querySelector('#user-information');
  const nameCurrentUserNav = divElement.querySelector('#name-current-user');

  getDataUser((data) => {
    data.forEach((user) => {
      if (user.id === currentUser().uid) {
        userInformation.innerHTML = userDataView(user);
        nameCurrentUserNav.innerHTML = user.name;
      }
    });
  });

  // const findCurrentUserDatabase = (data) => {
  //   const dataCurrentUser = [];
  //   data.forEach((user) => {
  //     if (user.id === currentUser().uid) {
  //       dataCurrentUser.push({ nameCurrentUser: user.name, emailCurrentUser: user.email });
  //     }
  //   });
  //   return dataCurrentUser;
  // };
  const pruebauseractual = () => {
    firebase.auth().onAuthStateChanged((user) => {
      let data = '';
      firebase.firestore().collection('users').doc(user.uid).get()
        .then((doc) => {
          data = doc.data();
          console.log(data);
          return data;
        });
    });
  };

 console.log(pruebauseractual());


  // console.log(currentUser().uid);
  // let datos = [];
  // firebase.firestore().collection('users').doc(currentUser().uid).get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       datos = doc.data();
  //     }
  //   });
  // console.log(datos.name);

  // console.log(getDataUser(findCurrentUserDatabase));

  // Agregar comentarios
  const textareaToPost = divElement.querySelector('#create-post').value;
  const btnPostNote = divElement.querySelector('#btn-send-post');
  const privacy = divElement.querySelector('.privacy').value;


  // Cerrar sesión
  const signOutUser = divElement.querySelector('#out-user');
  signOutUser.addEventListener('click', logOutUser);

  return divElement;
};
