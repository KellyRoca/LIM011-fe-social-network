export default () => {
  const viewNotFound = `
  <h1 class="logo">404 -PAGINA NO ENCONTRADA</h1>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewNotFound;

  return divElement;
};