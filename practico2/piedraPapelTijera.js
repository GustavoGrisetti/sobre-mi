//Variables globales a utilizar.
let nombreUsuario;
let jugadaUsuario;
let jugadaComputadora;
let resultado;
let contadorJugador = 0;
let contadorComputadora = 0;
let contadorEmpates = 0;
let contadorRondas = 0;
let resultadoGlobal;
const jugadas = ["piedra", "papel", "tijera"];

//Función que permite validar el nombre ingresado.
function nombre(){
    //Primero verifica que el nombre sea válido (no este vacío).
    if ((document.getElementById("nombre").value)==""){
        window.alert("Error: ingrese un nombre");
    //Si el nombre es válido, da un mensaje de bienvenida para iniciar el juego.
    } else {
        nombreUsuario = document.getElementById("nombre").value;
        document.getElementById("saludo").innerHTML = "Bienvenido "+nombreUsuario+", seleccione una de las siguientes tres jugadas:";
    }
}
//Tres funciones que determinan la jugada elegida por el usuario.
function piedraPapelTijera(jugada){
    if (nombreUsuario=="" || nombreUsuario==undefined){
        window.alert("Error: ingrese un nombre");
    } else {
        switch(jugada){
            case "piedra":
                jugadaUsuario = "piedra"
                document.getElementById("jugada").innerHTML = "Eligió PIEDRA. Para continuar, presione el botón 'Jugar'.";
                break;
            case "papel":
                jugadaUsuario = "papel"
                document.getElementById("jugada").innerHTML = "Eligió PAPEL. Para continuar, presione el botón 'Jugar'.";
                break;
            case "tijera":
                jugadaUsuario = "tijera"
                document.getElementById("jugada").innerHTML = "Eligió TIJERA. Para continuar, presione el botón 'Jugar'.";
                break;
            default:
                window.alert("Error: jugada no válida");
        }
    }
}
//Función que obtiene, al azar, una jugada para la computadora.
function obtenerJugadaComputadora () {
    jugadaComputadora = jugadas[Math.floor(Math.random() * 3)]; //en base a un número aleatorio multiplicado por 3 y redondeado hacia abajo, elige un elemento del array jugadas
    return jugadaComputadora;      
}
//Función que determina al ganador de cada ronda.
function determinarGanador (jugada1, jugada2) {
    if (jugada1 == jugada2){                                                                                        //primero corrobora un empate
        contadorEmpates++                                                                                           
        return resultado = "Empate";
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[1]) || (jugada1 == jugadas[1] && jugada2 == jugadas[2]) || (jugada1 == jugadas[2] && jugada2 == jugadas[0])) {
            contadorComputadora++                                                                                   
            return resultado = "Gana la computadora";
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[2]) || (jugada1 == jugadas[1] && jugada2 == jugadas[0]) || (jugada1 == jugadas[2] && jugada2 == jugadas[1])) { 
            contadorJugador++                                                                                       
            return resultado = "Gana el usuario";
    }
}
function jugar() {
    if (nombreUsuario=="" || nombreUsuario==undefined){
        window.alert("Error: ingrese un nombre");
    } else if (jugadaUsuario==undefined) {
        window.alert("Error: elija una jugada primero");
    } else {
        obtenerJugadaComputadora ();
        determinarGanador (jugadaUsuario, jugadaComputadora);
        document.getElementById("jugador").innerHTML = "La computadora eligio: "+jugadaComputadora+".";
        document.getElementById("computadora").innerHTML = "El usuario eligio: "+jugadaUsuario+".";
        document.getElementById("resultado").innerHTML = "El resultado fue: "+resultado+".";
        
    }
}
