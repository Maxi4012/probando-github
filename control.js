function validar(){

    var usuario, clave, RegExp;

    usuario = document.getElementById('usuario').value;
    clave = document.getElementById('clave').value;
    RegExp = /@/;




    if(usuario === null || usuario === ''){
        alert('Completa el Usu@rio')
        return false;
     
    }
    
    else if(!RegExp.test(usuario)){
        alert('Falta @ del Usuario')
        return false;
       
    }

    else if(clave === null || clave === ''){
        alert('Completa la clave')
        return false
     
    }

  
return false

}