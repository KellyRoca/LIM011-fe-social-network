export const userDataView = (userInfo) => {
  const user = document.createElement('div');
  const viewUser = `
    <img class="background" src="img/fondo-pet.jpg">
    <div class="info-user">
        <img id="photo" src="${userInfo.photo}">
        <div>
            <p id="name" >${userInfo.name}</p>
            <p id="email" >${userInfo.email}</p>
        </div>
    </div>
      `;
  user.innerHTML = viewUser;
  return viewUser;
};
