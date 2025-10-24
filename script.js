document.addEventListener('DOMContentLoaded', function() {
  // Inicializar Sidenav
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // Inicializar modales
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  //Inicializar navbar
  var navbar = document.querySelectorAll('.navbar');
  M.Sidenav.init(navbar);

    // Inicializar Collapsible (si decides usarlo en otras secciones)
  var collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);

});
