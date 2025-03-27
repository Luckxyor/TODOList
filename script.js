const inputTODO=document.getElementById("TODOIngresado");
const botonAgregar=document.getElementById("AgregarTODO");
let ListaTODO=[];
botonAgregar.onclick=()=>{
    event.preventDefault();
    if(inputTODO!=''){
        ListaTODO.push({
            razon:inputTODO.value,
            hecho:false,
            fechaIniciado:new Date(Date.now()).toDateString(),
            fechaTerminado:undefined
        });
        inputTODO.value='';
        agregarToDo();
    }
}
function agregarToDo(){
    let container=document.getElementById('lista-container');
    container.innerHTML='';
    ListaTODO.forEach(elementoToDo => {
        let nuevoToDo=document.createElement('label');
        nuevoToDo.innerHTML=`
        <input type=checkbox /> ${elementoToDo.razon}
        `
        container.appendChild(nuevoToDo);
    });
}