const nombre = document.getElementById ("nombreInput");
const apellido = document.getElementById ("apellidoInput");
const usuarios = JSON.parse (localStorage.getItem ("usuarus")) || [];
const cuerpoTabla = document.getElementById ("cuerpoTabla")

const agregarUsuarios = () => {

 const usuario = {
    Id: crypto.randomUUID (),
    nombre: nombre.value,
    apellido: apellido.value,
 };

 usuarios.push (usuario);

 localStorage.setItem ('usuarios', JSON.stringify (usuarios));

 console.log (usuarios);
 mostrarUsuarios ();
}

const mostrarUsuarios = () => {
    usuarios.forEach(usuario => {
        cuerpoTabla.innerHTML += `<tr> 
        <th scope="row">${usuario.Id}</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>
        <button
        type="button"
        class="btn btn-danger"
        onclick="eliminarUsuario('${usuario.Id}')"
        >
        Eliminar
        </button></td>
        </tr>`;
    });
    };

    const eliminarUsuario = (Id) => {
        const usuario = usuarios.find ((usuario) => usuario.Id === Id)
        const index = usuarios.indexof (usuario)
        console.log (idex);
    }