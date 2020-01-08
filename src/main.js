import changeView from './routers/router.js';

const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash));

  const firebaseConfig = {
    apiKey: 'AIzaSyDKaqE2NpTEwcOS0rWDwUuVCJ94fcApoiQ',
    authDomain: 'pet-lovers-5dca4.firebaseapp.com',
    databaseURL: 'https://pet-lovers-5dca4.firebaseio.com',
    projectId: 'pet-lovers-5dca4',
    storageBucket: 'pet-lovers-5dca4.appspot.com',
    messagingSenderId: '436468793619',
    appId: '1:436468793619:web:15dd2258df453fbebc9ae6',
    measurementId: 'G-2R2T3YW2R6',
  };
  firebase.initializeApp(firebaseConfig);
  changeView(window.location.hash);
};

window.addEventListener('load', init);
