let listaNombresGastos = [];
let listaValoresGastos = [];
let totalGastoGeneral=0;
let gastoActual = -1;

//Esta funcion se inicia al momento de el que usuario hace click en el boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
        if (nombreGasto === '' || isNaN(valorGasto)) {
        alert('Por favor, ingrese un nombre de su gasto y valor valido');
        return;
    }
    // Verificar si el gasto es > a 150
    if (valorGasto > 101) {
        alert('Advertencia, Has registrado un monto mayor a 150 USD');
    }
    if (gastoActual === -1) {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
    } else {
        listaNombresGastos[gastoActual] = nombreGasto;
        listaValoresGastos[gastoActual] = valorGasto;
        gastoActual = -1; 
        document.getElementById('botonActualizar').style.display = 'none';
        document.getElementById('botonFormulario').style.display = 'block';
    }
    actualizarListaGastos();
    }
function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGasto = 0;
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number(listaValoresGastos [posicion]);
        const descripcionGasto = listaDescripcion[posicion];
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - Descripcion: ${descripcionGasto}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <button onclick="modificarGasto(${posicion});">Modificar</button>
        </li>`;
        // Calculamos El Total Gasto
        totalGasto += Number(valorGasto);
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGasto.toFixed(2);
    totalGastoGeneral=totalGasto.toFixed(2);
    limpiar();
}
function limpiar(){
    document.getElementById('nombreGasto').value = "";
    document.getElementById('valorGasto').value = "";
}

function eliminarGasto(posicion){
    const totalAnterior = document.getElementById('totalAnterior');
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    totalAnterior.innerHTML=totalGastoGeneral
    console.log(totalGastoGeneral)
actualizarListaGastos();
}

function mostrarModal() {
}
function modificarGasto(posicion){
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    gastoActual = posicion;
    document.getElementById('botonActualizar').style.display = 'block';
    document.getElementById('botonFormulario').style.display = 'none';
console.log(posicion)
}
function actualizarGasto(){
    clickBoton();
}