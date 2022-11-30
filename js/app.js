// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto para la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
};

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los automoviles
    mostrarAutos(autos);

    // Llenar los select
    llenarSelect();
});

// Event listener para los select de busqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
    // console.log(datosBusqueda);
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});

//Mostrar en el html

function mostrarAutos(autos) {
    limpiarHtml();

    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } =
            auto;

        const autoHtml = document.createElement('p');

        autoHtml.textContent = ` ${marca} ${modelo} - ${year} - Precio - ${precio} - Puertas - ${puertas} - Transimision: ${transmision} - color: ${color}   `;

        //insertar en el html
        resultado.appendChild(autoHtml);
    });
    
    
    
}

//Limpiar el Html

function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//llenar un select year

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

// Filtrado de vehiculos

function filtrarAuto() {
    const resultado = autos
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    if(resultado.length){
        mostrarAutos(resultado);
        
    } else {
        noResultado()
    }
        
        
}

//Para cuando no hay resultado

function noResultado() {
    
    limpiarHtml()
    
    const p =  document.createElement('p')
    p.textContent = "No hay resultados con estos criterios"
    resultado.appendChild(p)
    
}


//Funciones de filtrado

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;

    if (marca) {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === parseInt(year);
    }

    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if (minimo) {
        return auto.precio >= parseInt(minimo);
    }

    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;

    if (maximo) {
        return auto.precio <= parseInt(maximo);
    }

    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;

    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }

    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;

    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;

    if (color) {
        return auto.color === color;
    }

    return auto;
}
