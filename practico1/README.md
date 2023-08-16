# Calculadora Simple

_Una calculadora con operaciones simples programada en JS, HTML y CSS_

## Comenzando 🚀

_La calculadora tiene dos cuadros de texto que permite ingresar únicamente números, como valores 1 y 2 para las operaciones._

_La lista desplegable contiene 4 operaciones básicas (suma, resta, multiplicación y división) para utilizar con los valores ingresados._

_La misma tiene como restricción el ingreso únicamente de números (permite decimales) mediante la especificación del campo por medio de HTML._

_También cuenta con restricciones de no permitir calcular sin tener ambos valores, sin seleccinar una opción de la lista o dividir por 0, mediante JS_

_Cuenta con un botón "Calcular" para realizar la operación elegida con ambos valores, y un botón "Limpiar" para volver a iniciar_

## Pruebas Técnicas ⚙️

_Al presionar el botón "Calcular" ingresando 1 o ningún valor (vacío), el sistema avisa de un error mediante un mensaje emergente. No continua el cálculo._ (Correcto)

_Al presionar el botón "Calcular" ingresando 2 valores pero no una opción de la lista desplegable, el sistema avisará de un error. No continua el cálculo._ (Correcto)

_Si se elige "División" como opción en la lista, y el segundo valor es 0, el sistema avisa de un error por no poder dividir por 0. No continua el cálculo._ (Correcto)

_Ambos cuadros de ingreso de texto son elementos <input> con ' type="number" ', lo que impide ingresar elementos no válidos._ (Correcto)

_Las funciones Suma, Resta y Multiplicación fueron probadas con éxito con valores de 4 cifras:_

    _La suma 1233 + 1414 = 2647_ (Correcto)

    _La resta 1233 - 1414 = -181_ (Correcto)

    _La multiplicación 1233 * 1414 = 1743462_ (Correcto)

_La división da un resultado correcto pero con 16 cifras de decimales: 1233 / 1414 = 0.871994342291372_ (Revisar)

_Limitado el resultado de la división a 2 cifras decimales para evitar el problema anterior._ (Correcto)

_Al sumar decimales específicos como 2.1 + 3.2 = 5.300000000000001 _ (Revisar)

_Modificado el código en JavaScript para que todo resultado en las 4 operaciones sea redondeado a 2 decimales de ser necesario. También resuelve el problema visto en la división._ (Correcto)

_Al operar con grandes números (más frecuentemente en la multiplicación), si el resultado es mayor a 16 dígitos, empieza a dar cifras incorrectas. _ (Revisar)

    _La multiplicación 2222222222222222 * 2 = 4444444444444444 (16 dígitos ambos) _ (Correcto)

    _La multiplicación 22222222222222222 * 2 = 44444444444444450 (17 dígitos ambos) _ (Incorrecto)

    _La multiplicación 222222222222222222 * 2 = 444444444444444400 (18 dígitos ambos) _ (Incorrecto)

_Limitado el número de cifras a mostrar a 16 como máximo (incluyendo el punto decimal), por lo que sólo el 1er resultado anterior es posible. _ (Correcto)

## Autor ✒️

* **Gustavo Grisetti** - [Greyhearth](https://github.com/Greyhearth)
