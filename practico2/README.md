# Piedra, Papel o Tijera

_Una aplicación para jugar al tradicional "Piedra, Papel o Tijera" contra la CPU al mejor de 5 rondas_

## Comenzando 🚀

_La aplicación tiene un sector para escribir un nombre y luego ingresarlo al presionar el botón "Ingresar"_

_La aplicación no permitirá continuar hasta ingresar un nombre válido (no vacío)_

_Una vez ingresado el nombre, se deberá elegir una de las 3 jugadas haciendo clic en cualquiera de las imágenes_

_La aplicación repetirá al usuario sobre la jugada elegida, la cual se confirmará al presionar el botón "Jugar"_

_Al presionar el botón "Jugar", se calculará al azar una jugada para la computadora_

_Se obtendrá un ganador de la ronda y se anunciarán ambas jugadas (jugador y computadora)_

_Los contadores llevarán la cuenta de las victorias y empates_

_Una vez un contador de victorias llegue a 3, la partida acaba, se define el ganador y permite volver a empezar el juego_

_Al presionar "Reiniciar", todos los valores vuelven a sus estados originales (excepto el nombre que se mantiene)_

### Datos de Desarrollo 🛠️

_El index.html fue hecho desde cero_

_El style.css esta basado en gran parte en el estilo usado en el práctico 1 (calculadora simple)_

_Íconos obtenidos desde https://www.freeimages.com/es/premium-clipart/rock-paper-scissors-black-and-white-royalty-free-vector-icon-s-6710503_
    *Modificados mediante Paint 11.2302.19.0 y Adobe Photoshop 24.7

_El archivo piedraPapelTijera.js esta basado en gran parte en las funciones usadas en el práctico 4 de la primera etapa de AP4.0 (Piedra, Papel o Tijeras en JS)_
    *Se adaptaron funciones para obtener datos desde el index.html (se eliminaron todas las líneas que usaban "readline-sync" y "console.log()").
    *Se eliminó el ingreso por texto de la jugada del usuario (ahora usa las imágenes).
    *Se reutilizaron los contadores, las funciones obtenerJugadaComputadora() y determinarGanador () casi en su totalidad.

## Pruebas Técnicas ⚙️

_Al presionar el botón "Ingresar", el botón "Jugar" o una de las imágenes de las jugadas, el sistema avisa de un error hasta ingresar un nombre válido_ (Correcto)

_Al presionar las imágenes de las jugadas, el sistema avisa mediante texto la jugada elegida por el usuario_ (Correcto)

_Al presionar el botón "Jugar" sin elegir una jugada, el sistema avisa con un error hasta elegir una válida_ (Correcto)

_Al presionar el botón "Jugar" con la jugada elegida, el sistema avisa mediante 3 líneas de texto, ambas jugadas y el resultado de la ronda_ (Correcto)

_Al presionar el botón "Jugar" con la jugada elegida, el sistema avisa mediante 3 líneas de texto, ambas jugadas y el resultado de la ronda_ (Correcto)

_Los 3 contadores al final llevan el marcador de victorias y empates_ (Correcto)

_El ganador se define al llegar a 3 victorias_ (Correcto)

_Los empates no cuentan para definir el ganador, son sólo estadísiticos_ (Por especificación del docente)

_Al llegar a 3 victorias, el sistema emite un mensaje de texto anunciando el ganador_ (Correcto)

_Al llegar a 3 victorias, el botón "Jugar" cambia a "Reiniciar" para poder volver a empezar desde cero_ (Correcto)

## Autor ✒️

* **Gustavo Grisetti** - [Greyhearth](https://github.com/Greyhearth)
