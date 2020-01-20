import { changeView } from './view-controller.js';

console.log(window.location.hash);
const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDO-D73bEtrrYuIQQ-sEK_7MGKr3IVIXIw',
    authDomain: 'pets-f42de.firebaseapp.com',
    databaseURL: 'https://pets-f42de.firebaseio.com',
    projectId: 'pets-f42de',
    storageBucket: 'pets-f42de.appspot.com',
    messagingSenderId: '946408972347',
    appId: '1:946408972347:web:330c5cab5dc767811f7c1e',
    measurementId: 'G-4896FLX2RP',
  };
  firebase.initializeApp(firebaseConfig);

  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
