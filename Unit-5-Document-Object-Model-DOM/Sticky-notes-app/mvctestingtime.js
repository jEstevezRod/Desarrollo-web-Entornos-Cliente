//-------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------- MODELO --------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//
class Note {
	constructor(titulo = "", date = "0", textarea = "") {
		this.titulo = titulo;
		this.textarea = textarea;
		this.date = 0;
		this.botonx = "X";
		this.seleccionada = false;
		this.ID = 0;
	}
}

class collectionNotes {
	constructor() {
		this.totalNotas = [];
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------- VISTA --------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//
class NotaView {
	constructor(note, tablero) {
		// CREACIÓN DE LOS TAGS HTML Y ATRIBUTOS / EVENTOS //
		this.parent = document.querySelector(tablero);
		this.barra = document.createElement("div");
		this.note = document.createElement("div");
		this.note.setAttribute("class", "notaza");
		this.note.setAttribute("id", note.ID)
		this.title = document.createElement("textarea");
		this.title.setAttribute("id", "titulo");
		this.title.setAttribute("maxlength", "18");
		this.textarea = document.createElement("textarea");
		this.textarea.setAttribute("id", "texto");
		this.textarea.setAttribute("overflow", "hidden");
		this.time = document.createElement("div");
		this.time.setAttribute("id", "reloj");
		this.botonX = document.createElement("button");
		this.botonX.setAttribute("type", "button");
		this.botonX.setAttribute("id", "close");
		//EVENTOS
		this.title.setAttribute("onchange", "controlador.actualizarNote(this)");
		this.textarea.setAttribute("onchange", "controlador.actualizarNote(this)");
		this.botonX.setAttribute("onclick", "controlador.cerrarVentana(this)");
		this.note.setAttribute("onmousedown", "controlador.seleccionarNote(this); controlador.posiciones(event)");
		document.body.setAttribute("onmousemove", "controlador.moverNote(event)");
		this.note.setAttribute("onmouseup", "controlador.leaveNote()");
		//AGREGACION DE LOS HIJOS A LOS  PADRES
		this.parent.appendChild(this.note);
		this.note.appendChild(this.barra);
		this.note.appendChild(this.title);
		this.note.appendChild(this.textarea);
		this.note.appendChild(this.time);
		this.barra.appendChild(this.botonX);
		//CREACCION DEL TEXTO DE CADA ELEMENTO DEL DIV
		this.tituloView = document.createTextNode(note.titulo);
		this.dateView = document.createTextNode("La nota se acaba de crear");
		this.textareaView = document.createTextNode(note.textarea);
		this.IDView = document.createTextNode(note.ID);
		this.botonX.innerHTML = "X";
		// AGREGACION DE LOS TEXTOS A SUS PADRES
		this.title.appendChild(this.tituloView);
		this.textarea.appendChild(this.textareaView);
		this.time.appendChild(this.dateView);
	}
}

class btnView {
	constructor() {
		this.parent = document.getElementById("buttonsection");
		this.btn = document.createElement("button");
		this.parent.appendChild(this.btn);
		this.btn.setAttribute("id", "new");
		this.btn.innerHTML = "Crear nota";
		this.btn.setAttribute("onclick", "controlador.crearNota()");
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------- CONTROLADOR --------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//
class Controlador {
	constructor() {
		this.coleccionNotas = new collectionNotes();
		this.botonazo = new btnView();
		this.elemento = false;
		this.tempo = this.startCronometro()
		this.contID = 0;
		this.pos;
	}
	
	crearNota() {
		this.nota = new Note();
		this.nota.ID += this.contID;
		this.coleccionNotas.totalNotas.push(this.nota);
		this.Viewnota = new NotaView(this.nota, ".tablero");
		this.contID++;
	}
	
	startCronometro() {
		this.control = setInterval(() => this.cronometro(), 5000);
	}
	
	cronometro() {
		if (controlador.coleccionNotas.totalNotas != []) {
			controlador.coleccionNotas.totalNotas.forEach(function (nota) {
				if (nota.date < 59) {nota.date++}
				if (nota.date == 1) {document.getElementById(nota.ID).lastChild.innerHTML = `nota creada hace ${nota.date} minuto`;}
				else if (nota.date > 1){document.getElementById(nota.ID).lastChild.innerHTML = `nota creada hace ${nota.date} minutos`;}
			})
		} else {console.log("no tienes notas :(")}
	}
		
	actualizarNote(iden) {
		controlador.coleccionNotas.totalNotas.forEach(function (nota) {
			if (nota.ID == iden.parentNode.id) {
				if (iden.id == "texto") {nota.textarea = iden.value}
				else {nota.titulo = iden.value}
			}
		})
	}
	
	seleccionarNote(e) {
		e.seleccionada = true;
		this.elemento = e;
	}
	
	leaveNote() {
		this.elemento.seleccionada = false;
	}
	
	moverNote(e) {
		if (this.elemento.seleccionada) {
			this.elemento.style.left = (this.offsetX + e.clientX - this.startX) + 'px';
			this.elemento.style.top = (this.offsetY + e.clientY - this.startY) + 'px';
		}
	}
	
	posiciones(e) {
		this.startX = e.clientX;
		this.startY = e.clientY;
		this.offsetX = parseInt(this.elemento.offsetLeft);
		this.offsetY = parseInt(this.elemento.offsetTop);
		
	}
	
	cerrarVentana(iden) {
		controlador.coleccionNotas.totalNotas.forEach(function (nota) {
			if (nota.ID == iden.parentNode.parentNode.id) {
				controlador.coleccionNotas.totalNotas.splice(controlador.coleccionNotas.totalNotas.indexOf(nota),1)
			}
		});
		iden.parentElement.parentElement.remove();
	}
}


//--------------------------------------------------------------------------------------------------------

window.onload = () => {
	controlador = new Controlador();
};

