// let nombre = prompt("dame tu nombre");

------------------------------------------------

// let edad = prompt("dame tu edad");

// if (edad< 18) {
//  console.log("no tienes la edad suficiente para votar");
// }

// console.log(nombre, edad);

------------------------------------------------
// undefined = existe la variable ´pero no contiene nada
// null= 
// NaN= cuando quieres jugar con numeros pero alguna de las variables es un string


-------------------------------------------------

let num = prompt("ingresa un numero"); //EL PROMPT SIMPRE TA VA DAR UN TEXTO
num = parseInt((num)% 2); //parseInt convirte un string a una numero entero
                           // va a calcular el modulo del numero dividido entre 2

// num = Numero(num); forma reservada de JS para convertir la entrada a numero;

num = Numero(num);

if (numero ) {
	console.log("esto es un numero");
	if (num % 2 === 0) {
	console.log("el numero que ingresaste es par");
	}
	else{
		console.log("el numero que ingresaste es un numero impar");
	}
}
else{
	console.log("esto es un numero, recarga");
}
