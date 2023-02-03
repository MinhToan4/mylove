let botonSi = document.getElementsByClassName("diceSi")
let botonNo = document.getElementsByClassName("diceNo")
let contador = 0
alto = window.innerWidth;
ancho = window.innerHeight;
let confeti = document.querySelector("#my-canvas")

function dijoNo() {
	//newWidth = (Math.random(0, 2) * 100);
	//newHeight = (Math.random(0, 2) * 100);

	document.getElementById("dijoNo").style.position = "relative"
	document.getElementById("dijoNo").style.left = 50 + "px"

	contador++
	if (contador == 8) {
		Swal.fire({
			title: "Pero por que no :c",
			text: "Acaso tengo algo mal? :c"
		})
	}
}

function dijoSi() { //que felicida loco
	Swal.fire({
		title: "Gracias por aceptarme ❤️",
		confirmButtonText: "Te amo <3"

	})
	document.getElementById("dijoNo").style.display = "none"
	confeti.classList.add("active")
}

addEventListener("click", (dijoNo) => {
	document.getElementById("dijoNo").style.position = "relative"
	document.getElementById("dijoNo").style.left = 0 + "px"
})