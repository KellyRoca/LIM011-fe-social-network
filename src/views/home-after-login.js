export default () => {
  const viewHome = `
    <header class="header-movil">
    <menu id="menu-movil" class="menu-movil"><i class="fas fa-bars fa-2x bars"></i></menu>
    <nav id="enlaces" class="animationOne">
      <p class="text">Mi perfil</p>
      <p class="text">Salir</p>
    </nav>
    <h1 class="logo-movil">PET LOVERS</h1>
  </header>
  <div class="list-menu-destok">
  <menu id="menu-movil-destok"><span id="nameUserHeader">Nombre de Mascota</span><i id="icon-down" class="fas fa-caret-down"></i></menu>
  <nav id="enlaces-destok" class="animationOne">
    <p class="text">Mi perfil</p>
    <p class="text">Salir</p>
  </nav>
  <h1 class="logo-destok">PET LOVERS</h1>
  <menu id="out-menu-destok">Cerrar sesión <i class="fas fa-sign-out-alt"></i></menu>
  </div>
  <main id="main-muro">
    <section class="flex section-info-muro">
      <figure class="figure-photo">
        <img id="photoProfile" class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p id="nameUser" class="name-user">Nombre de Mascota</p>
        <p class="text-grey">-- Perrito --</p>
      </div>
    </section>
    <section class="section-destok">
      <figure class="fig-portada">
        <img class="photo-info-muro" src="img/portada.jpg" alt="foto de portada">
      </figure>
      <div class="div-info-muro">
      <figure class="figure-photo">
        <img id="photoProfileDestok" class="photo" src="img/fondo-pet.jpg" alt="foto de perfil">
      </figure>
      <div>
        <p id="nameUserDestok" class="name-user">Nombre de Mascota</p>
        <p class="text-grey">-- Perrito --</p>
      </div>
      </div>
    </section>
    <div id="modal" class="modal reset">
    <figure id="flex" class="reset">
    <span id="close" type="button">x</span>
        <img id="contenido" src="" class="reset" alt="foto de perfil">
        </figure>
  </div>
    <section class="section-publics-muro">
      <form class="form">
        <textarea id = "texto" placeholder="¿Qué quieres compartir?" name="" id="" cols="37" rows="4"></textarea>
        <div class="btn-coment">
            <button class="btn-img"><i class="far fa-image icons-white"></i></button>
            <select class="comboPrivacy btns-noteEdit">
              <option value="publica">Privacidad</option>
              <option value="publica">Pública</option>
              <option value="privada">Privada</option>
            </select>
            <button class="btn-share" id = "compartir">Compartir</button>
        </div>
      </form>
      <div id="comentarios">
      </div>
    </section>
    <div id="perfil">
  </main>
  <script type="module" src="animation.js"></script>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;



  return divElement;
};
