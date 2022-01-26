

class paciente  {
    constructor(nombre, edad, sexo, peso, estatura)
    {
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.peso = peso,
        this.estatura = estatura;
    }
}


 function valores () {
    alert("Calculemos tu Indice de Masa Corporal");
     peso = prompt("Cual es tu peso?");
      while ( peso < 3 ) {
        peso = prompt("Introduce tu peso correcto");
     }
     estatura = prompt("Cual es tu estatura?");
     estaturaMetros ();
     while ( estatura < 0.3 ) {
        estatura = prompt("Introduce tu estatura correcta");
     }
 }

 function estaturaMetros () {
     if (estatura > 2.2 ) {
         estatura = estatura/100;
         console.log("estatura");
     }
 }

 function calculoImc() {
     indiceMasaC = peso/(estatura*estatura);     
     indiceMasaC = Math.round((indiceMasaC + Number.EPSILON) * 100) / 100;
     console.log(indiceMasaC)
}

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


var indiceMc = document.getElementById("indiceMc");

indiceMc.addEventListener("click", function () {
    valores();
    calculoImc();
    evaluarImc();
    console.log(peso, estatura, indiceMasaC);
});
