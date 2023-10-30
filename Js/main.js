
// VARIABLE
let stockRam = 0;

// INICIO DEL CICLO
alert("Bienvenido a Stocker Pc Consultor de Stock de memorias Ram");


function inicioCiclo() {
    let pedirAccion = Number(prompt(`¿Que quiere hacer? 
1-Consultar Stock. 
2-Agregar Componente.
3-Quitar Componente.
4-Salir`));
    return accionCiclo1 = pedirAccion;
}

let accionCiclo1 = 0;

// arranca
inicioCiclo();

// Recibe 1, 2, 3 o 4

function accionEfectuar() {
    while (accionCiclo1 != 4) {
        if (accionCiclo1 === 1) {
            bodega();
        } else if (accionCiclo1 === 2) {
            agregarMenu();
        }
        else if (accionCiclo1 === 3) {
            quitarMenu();
        }
        else {
        }
    }
};
// Bodega 
function bodega() {
    alert(`Actualmente en la bodega hay ${stockRam} Memorias rams`);
    inicioCiclo();
}

// funcion Agregar.
function agregarMenu() {
    let cantidadSuma = Number(prompt("Cuanta rams desea agregar"));
    alert("Ram agregada con exito!");
    inicioCiclo();
    return stockRam = stockRam + cantidadSuma;
};

// Funcion quitar.

function quitarMenu() {
    let cantidadResta = Number(prompt("Cuanta rams desea quitar"));
    alert("Ram quitada con exito!");
    inicioCiclo();
    return stockRam = stockRam - cantidadResta;
};

accionEfectuar();
alert("Gracias por usar Stocker");

function ConstructorRam (marca, velocidad, capacidad, precio ) {
    this.marca = marca;
    this.velocidad = velocidad;
    this.capacidad = capacidad;
    this.precio = precio;
}

// Objetos Memorias Ram
const ramAsus = new ConstructorRam ("Asus", `2400 Mhz`, `8 GB`, 27.000);
const ramRedragon = new ConstructorRam ("RedRagon",`2000 Mhz`, `16 GB`, 28.000);
const ramHyperex = new ConstructorRam ("G-Skill",`2600 Mhz`, `2 GB`, 15.000);
const Corsair = new ConstructorRam ("Corsair",`3300 Mhz`, `4 GB`, 22.000);
const Kingston = new ConstructorRam ("Kingston",`3600 Mhz`, `16 GB`, 34.000);
const Patriot = new ConstructorRam ("Patriot",`3200 Mhz`, `8 GB`, 29.000);
