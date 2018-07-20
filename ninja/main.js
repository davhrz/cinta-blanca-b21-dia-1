/*

let boton = document.getElemetById("boton");

boton.addEventeListener("click", //en el momento que el boton tenga un evento en este caso (un click) va a tener una funcion
	()=>{
	console.log("click"); funcion
})

*/


/*

let boton = document.getElementById("boton");
let n1= document.getElementById("n1");
let n2= document.getElementById("n2");
let res= document.getElementById("res");
let total= 0;


boton.addEventListener("click", //en el momento que el boton tenga un evento en este caso (un click) va a tener una funcion
	()=>{
	total =Number(n1.value) + Number(n2.value);
	res.innerHTML = total;
});

*/
//pag web de mi seri fav con bootstrap



let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let cuerpo = document.getElementById("cuerpo");
let boton = document.getElementById("boton");



boton.addEventListener("click",
	()=>{
	
	console.log(titulo.value);
	console.log(subtitulo.value);
	console.log(cuerpo.value);

	console.log(titulo.innerHTML);
	console.log(subtitulo.innerHTML);
	console.log(cuerpo.innerHTML);
	// event.preventDefault()
});
