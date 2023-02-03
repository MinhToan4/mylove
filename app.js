const diceSi = document.getElementById("botonSi");
const diceNo = document.getElementById("botonNo");
let contador = 0;
alto = window.innerWidth;
ancho = window.innerHeight;
let confeti = document.querySelector("#my-canvas")


function dijoNo() {
	//newWidth = (Math.random(0, 2) * 100);
	//newHeight = (Math.random(0, 2) * 100);

	document.getElementById("botonNo").style.position = "relative"
	document.getElementById("botonNo").style.left = 50 + "px"

	contador++
	if (contador == 8) {
		Swal.fire({
			title: "Pero por que no :c",
			text: "Acaso tengo algo mal? :c"
		})
	}
}

function regresoBoton() {
	document.getElementById("botonNo").style.position = "relative"
	document.getElementById("botonNo").style.left = 0 + "px"
}

function dijoSi() { //que felicida loco
	Swal.fire({
		title: "Gracias por aceptarme ❤️",
		confirmButtonText: "Te amo <3"

	})
	document.getElementById("botonNo").style.display = "none"
	confeti.classList.add("active")
}
diceNo.addEventListener("click", regresoBoton);
