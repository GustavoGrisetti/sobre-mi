//Declaración de las variables a usar.
let numero1
let numero2
let resultado

//La función operaciones es llamada al presionar en el botón calcular.
function operaciones(){
    //Primero verifica que: ambos números por separado no sean 'vacío' (la parte HTML ya verifica que deban ser números y no texto).
    if ((document.getElementById("número1").value)=="" || (document.getElementById("número2").value)==""){
        window.alert("Error: ingrese 2 números válidos");
    //También verifica que si se seleccionó la opción "división", el segundo valor no deba ser 0.
    } else if ((document.getElementById("operacion").value)=="division" && (document.getElementById("número2").value)=="0") {
        window.alert("Error: no se puede dividir por 0");
    //Si pasa las condiciones, se aplica un 'switch-case' en base a la opción elegida:
    } else {
        switch (document.getElementById("operacion").value){
        case "suma":
            numero1 = parseFloat(document.getElementById("número1").value);
            numero2 = parseFloat(document.getElementById("número2").value);
            //El resultado se redondea a 2 dígitos (de ser necesario) para evitar los errores detallados en el README.md:
            resultado = Math.round( (numero1 + numero2) * 100 ) / 100;
            //Agregado un condicional para verificar que el resultado no pueda ser mayor a 16 difras, según lo descripto en el README.md:
            if (resultado.toString().length > 16) {
                window.alert("Error: el resultado es muy grande. Intente con números menores.");
            } else {
                document.getElementById("resultado").innerHTML = 
                "El resultado de la suma es: " + resultado;
            }
            break;
    
        case "resta":
            numero1 = parseFloat(document.getElementById("número1").value);
            numero2 = parseFloat(document.getElementById("número2").value);
            //El resultado se redondea a 2 dígitos (de ser necesario) para evitar los errores detallados en el README.md: 
            resultado = Math.round( (numero1 - numero2) * 100 ) / 100;
            //Agregado un condicional para verificar que el resultado no pueda ser mayor a 16 difras, según lo descripto en el README.md:
            if (resultado.toString().length > 16) {
                window.alert("Error: el resultado es muy grande. Intente con números menores.");
            } else {
                document.getElementById("resultado").innerHTML =  
                "El resultado de la resta es: " + resultado;
            }
            break;    

        case "multiplicacion":
            numero1 = parseFloat(document.getElementById("número1").value);
            numero2 = parseFloat(document.getElementById("número2").value);
            //El resultado se redondea a 2 dígitos (de ser necesario) para evitar los errores detallados en el README.md:
            resultado = Math.round( (numero1 * numero2) * 100 ) / 100;
            //Agregado un condicional para verificar que el resultado no pueda ser mayor a 16 difras, según lo descripto en el README.md:
            if (resultado.toString().length > 16) {
                window.alert("Error: el resultado es muy grande. Intente con números menores.");
            } else {
                document.getElementById("resultado").innerHTML = 
                "El resultado de la multiplicación es: " + resultado;
            }
            break;

        case "division":
            numero1 = parseFloat(document.getElementById("número1").value);
            numero2 = parseFloat(document.getElementById("número2").value);
            //El resultado se redondea a 2 dígitos (de ser necesario) para evitar los errores detallados en el README.md:    
            resultado = Math.round( (numero1 / numero2) * 100 ) / 100;
            //Agregado un condicional para verificar que el resultado no pueda ser mayor a 16 difras, según lo descripto en el README.md:
            if (resultado.toString().length > 16) {
                window.alert("Error: el resultado es muy grande. Intente con números menores.");
            } else {
                document.getElementById("resultado").innerHTML = 
                "El resultado de la división es: " + resultado;
            }
            break;
        //si no se selecciona una opción válida, da un mensaje de error.
        default:
            window.alert("Error: seleccione una operación válida de la lista");
        }
    }
}
/*La función "limpiar" es llamada al hacer clic en el boton con el mismo nombre. Borra lo escrito en ambos cuadros de texto, devuelve la opción
del menú desplegable a su defecto y borra también el resultado previo.*/
function limpiar() {
    document.getElementById("número1").value = "";
    document.getElementById("número2").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("operacion").value = "";
}