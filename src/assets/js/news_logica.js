/* Filtrado */

let reestablecer = (product) => {
  let desabilitador = document.getElementsByClassName('deshabilitarFiltro')[0];
  desabilitador.addEventListener('click', () => {
    for(let newProducto of product) {
        newProducto.classList.remove('d-none');
        newProducto.classList.remove('d-inline');
      }
  });
}

function buscarCategoria(opcion) {
  let texto = opcion.textContent;
  let productos = document.getElementsByClassName('card-body');

  for(let producto of productos) {
    let textoCarta = producto.querySelector('p');
    if(textoCarta == texto) {
      opcion.classList.add('d-inline');
    } else {
      opcion.classList.add('d-none');
    }
  }
}

let filtrado = () => {
  let seleccion = document.getElementsByClassName('filtrado');

  for(let selecionado of seleccion) {
    selecionado.addEventListener('click', () => {
      let texto = selecionado.textContent;
      let productos = document.getElementsByClassName('recorrer4');

      reestablecer(productos); 

      for(let producto of productos) {
        
        let carta = producto.querySelector('p.textoFiltrado');
        if (carta == undefined) {
          break;
        }
        let textoCarta = carta.textContent;

        if(textoCarta == texto) {
          producto.classList.remove('d-none');
          producto.classList.add('d-inline');
        } else {
          producto.classList.remove('d-inline');
          producto.classList.add('d-none');
        }
      }
    });
  }
}

filtrado();

// Filtrado por el Bucador

let filtradoBuscador = () => {
  let input = document.getElementById('inputModalSearch');
  let boton = document.getElementById('botonBuscar');
  boton.addEventListener('click', () => {
    let texto = input.value;
    let productos = document.getElementsByClassName('recorrer4');
    

    reestablecer(productos); 

    for(let producto of productos) {
      
      let carta = producto.querySelector('p.textoFiltrado');
      if (carta == undefined) {
        break;
      }
      let textoCarta = carta.textContent.toLowerCase();

      if(textoCarta.includes(texto.toLowerCase())) {
        producto.classList.remove('d-none');
        producto.classList.add('d-inline');
      } else {
        producto.classList.remove('d-inline');
        producto.classList.add('d-none');
      }
    }
    input.value = '';
  });
}

filtradoBuscador();