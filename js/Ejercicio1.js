const boton1 = document.getElementById ("boton1");
const boton2 = document.getElementById ("boton2");
const boton3 = document.getElementById ("boton3");
const body = document.querySelector ("body");

const agregarTitulo = () => {
    const h1 = document.createElement ("h1");
    h1.innerText = "Titulo Principal"
    body.appendChild (h1); 
};

boton1.addEventListener ("click", agregarTitulo)

const agregarParrafo = () => {
    const p = document.createElement ("p");
    p.innerText = "Sigue así, vas por buen camino"
    body.appendChild (p)
}

boton2.addEventListener ("click", agregarParrafo)

const ejecutarAlerta = () => {
    alert("Esta es una alerta")
};

boton3.addEventListener 
("click", ejecutarAlerta)