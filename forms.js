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

// agregar informacion al html
function publicResult (tipo) {
    const listaResultado = document.getElementById("lista-resultados");
    const element = document.createElement('div');
    element.innerHTML = `
        <div class = "card text-center mb-3">
            <div class="card-body">
                <strong>Nombre Paciente: </strong> ${nombreCompleto}
                <strong>Edad: </strong> ${edadPaciente}
                <strong>Peso: </strong> ${pesoPaciente}
                <strong>${tipo}: </strong>  ${resultado}
            </div>            
        </div>
    `;
    listaResultado.appendChild(element);
} 


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


// ejecutar evaluacion de IMC

const botonImc = document.getElementById("calculoImc")
botonImc.addEventListener("click", function (e) {  
    
     nombrePaciente = document.getElementById("nombrep").value
     apellidoPaciente = document.getElementById("apellido").value
     document.getElementsByName("sexo").forEach(radio => {if (radio.checked){sexoPaciente = radio.value}});   
     console.log( sexoPaciente );
     edadPaciente = parseFloat(document.getElementById("edad").value)
     pesoPaciente = parseFloat(document.getElementById("peso").value)     
     estaturaPaciente = parseFloat(document.getElementById("estatura").value) 
      
    
    estaturaMetros(); 
    evaluarImc();

// nuevo objeto pacientes
    nombreCompleto = `${nombrePaciente} ${apellidoPaciente}`
    datoPaciente = new paciente (nombreCompleto, sexoPaciente, edadPaciente, pesoPaciente, estaturaPaciente, resultado);
    console.log(datoPaciente);
    pacientes.push(datoPaciente); 
    console.log(pacientes);
    
    publicResult ("Indice de Masa Corporal");
    //document.getElementById('form').reset();
    e.preventDefault();
    

     });


//Validar Campos Formulario

const validarInput = () =>{ 
    if(nombrePaciente === '' || apellidoPaciente === '' || sexoPaciente.value === null || edadPaciente === '' || pesoPaciente === '' || estaturaPaciente === '') {
        const datosOk = false;
    } else { 
        const datosOk = true;  
    }
    
}



// ejecutar calculo de calorias
     const botonCaloria = document.getElementById("calculoCaloria")
     botonCaloria.addEventListener("click", function (e) {  
         
          nombrePaciente = document.getElementById("nombrep").value          
          apellidoPaciente = document.getElementById("apellido").value
          document.getElementsByName("sexo").forEach(radio => { if (radio.checked){sexoPaciente = radio.value}});   
          console.log (sexoPaciente);
          edadPaciente = parseFloat(document.getElementById("edad").value)
          pesoPaciente = parseFloat(document.getElementById("peso").value)     
          estaturaPaciente = parseFloat(document.getElementById("estatura").value) 
           
          
          calculoCalorias ();
             
//  nuevo objeto pacientes
         nombreCompleto = `${nombrePaciente} ${apellidoPaciente}`
         datoPaciente = new paciente (nombreCompleto, sexoPaciente, edadPaciente, pesoPaciente, estaturaPaciente, resultado);
         console.log(datoPaciente);
         pacientes.push(datoPaciente); 
         console.log(pacientes);

         publicResult ("Calorias Diarias");
         e.preventDefault()
        
          
         
          
     
          });


// ejecutar calculo de peso teorico
const botonPesoTeorico = document.getElementById("pesoTeorico")
botonPesoTeorico.addEventListener("click", function (e) {  
    
     nombrePaciente = document.getElementById("nombrep").value
     apellidoPaciente = document.getElementById("apellido").value
     document.getElementsByName("sexo").forEach(radio => {if (radio.checked){sexoPaciente = radio.value}});   
     console.log (sexoPaciente);
     edadPaciente = parseFloat(document.getElementById("edad").value)
     pesoPaciente = parseFloat(document.getElementById("peso").value)     
     estaturaPaciente = parseFloat(document.getElementById("estatura").value) 
      
    
     calculoPesoTeorico ();
     console.log(pesoTeorico);



//  nuevo objeto pacientes
    nombreCompleto = `${nombrePaciente} ${apellidoPaciente}`
    datoPaciente = new paciente (nombreCompleto, sexoPaciente, edadPaciente, pesoPaciente, estaturaPaciente);
    console.log(datoPaciente);
    pacientes.push(datoPaciente); 
    console.log(pacientes);
    
    publicResult ("Peso Teorico");
    //document.getElementById('form').reset();
    e.preventDefault()
     

     });

// funcion calcular calorias

function calculoCalorias ()  {
     if (sexoPaciente === "masculino" ) {
         caloriasPaciente = 66.473 + (13.752*pesoPaciente) + (5.003*estaturaPaciente) - (6.775 * edadPaciente);
      }
     else if (sexoPaciente === "femenino") { 
         caloriasPaciente = 655.096 + (9.563*pesoPaciente) + (1.850*estaturaPaciente) - (4.676 * edadPaciente);
      }

    Swal.fire({
        icon: 'success',
        title: `${nombrePaciente} !`,
        text: ` Segun tus datos, necesitas ${caloriasPaciente.toFixed(2)} calorias diariamente, te ayudo a obtenerlas! .`,
        footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
      })

      resultado = caloriasPaciente.toFixed(2);
}


// funcion calcular peso teorico
function calculoPesoTeorico ()  {
        estaturaMetros();           
        pesoTeoricoMin = (estaturaPaciente * estaturaPaciente )* 18.5 ;     
        pesoTeoricoMax = (estaturaPaciente * estaturaPaciente )* 24.9 ;
   

   Swal.fire({
       icon: 'success',
       title: `${nombrePaciente} !`,
       text: ` Segun tus datos, debes pesar al menos: ${pesoTeoricoMin.toFixed(2)} kilos,  y como maximo puedes pesar: ${pesoTeoricoMax.toFixed(2)} te ayudo a cumplirlo! `,
       footer: '<a href="index.html#workMe">Agenda una cita aquí</a>'
     })
     resultado = `Peso Minimo ${pesoTeoricoMin.toFixed(2)} y Peso Maximo ${pesoTeoricoMax.toFixed(2)}`
}
     

//  funcion convertir estatura a metros
function estaturaMetros () {
    estaturaPaciente = estaturaPaciente/100;
}

// funcion comunicar resultado del calculo
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

// array de pacientes
const pacientes = [];


