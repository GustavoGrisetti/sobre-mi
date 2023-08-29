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
        document.getElementById("saludo").innerHTML = "Bienvenido "+nombreUsuario+", selecciona una de las siguientes tres jugadas:";
    }
}
//Función que determina la jugada elegida por el usuario.
function piedraPapelTijera(jugada){
    //También verifica que el nombre sea válido (no este vacío).
    if (nombreUsuario=="" || nombreUsuario==undefined){
        window.alert("Error: ingrese un nombre");
    } else {
        //Cada botón tiene un valor de jugada que se compara para obtener el valor de "jugadaUsuario".
        switch(jugada){
            case "piedra":
                jugadaUsuario = "piedra"
                document.getElementById("piedra").setAttribute("src", "imagenes/piedraGris.png");
                document.getElementById("papel").setAttribute("src", "imagenes/papelNegro.png");
                document.getElementById("tijera").setAttribute("src", "imagenes/tijeraNegro.png");
                document.getElementById("jugada").innerHTML = "Eligió PIEDRA. Para continuar, presione el botón 'Jugar'.";
                break;
            case "papel":
                jugadaUsuario = "papel"
                document.getElementById("papel").setAttribute("src", "imagenes/papelGris.png");
                document.getElementById("piedra").setAttribute("src", "imagenes/piedraNegro.png");
                document.getElementById("tijera").setAttribute("src", "imagenes/tijeraNegro.png");
                document.getElementById("jugada").innerHTML = "Eligió PAPEL. Para continuar, presione el botón 'Jugar'.";
                break;
            case "tijera":
                jugadaUsuario = "tijera"
                document.getElementById("tijera").setAttribute("src", "imagenes/tijeraGris.png");
                document.getElementById("papel").setAttribute("src", "imagenes/papelNegro.png");
                document.getElementById("piedra").setAttribute("src", "imagenes/piedraNegro.png");
                document.getElementById("jugada").innerHTML = "Eligió TIJERA. Para continuar, presione el botón 'Jugar'.";
                break;
            //En caso de que se logre forzar este programa sin obtener una jugada válida.
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
    //Primero corrobora un empate
    if (jugada1 == jugada2){                                                                                        
        contadorEmpates++                                                                                           
        return resultado = "Empate";
    //Luego verifica si gana la computadora
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[1]) || (jugada1 == jugadas[1] && jugada2 == jugadas[2]) || (jugada1 == jugadas[2] && jugada2 == jugadas[0])) {
            contadorComputadora++                                                                                   
            return resultado = "Gana la computadora";
    //Finalmente verifica si gana el jugador
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[2]) || (jugada1 == jugadas[1] && jugada2 == jugadas[0]) || (jugada1 == jugadas[2] && jugada2 == jugadas[1])) { 
            contadorJugador++                                                                                       
            return resultado = "Gana "+nombreUsuario;
    }
}
//Función que llama a las otras y verifica si hay algún ganador en el marcador global.
function jugar() {
    //También verifica que el nombre sea válido (no este vacío).
    if (nombreUsuario=="" || nombreUsuario==undefined){
        window.alert("Error: ingrese un nombre");
    //Y verifica que se haya elegido una jugada válida.
    } else if (jugadaUsuario==undefined || jugadaUsuario=="") {
        window.alert("Error: elija una jugada primero");
    //Si no hay problemas, obtiene la jugada de la CPU y calcula el resultado.
    } else {
        obtenerJugadaComputadora ();
        determinarGanador (jugadaUsuario, jugadaComputadora);
        document.getElementById("jugador").innerHTML = "La computadora eligió: "+jugadaComputadora+".";
        document.getElementById("computadora").innerHTML = nombreUsuario+" eligió: "+jugadaUsuario+".";
        document.getElementById("resultado").innerHTML = "Resultado: "+resultado+".";
        document.getElementById("victoriasJugador").innerHTML = "Victorias Jugador: "+contadorJugador;
        document.getElementById("Empates").innerHTML = "Empates: "+contadorEmpates;
        document.getElementById("victoriasComputadora").innerHTML = "Victorias CPU: "+contadorComputadora;
        //Antes de terminar, verifica si alguno ya llego a las 3 victorias, terminando el juego.
        if (contadorJugador>=3){
            document.getElementById("saludo").innerHTML = "¡"+nombreUsuario+" ha ganado en el marcador global!<br>¡Felicidades! Presiona 'Reiniciar' si quieres volver a jugar.";
            document.getElementById("jugar").setAttribute("value", "Reiniciar");
            document.getElementById("jugar").setAttribute("onclick", "reiniciar()");
        } else if (contadorComputadora>=3) {
            document.getElementById("saludo").innerHTML = "La computadora ha ganado en el marcador global.<br>Presiona 'Reiniciar' si quieres volver a jugar.";
            document.getElementById("jugar").setAttribute("value", "Reiniciar");
            document.getElementById("jugar").setAttribute("onclick", "reiniciar()");
        //Caso contrario, pasa a la siguente ronda.
        } else {
            document.getElementById("saludo").innerHTML = "Siguiente ronda. Elije una nueva jugada:";
        }
    }
}
//Función que reemplaza a jugar() cuando ya se ha definido un ganador. Reinicia la partida (valores y contadores).
function reiniciar(){
    contadorJugador = 0;
    contadorComputadora = 0;
    contadorEmpates = 0;
    jugadaUsuario = "";
    document.getElementById("jugador").innerHTML = "";
    document.getElementById("computadora").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("victoriasJugador").innerHTML = "";
    document.getElementById("Empates").innerHTML = "";
    document.getElementById("victoriasComputadora").innerHTML = "";
    document.getElementById("jugada").innerHTML = "";
    document.getElementById("saludo").innerHTML = "Bienvenido "+nombreUsuario+", selecciona una de las siguientes tres jugadas:";
    document.getElementById("tijera").setAttribute("src", "imagenes/tijeraNegro.png");
    document.getElementById("papel").setAttribute("src", "imagenes/papelNegro.png");
    document.getElementById("piedra").setAttribute("src", "imagenes/piedraNegro.png");
    document.getElementById("jugar").setAttribute("value", "Jugar");
    document.getElementById("jugar").setAttribute("onclick", "jugar()");
}