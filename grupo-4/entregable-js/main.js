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
    case "p":
        previousSection();
        break;
    case "n":
      nextSection();
      break;
    default:
      console.log(tecla);
      break;
  }
}

});

function previousSection() {
  var sections = document.querySelectorAll("section"); // Assuming sections have a common selector

  // Find the current section based on scroll position
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionId = section.getAttribute("id");
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    var windowHeight = window.innerHeight; // Height of the window viewport
    var windowCenter = window.scrollY + (windowHeight / 2); // Vertical center of the window

    if (windowCenter >= sectionTop && windowCenter < sectionTop + sectionHeight) {
      if (i > 0) {
        window.location = "#" + sections[i - 1].getAttribute("id");
      }
      else if (i === 0) {
        window.location = "#" + sections[sections.length - 1].getAttribute("id");
      }

      break;
    }
  }
}

function nextSection() {
  var sections = document.querySelectorAll("section"); // Assuming sections have a common selector

  // Find the current section based on scroll position
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionId = section.getAttribute("id");
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    var windowHeight = window.innerHeight; // Height of the window viewport
    var windowCenter = window.scrollY + (windowHeight / 2); // Vertical center of the window

    if (windowCenter >= sectionTop && windowCenter < sectionTop + sectionHeight) {
      if (i > 0) {
        window.location = "#" + sections[i + 1].getAttribute("id");
      }
      else if (i === 0) {
        window.location = "#" + sections[sections.length - 1].getAttribute("id");
      }
      break;
    }
  }
}

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

// Function to save the current section in localStorage
function saveCurrentSection() {
  var sections = document.querySelectorAll("section"); // Assuming sections have a common selector

  // Find the current section based on scroll position
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionId = section.getAttribute("id");
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      localStorage.setItem("currentSection", sectionId);
      break;
    }
  }

  var currentSection = localStorage.getItem("currentSection");
  console.log("Current section:", currentSection);
}

// Event listener for scroll event
window.addEventListener("scroll", saveCurrentSection);

// Example usage
var currentSection = localStorage.getItem("currentSection");
console.log("Current section:", currentSection);
