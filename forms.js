class paciente  {
    constructor(nombre, sexo, edad, peso, estatura)
    {
        this.nombre = nombre,
        this.sexo = sexo,
        this.edad = edad,
        this.peso = peso,
        this.estatura = estatura;
    }
}



const enviar = document.getElementById("submit")
enviar.addEventListener("click", function (e) {  
    
     nombrePaciente = document.getElementById("nombrep").value
     apellidoPaciente = document.getElementById("apellido").value
     document.getElementsByName("sexo").forEach(radio => {if (radio.checked){sexoPaciente = radio.value}});   
     console.log(sexoPaciente);
     edadPaciente = parseFloat(document.getElementById("edad").value)
     pesoPaciente = parseFloat(document.getElementById("peso").value)     
     estaturaPaciente = parseFloat(document.getElementById("estatura").value) 
      
    
    estaturaMetros(); 
    calculoImc();
    evaluarImc();

// nuevo objeto pacientes
    nombreCompleto = `${nombrePaciente} ${apellidoPaciente}`
    datoPaciente = new paciente (nombreCompleto, sexoPaciente, edadPaciente, pesoPaciente, estaturaPaciente);
    console.log(datoPaciente);
    pacientes.push(datoPaciente); 
    console.log(pacientes);
    
    e.preventDefault()
     });

//  funcion convertir estatura a metros
function estaturaMetros () {
    estaturaPaciente = estaturaPaciente/100;
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

