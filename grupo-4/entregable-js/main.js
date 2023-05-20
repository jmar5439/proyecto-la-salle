document.addEventListener("keydown", function (event) {
  // Obtener el valor de la tecla presionada
  var tecla = event.key;
 if(!event.target.closest("form")){
  // Determinar a qué sección se debe desplazar la página
  
  switch (tecla) {
    case "1":
      window.location = "#we";
      break;
    case "2":
      window.location = "#services";
      break;
    case "3":
      window.location = "#portfolio";
      break;
    case "4":
      window.location = "#location";
      break;
    case "5":
      window.location = "#contact";
      break;
    case "h":
      showModal();
      break;
    default:
      console.log(tecla);
      break;
  }
}





});
let showModal = function () {
  let modal = document.querySelector('[aria-label="navigationHelp"]');

  //  modal.classList.add('show');
  //modal.style.display = 'block';
  // modal.style.paddingLeft = 0;
  modal.innerHTML = modalContent;
  var myModal = new bootstrap.Modal(modal)
  myModal.show();
  hideModal(modal, 6000);
}



let modalContent = `<div class="modal-dialog">
    <div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">Activaste la ayuda de búsqueda</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <p>Modal body text goes here.</p>
  </div>
</div>
</div>`;


async function hideModal(modal, tiempo) {
  // const modal = modal;
  // cerrar el modal después de 3 segundos
  await cerrarModal(modal, tiempo);
  console.log("mensaje de salida");
}


function cerrarModal(modal, tiempo) {
  let instance = bootstrap.Modal.getInstance(modal);
  return new Promise((resolve, reject) => {
    modal.addEventListener("hidden.bs.modal", () => {
      console.log("El modal ha sido cerrado");
      resolve();
    }, { once: true });


    const cerrar = () => {
      try {
        instance.hide();
      } catch (error) {
        console.error("No se ha podido realizar la acción")
        reject(error);
      }
    }
    setTimeout(cerrar, tiempo);
  });
}


