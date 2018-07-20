//		alert("xd");		
// un ciclo es algo q se repite, en programacion se utiliza for y mas

//for (var i = Things.length - 1; i >= 0; i--) {Things[i]}

//---------------------------------------------------

//let i = 0;

//for (i=0; i<10; i = i+1){
//	console.log("a");}

//otra forma de hacerlo

//for(let i = 0; i<10; i++) 	// es i++ por el sig apartado
//{
//	console.log(i);
//}

//---------------------------------------------------
//
//let x= 10; 
//x = x+1;	o 	  x +=1; 	o 	 x++; para incrementarle 1 a x

//---------------------------------------------------


// for( i = 0; i<100; i++)
// {

// 	if (i % 2 === 0) 
// 	{
// 	console.log(i + " " + "el numero que ingresaste es par");
// 	}
// 	else
// 	{
// 		console.log(i + " " + "el numero que ingresaste es un numero impar");
// 	}

// }

//--------------------------------------------------

// let x = ["hey", 2, 4, 8, "z"];
// console.log(x.length)	 dame la extencion de mi string

//--------------------------------------------------

// 		for dinamicos		
// let nombre = prompt("dame tu nombre");
// console.log(nombre.length); 	calcula la cant, es decir, un numero de caraxteres que tiene el nombre que ingresa el usuario
// for( i = 0; i<(nombre.length); i++)
// {
// 	console.log(nombre[i]);
// }

//--------------------------------------------------

// tarea 
// usuario tine que ingresar una palabara
// y nosotros debemos de regresar la palabra modificada en mayuscula minuscula
// ej
// usuario "hola a todos"
// regresa "HoLa A tOdOs"

let palabra = prompt("palabra");
let arreglo = [];
let resultado = "";

for(let i=0; i<arreglo.length; i++)
{

	if (i % 2 === 0) 
	{
		arreglo[i] = palabra[i].toLowerCase();
	}
	else
	{
		arreglo[i] = palabra[i].toUpperCase();
	}
	resultado +=arreglo[i];

}

console.log(resultado);

