// //input
let array = [3, 4, 5,1, 3, 6];
let res = []; //defineo mi reslutaddo que en este caso quiero un arreglo

for (let i = 0; i < array.length; i++)
 {

	//console.log[array[i]]; para obtener los elemetntis del arreglo
	//console.log[array[2]]; y esto nos va a der el numero 5;

	if (array[i+1] !== undefined) //indefinido para que no multiplique la posicion 
	{
		res[i]=array[i] * array[i+1];


	}


	

}
console.log(res);

//output
//[12, 20, 5, 3, 18]





///otro ejercicio





let saludo = ()=>{
	console.log("hola");
}

suma()

//haro le paso un string y lo que le digo es 
//lo que tu recibas en los () lo utilizo en el C.L
let x = 5;
let pow = (a)=>{
	console.log(a +6);
}

pow(x);
//esto me va a dar 30 pq va a multiplicar 5*6;

/*
Recuerda que las funciones van hasta arriba o abajo del codigo.
Una vez definida la funcion podemos utilizarla en el momento que llamamos a la funcion 
[en este caso con suma() [ojo] lo que esta dentro del parentesis de suma es la variable que va a entrar a la funcion]
la veriable dentro de los parentesis la debemos de mostrar antes de llamar a la funcion

*/




//otro ejemplo





let suma = (a,b)=>{
	let c = a+b;
	console.log(c);
}

let resta = (a,b)=>{
	let c = a-b;
	console.log(c);
}


suma(3,4);
resta(3,4);




//otro mas

let x = 5

let suma = (a,b)=>{
	let c = a+b;
	console.log(c);
	return c; //este es un output
}

let resta = (a,b)=>{
	let c = a-b;
	console.log(c);
}


suma(x,4);  = 9
resta(suma(1,1),4); // me va  a sumar 1+1 = 2 y ese dos lo va a meter a la funcion de la resta (2-4) = -2



Math.random() // buscra


//



let x = 5

let suma = (a,b)=>{
	let c = a+b;
	console.log(c);
	return c; //este es un output
}

let resta = (a,b)=>{
	let c = a-b;
	console.log(c);
}
let x = 5

let cuadrado = (x)=>{ //mete el 5 
	x = x*x;;//esto me da 25
	console.log(x); //va a escribir el 25
}
cuadrado(x)

console.log(x) // me va imprimir 5 pq en realidad nunca se modificó

