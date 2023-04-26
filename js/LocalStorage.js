//Agregar o guardar información en el LocalStorage
const guardarInfo = () => {
console.log ("guardarInfo");
localStorage.setItem ("nombre", "Alberto");
localStorage.setItem ("apellido", "Mondragón")
}

//Consultar la info guardada en el LocalSrogae (visible en consola)
const verInfo = () => {
 const nombre = localStorage.getItem ("nombre")
 console.log (nombre);  
}

//Eliminar información seleccionada
const eliminarInfo = () => {
    console.log ("eliminarInfo")
    localStorage.removeItem ("nombre");
}

//Eliminar toda la información del LocalStorage (no recomendable)
const eliminartodo = () => {
    console.log ("eliminartodo")
}