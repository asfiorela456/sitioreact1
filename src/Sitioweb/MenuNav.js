import React from 'react'

const MenuNav = () => {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
    <a class="navbar-brand" href="#">Inicio-React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target="_blank" href="https://plataformacursos2021.milaulas.com/">Curso Marketing-CMS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">IDAT-LMS</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contáctanos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" target="_blank" href="https://api.whatsapp.com/send?phone=51924519982">WhatsApp</a></li>
            <li><a class="dropdown-item" target="_blank" href="https://www.facebook.com/Idat.ActivaTuPotencial/?fref=ts">Facebook</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" target="_blank" href="https://www.instagram.com/idat.oficial/">Instagram</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Navega en la web</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
        
    )
}

export default MenuNav
