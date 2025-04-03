const inputTODO=document.getElementById("TODOIngresado");
const botonAgregar=document.getElementById("AgregarTODO");
const container = document.getElementById('lista-container');
let ListaTODO=[];
botonAgregar.onclick=()=>{
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
function agregarToDo() {
    container.innerHTML='';
    ListaTODO.forEach((elementoToDo,index)=>{
        let nuevoToDo=document.createElement('label');
        nuevoToDo.innerHTML=`<input type="checkbox" class="chbox" data-index="${index}"/>${elementoToDo.razon}`;
        container.appendChild(nuevoToDo);
    });
}
document.getElementById('lista-container').onclick = (e) => {
    if (e.target.classList.contains('chbox')) {
        let index = e.target.dataset.index;
        let labelPadre = e.target.parentNode;
        if (e.target.checked) {
            ListaTODO[index].hecho = true;
            ListaTODO[index].fechaTerminado = new Date(Date.now()).toDateString();
            labelPadre.classList.add('terminado');
        } else {
            ListaTODO[index].hecho = false;
            ListaTODO[index].fechaTerminado = undefined;
            labelPadre.classList.remove('terminado');
        }
    }
};