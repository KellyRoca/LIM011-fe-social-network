import { changeView } from './view-controler/index.js';

const init = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyDKaqE2NpTEwcOS0rWDwUuVCJ94fcApoiQ',
    authDomain: 'pet-lovers-5dca4.firebaseapp.com',
    projectId: 'pet-lovers-5dca4',
  });


  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
