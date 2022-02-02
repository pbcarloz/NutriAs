
// constructor pacientes
class paciente  {
    constructor(nombre, edad, peso, estatura)
    {
        this.nombre = nombre,
        this.edad = edad,
        this.peso = peso,
        this.estatura = estatura;
    }
}

// funcion obtener valores
 function valores () {
    alert("Calculemos tu Indice de Masa Corporal");

    nombrePaciente = prompt("Primero, Como te llamas?");
    console.log(nombrePaciente);

    edadPaciente = parseFloat(prompt("Cual es tu edad?", "0"))
    while (edadPaciente < 0 || edadPaciente > 100) {
        edadPaciente = parseFloat("Introduce tu edad correcta")
    }
    console.log(edadPaciente);

    pesoPaciente = parseFloat(prompt("Cual es tu peso?"));
      while ( pesoPaciente < 3 || pesoPaciente > 150 ) {
        pesoPaciente = parseFloat(prompt("Introduce tu peso correcto"));
     }

     estaturaPaciente = parseFloat(prompt("Cual es tu estatura?"));
     estaturaMetros ();
     while ( estaturaPaciente < 0.3 ) {
        estaturaPaciente = parseFloat(prompt("Introduce tu estatura correcta"));
     }
 }

//  funcion convertir estatura a metros
 function estaturaMetros () {
     if (estaturaPaciente > 2.2 ) {
         estaturaPaciente = estaturaPaciente/100;
         console.log(estaturaPaciente);
     }
 }

//  funcion calculo de masa corporal
 function calculoImc() {
     indiceMasaC = pesoPaciente/(estaturaPaciente*estaturaPaciente);     
     indiceMasaC = Math.round((indiceMasaC + Number.EPSILON) * 100) / 100;
     console.log(indiceMasaC)
}

// funcion comunicar resultado del calculo
function evaluarImc () {
    console.log("Tu indice de masa corporal es de: " + indiceMasaC);
    if (indiceMasaC <= 18.49 ){
        alert("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras Bajo de Peso, Agendemos una Cita.");
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras Bajo de Peso, Agendemos una Cita.");
    } else if (indiceMasaC >18.49 && indiceMasaC <= 24.99) {
        alert("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con un peso normal, sigamos cuidandolo.");
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con un peso normal, sigamos cuidandolo.")
    } else if (indiceMasaC >=25 && indiceMasaC <= 29.99) {
        alert("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con sobrepeso, Agendemos una Cita.");
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con sobrepeso, Agendemos una cita")
    } else if (indiceMasaC >=30 && indiceMasaC <= 34.99) {
        alert("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras obesidad leve, Agendemos una Cita.");
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad leve, Agendemos una cita.")
    } else if (indiceMasaC >=35 && indiceMasaC <= 39.99) {
        alert("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad media, Agendemos una Cita.");
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad media, Agendemos una cita.")
    } else if (indiceMasaC >=40) {
        alert("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad morbida, Agendemos una Cita.");
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad morbida, Agendemos una cita.")
    }
}


// array de pacientes
const pacientes = [];


// codigo manipular DOM
var indiceMc = document.getElementById("indiceMc");
indiceMc.addEventListener("click", function () {
    valores();
    calculoImc();
    evaluarImc();

// nuevo objeto pacientes
    datoPaciente = new paciente (nombrePaciente, edadPaciente, pesoPaciente, estaturaPaciente);
    console.log(datoPaciente);

    pacientes.push(datoPaciente);
 
    console.log(pacientes);
});







