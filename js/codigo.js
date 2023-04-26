//const parrafo1 = document.getElementById ("parrafo1");
//console.log (parrafo1);

//const parrafos = document.getElementsByClassName ("parrafos");
//console.log (parrafos []);

//para crear elemento html y agregarlos como hijos a otros elementos
//const seccion1 = document.getElementById ("seccion1");
//const parrafo = document.createElement ("p");
//parrafo.innerText = "Adios";
//const texto= document.createTextNode ("Hola este es un saludo");
//parrafo.appendChild (texto);
//seccion1.appendChild (parrafo);
//console.log (seccion1)

//const saludar = () => {
//  console.log("hola como estan");
//};

//saludar();

//function despedir() {
//  console.log("adios");
//}

//const btnDespedir = document.getElementById("btnDespedir");

//btnDespedir.addEventListener("click", despedir);



const cambiarclase = () => {
    const subtitulo = document.getElementById ("subtitulos");
    const subtitulo_atributo = subtitulo.getAttribute ("class");
    subtitulo.setAttribute ("class", "h2_titulo");
    const subtitulo_atributo_actualizado = subtitulo.getAttribute ("class")
    console.log (subtitulo_atributo);
    console.log (subtitulo_atributo_actualizado)
}

const comprobarclase = () => {
    const subtitulo = document.getElementById ("subtitulos");
    const comprobar = subtitulo.hasAttribute ("class");
    console.log (comprobar);
} 

const removeratributo = () => {
    const subtitulo = document.getElementById ("subtitulos");
    subtitulo.removeAttribute ("class");
};