import components from '../views/components-views.js';

const changeView = (hash) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '#/':
    case '#/login':
      return container.appendChild(components.login());
    case '#/Registro':
      return container.appendChild(components.register());
    case '#/Principal':
      return container.appendChild(components.register());
    default:
      return container.appendChild(components.login());
  }
};

export default changeView;
