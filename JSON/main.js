/*


let alumno = 
{
	nombre:"angelo",
	edad : 27,
	snsei : true,
	batch : [4, 6, 8, 10],
	musica:
	 {
	 	favoritos:["muse", "pate de fua"], 
	 	meh: ["mon la ferte", "heroes del silencio","31 minutos"]
	},
	direccion: 
	{
		calle:"anaxagoras",
		col:"narvarte",
		numint: 511
	}
}

//

console.log(alumno.nombre, alumno.edad, alumno.batch[10]) //para acceder a un dato especifico

console.log(alumno.music.meh[2]) //par aver 31 minutos

//

// para poner la info sin tener el menu de ariba desplegado
let musica = document.getElementById("musica");
musica.innerHTML = alumno.music.meh

//

//si quiero q cada formato sea separado
//en ezte caso tine 3 elementps y el for va a parar cuando sea de 0 a 3,

for(let i=0; i<alumno.music.meh.length; i++)
{
	console.log(alumno.music.meh[i]); // esto es equivalente al arreglo com0leto de meh y me lo va a imprimer uno debajo de otro
}
//for se usa para acceder a objetos. para conseguir la misma  info de varios objetos más rapido

//

//para modificar los datos,
//se me olvido agrgar un valorr en batch (cun(.push) meto un elemento al final de la lista )
alumno.batch.push(20);
console.log(alumno.batch);

//

//como se sobre escribe un valor
alumno.email = "david@gmail.com"
console.log(alumno)

//


//si pongo solo alumno, en palparte de page, en ela flechita en la perte izq de la palabra alumno en el explorador, le doy y me va a parecer todas las herramientas que le´puedo aplicar a mi objeto
// en network me va a decir cunto tarda en cargar los elementos de mis pagina
// buscar en google : developer expert



//


*/

let alumno = 
{
	nombre:document.getElementById("nombre"),
	apellido:document.getElementById("apellido"),
	email: document.getElementById("email"),
	lenguaje :document.getElementById("lenguaje"),
	exam :document.getElementById("exam"),
	equipo :document.getElementById("equipo"),
	razon :document.getElementById("razon")

	}

let boton = document.getElementById("boton");


boton.addEventListener("click",
	()=>{

		console.log(alumno.innerHTML)
		event.preventDefault()

})