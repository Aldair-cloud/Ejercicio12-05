var a = 3 ;

function validar(){
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if(usuario=="aldair" && password=="123"){
        alert("Usuario y Contraseña Validos")
    }else{
        --a; 
        alert("tiene "+ a + " intentos");
        document.getElementById("usuario").value="";
        document.getElementById("password").value="";
        if(a <= 0){
            alert("Se acabo los intentos"); 
            document.getElementById("usuario").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("usuario").value="";
            document.getElementById("password").value="";
        }  
    }
}
