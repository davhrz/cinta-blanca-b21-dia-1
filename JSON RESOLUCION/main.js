

let apellido = document.getElementById("apellido"),
let email = document.getElementById("email"),
let lenguaje = document.getElementById("lenguaje"),
let exam = document.getElementById("exam"),
let equipo = document.getElementById("equipo"),
let razon = document.getElementById("razon")

let alumno

{
	nombre:"",
	apellido:"",
	email:"",
	//y mas

}



let boton = document.getElementById("boton");


boton.addEventListener("click",
	()=>{

		//este y el sig es lo primero que pongo aqui
		console.log(nombre.value)
		event.preventDefault()
		//lo segundo que pongo
		alumno.nombre = nombre.value; //aqui paso el valor que puso el usuario a mi variable nombre que pertenece a alumno
		alumno.apellido = apellido.value;
		console.log(alumno); //esto solo se pone una vez


})