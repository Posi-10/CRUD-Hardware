/** Variables **/
// creamos nuestras variables llamando a la clase de bootstrap para espesificar nuestras modales gracias al DOM seleccionando el ID de cada modal por separado 
const submitModal = new bootstrap.Modal(document.getElementById('submitModal'));
const updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
// Creamos nuestras variables identificando nuestros objetos para identificar nuestros imput y div para darle formato a la imagen
const submitLink = document.querySelector('#submitLinkImg');
const submitImagen = document.querySelector('#submitImg');
const updateLink = document.querySelector('#updateLinkImg');
const updateImagen = document.querySelector('#updateImg');
// Construcion de la funcion para ontener un nuesteos eventos 
const on = (element, event, selector, handler) => {
  // Permite escuchar las acciones seleccionadas
  element.addEventListener(event, (e) => {
    // El .closest devuelve el ascediente mas cercano del elemanto actual si no no lo encuentra manda un NULL
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};
// Creamos la funcion que escuche el objeto o elemento mediante teclea
const watchImg = (element, selector) => {
  element.addEventListener('keyup', () => {
    // detecta si tenemos un selector hijo en el elemento
    if(selector.childElementCount){
      // si es el caso lo borra
      selector.removeChild(document.querySelector('#mostartImgSubmit'))
    }
    // llamamos la funcion de crear imagen
    createImg( element.value, selector );
  });
};
// Creamos la funcion de crear imagen
const createImg = (uriImg, selector ) => {
  // Creamos nuesto HTML que va ser dinamico y poniendole su ubicacion para visualizar la imagen
  const htmlimg = `<img id='mostartImgSubmit' src="${uriImg}" class="img-fluid"/>`;
  // creamos eun elemento div
  const div = document.createElement('div');
  // el elemento div le ponemos el HTML creado
  div.innerHTML = htmlimg;
  // del mismo div solo agregamos el el hijo del elemento creado
  selector.append(div.firstChild);
};
// llamanos la funcion de escuchar los elemento 
on(document, 'click', '#btnActualizar', (e) => {
  // hacemos las variables para que nos muestre el elemento padre de nuestro elemento
  const data = e.target.parentNode.parentNode;
  const img = e.target.parentNode.parentNode.parentNode;
  // le asignamos los valores deperiendo la situacion que queramos vizualiar
  document.querySelector("#updateId").value = data.children[0].children[2].childNodes[0].nodeValue;
  document.querySelector("#updateHardware").value = data.children[1].children[0].childNodes[1].nodeValue
  document.querySelector("#updateName").value = data.children[0].children[0].childNodes[2].nodeValue
  document.querySelector("#updateModel").value = data.children[1].children[1].childNodes[1].nodeValue
  document.querySelector("#updateMarca").value = data.children[1].children[2].childNodes[1].nodeValue
  document.querySelector("#updateYear").value = data.children[1].children[4].childNodes[1].nodeValue
  document.querySelector("#updateDescripcion").value = data.children[1].children[3].childNodes[1].nodeValue
  document.querySelector("#updateLinkImg").value = img.children[0].children[0].src
  document.querySelector("#mostartImgSubmit").src = img.children[0].children[0].src
  // mostramos nuestra modal
  updateModal.show();
});

on(document, 'click', '#btnSubir', (e) => {
  submitModal.show();
});
// llamanos nuestras funciones para crear la imagen
watchImg(submitLink, submitImagen);

watchImg(updateLink, updateImagen);
