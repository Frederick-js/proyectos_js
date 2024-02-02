const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#enter");
const check = 'fa-check-circle';
const uncheck = 'fa-circle';
const lineThrough = 'line-through';
const id = 0;

// Funcion agregar tarea
function agregarTarea(tarea,id,realizado,eliminado) {
  const REALIZADO = realizado ? check : uncheck;
  const elemento = `<li id="elemento">
  <i class="far ${REALIZADO}" data="realizado" id='${id}'></i>
  <p class="text">${tarea}</p>
  <i class="fas fa-trash de" data="eliminado" id='${id}'></i>
</li>`;
  lista.insertAdjacentHTML("beforeend", elemento);
}

botonEnter.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea,id,false,false);
  }
  input.value = "";
  id++     
});

document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea,id,false,false);
    }
    input.value = "";
    id++
  }
});
