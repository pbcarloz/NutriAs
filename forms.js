// Constructor Datos del Paciente
class paciente  {
    constructor(nombre, sexo, edad, peso, estatura, resultado)
    {
        this.nombre = nombre,
        this.sexo = sexo,
        this.edad = edad,
        this.peso = peso,
        this.estatura = estatura;
        this.resultado = resultado;
    }
}


// Declara array de pacientes
const pacientes = [];


// const lista = document.getElementById("lista-resultados"); 
// fetch('pacientes.json')
//     .then( (res) => res.json()).then( (data) => {
 
//         data.forEach((paciente) => {

//         const element = document.createElement('div');
//         element.innerHTML = `
//         <div class = "card">
//             <div class="card-body">
//                 <strong>Nombre Paciente: </strong> ${[paciente.nombre]}
//             </div>
//             <div class="card-body">
//                 <strong>Edad: </strong> ${paciente.edad}
//             </div>
//             <div class="card-body">
//                 <strong>Codigo: </strong> ${paciente.id}
//             </div>
//              <div class="card-body">
//                 <strong>Resultado: </strong> puedo alimentar mi archivo pacientes.json con los datos que ingrese en mi formulario?
//             </div>
            
//         </div>
//     `
//     lista.appendChild(element);

//         })
//     })



// Funcion para agregar informacion al DOM
const publicResult = (tipo) => {
    const listaResultado = document.getElementById("lista-resultados");
    const element = document.createElement('div');
    element.innerHTML = `
        <h2 class="glow">Resultado</h2>
        <div class = "card text-center m-4">
            <div class="card-body">
                <strong>Nombre Paciente: </strong> ${nombreCompleto}.
                <strong>Edad: </strong> ${edadPaciente} años.
                <strong>Sexo: </strong> ${sexoPaciente}.
                <strong>Peso: </strong> ${pesoPaciente} kilos.
                <strong>Estatura: </strong> ${estaturaPaciente} mts.
                <strong>${tipo} : </strong>  ${resultado}.
                <a class = "btn btn-sm btn-outline-warning m-1" name = "delete" >Borrar</a>
            </div>            
        </div>
    `;
    listaResultado.appendChild(element);
} 

//borrar resultado 
document.getElementById('lista-resultados').addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.name === 'delete') {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})

//Validar Campos Formulario
let datosOk = '';
const validarInput = () => {
    const regName =  /^[a-zA-Z ]+$/ ; 
    if (
        nombrePaciente === '' || 
        !nombrePaciente.match(regName) ||
        apellidoPaciente === '' || 
        !apellidoPaciente.match(regName) ||
        sexoPaciente.value === '' || 
        isNaN(edadPaciente) || 
        edadPaciente <= 0 ||
        isNaN(pesoPaciente)  || 
        pesoPaciente <= 3 || 
        isNaN(estaturaPaciente) || 
        estaturaPaciente <= 30
        ) {
       datosOk = false
       console.log("Datos Incorrectos", datosOk)

    } 
    else {
        datosOk = true;
        console.log("Datos Correctos", datosOk)
    }
}   

//Funcion alertar error en los datos del formulario
const errorDatos = () => {
    Swal.fire({
        icon: 'error',
        title: `:( Datos Incorrectos !`,
        text: `Verifica que tus datos esten correctos`,
        footer: ''
      })  
};



// Listener para  evaluacion del indice de masa Corporal

const botonImc = document.getElementById("calculoImc");
botonImc.addEventListener("click", function (e) {  

// Obtencion de Datos del Formulario  
     nombrePaciente = document.getElementById("nombrep").value
     apellidoPaciente = document.getElementById("apellido").value
     sexoPaciente = '';
     document.getElementsByName("sexo").forEach(radio => {if (radio.checked){sexoPaciente = radio.value}});   
     edadPaciente = parseFloat(document.getElementById("edad").value)
     pesoPaciente = parseFloat(document.getElementById("peso").value)     
     estaturaPaciente = parseFloat(document.getElementById("estatura").value) 
      
//Ejecuta Funcion para Validar Datos del Formulario, devuelve la variable "datosOk" como true o false
    validarInput();

//Si la variables DatosOk es True, ejecuta la funcion de calculo    
    if ( datosOk === true ) {
    estaturaMetros(); 
    evaluarImc();

//  Se crea nuevo objeto  de paciente
    nombreCompleto = `${nombrePaciente} ${apellidoPaciente}`
    datoPaciente = new paciente (nombreCompleto, sexoPaciente, edadPaciente, pesoPaciente, estaturaPaciente, resultado);
    console.log(datoPaciente);
// Se integra el objeto paciente al array de pacientes
    pacientes.push(datoPaciente); 
    console.log(pacientes);
// Se publica DOM resultado del calculo
    publicResult ("Indice de Masa Corporal");
    }

// Si la variables DatosOk es False, se alerta
    else {
     errorDatos();
    }    

    e.preventDefault();

});



