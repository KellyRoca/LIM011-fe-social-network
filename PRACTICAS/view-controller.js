import { components } from './views/components.js';

const changeView = (route) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (route) {
    case '':
    { return container.appendChild(components.login()); }
    case '#/Registro':
    { return container.appendChild(components.register()); }
    case '#/Home':
    { return container.appendChild(components.home()); }
    default:
    { return container.appendChild(components.notFound()); }
  }
};

export { changeView };
