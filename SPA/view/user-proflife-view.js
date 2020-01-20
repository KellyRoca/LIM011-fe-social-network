export const userDataView = (userInfo) => {
  const user = document.createElement('div');
  const viewUser = `
  <figure class = "figure.photo">
  <img id="photoProlifeDestok" class = "photo"  src="${userInfo.photo}" alt="foto de perfil">
  </figure>
    <div>
            <p id="nameUserDestok" >${userInfo.name}</p>
            <p class="text-grey">-- Perrito --</p>
            </div>
      `;
  user.innerHTML = viewUser;
  return viewUser;
};