// Listener para calculo de calorias
const botonCaloria = document.getElementById("calculoCaloria")
botonCaloria.addEventListener("click", function (e) {  

// Obtencion de Datos del Formulario        
          nombrePaciente = document.getElementById("nombrep").value          
          apellidoPaciente = document.getElementById("apellido").value
          sexoPaciente = '';
          document.getElementsByName("sexo").forEach(radio => { if (radio.checked){sexoPaciente = radio.value}});   
          edadPaciente = parseFloat(document.getElementById("edad").value)
          pesoPaciente = parseFloat(document.getElementById("peso").value)     
          estaturaPaciente = parseFloat(document.getElementById("estatura").value) 
           
//Ejecuta Funcion para Validar Datos del Formulario, devuelve la variable "datosOk" como true o false
          validarInput();

//Si la variables DatosOk es True, ejecuta la funcion de calculo
        if ( datosOk === true ) {
          calculoCalorias ();

//  Se crea nuevo objeto  de paciente
         nombreCompleto = `${nombrePaciente} ${apellidoPaciente}`
         datoPaciente = new paciente (nombreCompleto, sexoPaciente, edadPaciente, pesoPaciente, estaturaPaciente, resultado);
         console.log(datoPaciente);
// Se integra el objeto paciente al array de pacientes
         pacientes.push(datoPaciente); 
         console.log(pacientes);
// Se publica DOM resultado del calculo
         publicResult ("Calorias Diarias");
        } 
// Si la variables DatosOk es False, se alerta
        else {
         errorDatos();
        }    

        e.preventDefault()

});


// Listener calculo de peso teorico
const botonPesoTeorico = document.getElementById("pesoTeorico")
botonPesoTeorico.addEventListener("click", function (e) {  

// Obtencion de Datos del Formulario   
        nombrePaciente = document.getElementById("nombrep").value
        apellidoPaciente = document.getElementById("apellido").value
        sexoPaciente = '';
        document.getElementsByName("sexo").forEach(radio => {if (radio.checked){sexoPaciente = radio.value}});   
        edadPaciente = parseFloat(document.getElementById("edad").value)
        pesoPaciente = parseFloat(document.getElementById("peso").value)     
        estaturaPaciente = parseFloat(document.getElementById("estatura").value) 
        
//Ejecuta Funcion para Validar Datos del Formulario, devuelve la variable "datosOk" como true o false
        validarInput();

//Si la variables DatosOk es True, ejecuta la funcion de calculo
        if ( datosOk === true ) {
        calculoPesoTeorico ();

//  Se crea nuevo objeto  de paciente
        nombreCompleto = `${nombrePaciente} ${apellidoPaciente}`
        datoPaciente = new paciente (nombreCompleto, sexoPaciente, edadPaciente, pesoPaciente, estaturaPaciente);
        console.log(datoPaciente);
// Se integra el objeto paciente al array de pacientes
        pacientes.push(datoPaciente); 
        console.log(pacientes);
// Se publica DOM resultado del calculo        
        publicResult ("Peso Teorico");
        }
 // Si la variables DatosOk es False, se alerta
        else {
        errorDatos();
        }
        e.preventDefault()
     
});

// funcion para calcular calorias

function calculoCalorias ()  {
     if (sexoPaciente === "Masculino" ) {
         caloriasPaciente = 66.473 + (13.752*pesoPaciente) + (5.003*estaturaPaciente) - (6.775 * edadPaciente);
      }
     else if (sexoPaciente === "Femenino") { 
         caloriasPaciente = 655.096 + (9.563*pesoPaciente) + (1.850*estaturaPaciente) - (4.676 * edadPaciente);
      }

    Swal.fire({
        icon: 'success',
        title: `${nombrePaciente} !`,
        text: ` Segun tus datos, necesitas ${caloriasPaciente.toFixed(0)} calorias diariamente, te ayudo a obtenerlas! .`,
        footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
      })

      resultado = caloriasPaciente.toFixed(0);
}


// funcion calcular peso teorico
function calculoPesoTeorico ()  {
        estaturaMetros();           
        pesoTeoricoMin = (estaturaPaciente * estaturaPaciente )* 18.5 ;     
        pesoTeoricoMax = (estaturaPaciente * estaturaPaciente )* 24.9 ;
   

   Swal.fire({
       icon: 'success',
       title: `${nombrePaciente} !`,
       text: ` Segun tus datos, debes pesar al menos: ${pesoTeoricoMin.toFixed(1)} kilos,  y como maximo puedes pesar: ${pesoTeoricoMax.toFixed(1)} te ayudo a cumplirlo! `,
       footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
     })
     resultado = `Peso Minimo ${pesoTeoricoMin.toFixed(1)} y Peso Maximo ${pesoTeoricoMax.toFixed(1)}`
}
     

//  funcion convertir estatura a metros
function estaturaMetros () {
    estaturaPaciente = estaturaPaciente/100;
}

// funcion para alertar resultado del calculo de indice de masa corporal
function evaluarImc () {


    indiceMasaC = pesoPaciente/(estaturaPaciente*estaturaPaciente);     
    indiceMasaC = Math.round((indiceMasaC + Number.EPSILON) * 100) / 100;
    console.log(indiceMasaC)
    resultado = indiceMasaC.toFixed(2);

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



