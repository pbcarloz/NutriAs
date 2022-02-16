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
        
        Swal.fire({
            icon: 'info',
            title: `Bueno ${nombrePaciente} !`,
            text: `Tu indice de masa corporal es de: ${indiceMasaC} necesitas un poco mas de peso, agendemos una cita para mejorar.`,
            footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
          })
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras Bajo de Peso, Agendemos una Cita.");
    } else if (indiceMasaC >18.49 && indiceMasaC <= 24.99) {
        Swal.fire({
            icon: 'success',
            title: `Muy Bien ${nombrePaciente} !`,
            text: `Tu indice de masa corporal es de: ${indiceMasaC} te encuentras con un peso normal, sigamos cuidandolo.`,
            footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
          })
             console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con un peso normal, sigamos cuidandolo.")
    } else if (indiceMasaC >=25 && indiceMasaC <= 29.99) {

        Swal.fire({
            icon: 'info',
            title: `Bueno ${nombrePaciente} !`,
            text: `Tu indice de masa corporal es de: ${indiceMasaC} te encuentras con sobrepeso, agendemos una cita para mejorar.`,
            footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
          })
           console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con sobrepeso, Agendemos una cita")
    } else if (indiceMasaC >=30 && indiceMasaC <= 34.99) {

        Swal.fire({
            icon: 'warning',
            title: `Oh No ${nombrePaciente} !`,
            text: `Tu indice de masa corporal es de: ${indiceMasaC} te encuentras con obesidad leve, agendemos una cita para mejorar.`,
            footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
          })
        
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad leve, Agendemos una cita.")
    } else if (indiceMasaC >=35 && indiceMasaC <= 39.99) {

        Swal.fire({
            icon: 'error',
            title: `:( ${nombrePaciente} !`,
            text: `Tu indice de masa corporal es de: ${indiceMasaC} te encuentras con obesidad media, agendemos una cita para mejorar.`,
            footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
          })
       
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad media, Agendemos una cita.")
    } else if (indiceMasaC >=40) {

        Swal.fire({
            icon: 'error',
            title: `:( ${nombrePaciente} !`,
            text: `Tu indice de masa corporal es de: ${indiceMasaC} te encuentras con obesidad morbida, agendemos una cita para mejorar.`,
            footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
          })
        console.log("Tu indice de masa corporal es: " + indiceMasaC +", te encuentras con obesidad morbida, Agendemos una cita.")
    }
}

// array de pacientes
const pacientes = [];


