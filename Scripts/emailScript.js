function enviarMail () {
    let tempParametros = {
        from_name: nombreCompleto,
        to_name:'Reynaldo' ,
        message: ` ${nombreCompleto}, esta interesado en tener una consulta, los datos que registro son los siguientes:
        ${JSON.stringify(pacientes)} `
    };

    emailjs.send('service_mg0hxr4', 'template_p45u50m', tempParametros).then (function(res){
        console.log("success", res.status);

    }) 
}

