///let nombre = "david";
//let nombre = 5;

//if (nombre.lenght > 5 )
//{
//	console.log("nom largo")
//}else
//{
//	console.log("nom corto")
//}

//typeof siempre va a regresar un sitring aunque la variable sea un numero u otra cosa

///console.log(typeof nombre)
///if (typeof nombre === "string")
///{
///	console.log("es un string")
///}else if()                        //si no se puede hacer el if de arriba se evalua el otro if
///elsde                        si no se cumple el primer if va a hacer la sig acción
///{
///	console.log("es un numero")
///}



/*ciclos*/


/////let arreglo =[2, 3, 4, 6, 7, 8]

// console.log(arreglo) para ver todos los elementos
/////for (let i = 0; i< arreglo.lenght; i++)
/////{
	// i = i+2; (ojo nunca cambiar el valor de la i)
	// console.log(arreglo [i]) impre todos los elementosdel arreglo pero como se repite mi arreglo 100 veces, una vez que termina el arreglolos siguientes van a ser indefinidos

// console.log(arreglo.lenght) me va  adar la longitud del arrgelo

/////console.log( arrgelo[i]);

/////}


////  (para q me imprima los elementos del 0-9)


//// for (let i = 0; i< 100; i++)
//// {
//// 	console.log(arreglo[i])
//// }



// (para que me de las letras del mi palabra)
///// /let nombre = "angelo";
///// /for(et i = 0; i< arreglo.lenght; i++)
///// /{
///// /	console.log(nombre)
///// /}



/*ciclo que me muestre los numeros del 50 al 100///// */



///// //for(et i = 50; i<= 100; i++)
/*(ojo) estos son los mismo*/
/*i++*/
/*i = i+1*/
/*i += 1*/
///// //{
///// //	console.log(i);
///// //}///// //


/*  objetos */

///// /// let obj = { // asi se declara un objeto
///// /// //para accedemos a ellos utilizan la llave valor
///// /// nombre:"david",
///// /// edad: 28,
///// /// peliculasfav: ["Hércules", "amigos invisibles"],
///// /// direccion : 
///// /// 	{
///// /// 		casa : {
///// /// 			calle: "augustin melgar",
///// /// 			numero: "44";
///// /// 		}
///// /// 		oficinas:{
///// /// 			calle: "araggon",
///// /// 			numero: "199";
///// /// 		}
///// /// 	}
///// /// }
//   para aceder a los elementos de un objeto
//console.log(obj.edad)

//   para entrar a Hercules
//console.log(obj.peliculasfav[1])
//   para entrar a "agustin melgar"
//console.log(obj.direccion.casa.calle)

/*arreglo con objetos*/



//  console.log(array[0].nombre) para entar a david, array[0] pq dentro de los [] el primer elemento son las {}
// let array = 
// 	[
// 		{
// 			nombre:"david",
// edad: 28,
// peliculasfav: ["Hércules", "amigos invisibles"],
// direccion : 
// 	{
// 		casa : {
// 			calle: "augustin melgar",
// 			numero: "44";
// 		}
// 		oficinas:{
// 			calle: "araggon",
// 			numero: "199";
// 		}
// 	}
// }