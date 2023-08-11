function operaciones(){
    if ((document.getElementById("Número1").value)=="" || (document.getElementById("Número2").value)==""){
        window.alert("Error: ingrese 2 números válidos");
    } else if ((document.getElementById("operacion").value)=="division" && (document.getElementById("Número2").value)=="0") {
        window.alert("Error: no se puede dividir por 0");
    } else {
        switch (document.getElementById("operacion").value){
        case "suma":
            numero1 = parseFloat(document.getElementById("Número1").value);
            numero2 = parseFloat(document.getElementById("Número2").value);

            resultado = numero1 + numero2
            document.getElementById("resultado").innerHTML = 
            "El resultado de la suma es: " + resultado;
            break;
    
        case "resta":
            numero1 = parseFloat(document.getElementById("Número1").value);
            numero2 = parseFloat(document.getElementById("Número2").value);
    
            resultado = numero1 - numero2
            document.getElementById("resultado").innerHTML = 
            "El resultado de la resta es: " + resultado;
            break;    

        case "multiplicacion":
            numero1 = parseFloat(document.getElementById("Número1").value);
            numero2 = parseFloat(document.getElementById("Número2").value);

            resultado = numero1 * numero2
            document.getElementById("resultado").innerHTML =
            "El resultado de la multiplicación es: " + resultado;
            break;

        case "division":
            numero1 = parseFloat(document.getElementById("Número1").value);
            numero2 = parseFloat(document.getElementById("Número2").value);
    
            resultado = numero1 / numero2
            document.getElementById("resultado").innerHTML =
            "El resultado de la división es: " + resultado;
            break;

        default:
            window.alert("Error: seleccione una operación válida de la lista");
        }
    }
}