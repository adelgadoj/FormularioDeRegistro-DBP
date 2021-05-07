const expresiones = {
    nombre : /^[a-zA-Z]{1,50}$/ ,
    apellidos : /^[a-zA-Z\s]{1,50}$/ ,
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 

}
function validar(){
    var name = document.getElementById('nombre').value;
    var apelli = document.getElementById('apellidos').value;
    var correoE = document.getElementById('email').value;
    var check = document.getElementById('checkbox2').checked;
    if(expresiones.nombre.test(name)==false){
        alert("Nombre Incorrecto: Use solo letras");
        return false;
    }
    else if(expresiones.apellidos.test(apelli)==false){
        alert("Apellido Incorrecto: Use solo letras");
        return false;
    }
    else if(expresiones.correo.test(correoE)==false){
        alert("Correo Incorrecto: ejemplo123-@mail.com");
        return false;
    }
    else if(!check){
        alert("Marca Los terminos porfavor")
        return false;
    }
    else{
        return true;
    }
}
document.getElementById('formulario').onsubmit = function() {

    if(validar()==true){
        alert("ENVIO EXITOSO");
        return true;
    }
    else{
        return false;
    }
};
