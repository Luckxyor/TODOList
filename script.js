const inputTODO=document.getElementById("TODOIngresado");
const botonAgregar=document.getElementById("AgregarTODO");
const container = document.getElementById('lista-container');
const btnTareaRapida=document.getElementById('tareaRapida');
let ListaTODO=[];
botonAgregar.onclick=()=>{
    if(inputTODO.value!=''){
        ListaTODO.push({
            razon:inputTODO.value,
            hecho:false,
            fechaIniciado:new Date(Date.now()),
            fechaTerminado:undefined
        });
        inputTODO.value='';
        agregarToDo();
    }
}
function agregarToDo() {
    container.innerHTML='';
    ListaTODO.forEach((elementoToDo, index)=>{
        let nuevoToDo=document.createElement('label');
        let estado = elementoToDo.fechaTerminado ? `Completado el ${elementoToDo.fechaTerminado}` : "Incompleto";
        nuevoToDo.innerHTML=`<input type="checkbox" class="chbox" data-index="${index}"/>${elementoToDo.razon}
        <p class="caracteristicasTODO">Fecha de creación: ${elementoToDo.fechaIniciado} - Estado: ${estado}</p>`;
        if(elementoToDo.hecho){
            nuevoToDo.classList.add('terminado');
            nuevoToDo.firstChild.checked=true;
        }
        container.appendChild(nuevoToDo);
    });
}
document.getElementById('lista-container').onclick = (e) => {
    if (e.target.classList.contains('chbox')) {
        let index = e.target.dataset.index;
        let labelPadre = e.target.parentNode;
        if (e.target.checked) {
            ListaTODO[index].hecho = true;
            ListaTODO[index].fechaTerminado = new Date(Date.now());
            labelPadre.classList.add('terminado');
        } else {
            ListaTODO[index].hecho = false;
            ListaTODO[index].fechaTerminado = undefined;
            labelPadre.classList.remove('terminado');
        }
        agregarToDo();
    }
};

btnTareaRapida.onclick=()=>{
    let tareaRapida=null;
    let menorDiferencia=Infinity;
    ListaTODO.forEach(tarea=>{
        if(tarea.hecho && tarea.fechaTerminado){
            const diferencia = Math.abs(tarea.fechaIniciado - tarea.fechaTerminado);
            if(diferencia<menorDiferencia){
                menorDiferencia=diferencia;
                tareaRapida=tarea;
            }
        }
    });
    if(tareaRapida!=null){
        alert(`La tarea que se termino más rapido fue: ${tareaRapida.razon}`);
    }else{
        alert('No hay ninguna tarea o ninguna tarea fue terminada');
    }
}