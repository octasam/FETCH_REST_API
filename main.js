function solicitud(datos) {
    console.log('Funcion no asincrona');
}

async function f() {
    console.log('Inicio de funcion asincrona');

    await solicitud(2000);

    console.log('Terminamos ejecucion de func asincrona');
}

function bigFunction() {
    console.log('Funcion normal ejecutada');
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += i;
    }
    console.log('Funcion normal terminada', result);
}

// f();
// bigFunction();

//Variable constanste que le asignamos al ID counter
const COUNTER_P = document.getElementById('counter');
let counter = 0;

//recibe la funcion asyncrona
document.getElementById('btn-counter')
    .addEventListener('click', async (e) => {
        await setTimeout(() => {
            counter++;
            COUNTER_P.textContent = counter;
        }, 2000);
    })
// Implementando un boton asyncrono con el await y el setTimeout

/**
 * - async: La declaración de función async define una función asíncrona, la cual 
 * devuelve un objeto AsyncFunction.
 * 
 * - document.getElementById: Devuelve una referencia al elemento por su ID.
 * 
 * - element.addEventListener: addEventListener() Registra un evento a un objeto 
 * en específico. El Objeto especifico (en-US) puede ser un simple elemento en un 
 * archivo, el mismo documento , una ventana o un XMLHttpRequest
 * 
 * - await: El operador await es usado para esperar a una Promise. Sólo puede ser 
 * usado dentro de una función async function.
 * 
 * -Node.textContent: La propiedad textContent de la interfaz Node representa el 
 * contenido de texto de un nodo y sus dencendientes.
 */