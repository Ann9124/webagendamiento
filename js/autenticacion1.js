function validardatos (){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var numero_de_documento=document.getElementById("numero_de_documento").value;

    if (nombre===""){
        alert("No se ha digitado un nombre, vuelva a intentarlo");
        return false;
    }else if(apellido===""){
        alert("No se ha digitado un apellido, vuelva a intentarlo");
        return false;
    }else if (numero_de_documento===""){
        alert("Se ingreso mal el número de documento, verifique e intentelo de nuevo");
        return false;
    }
    }    
