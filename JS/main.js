var engr1, java, php, kotlin, nube, codigo, javascript, engr2, sql;
var getPrefPantalla;
var btn;
var modo;
var cabecera;
var contEstrellas;
var bordeAnimado1;
var bordeAnimado2;
var hora;
var fecha;
window.onload = () => {
  iniciarElementos();
  setInterval(iniciarHora, 1000);
  setInterval(iniciarFecha, 1000);
  moverLenguajes();
  btn.addEventListener("click", cambiarColor);
  window.addEventListener("scroll", () => {
    animacionBordes();
  });
};

function iniciarElementos() {
  engr1 = document.getElementById("engr1");
  java = document.getElementById("java");
  php = document.getElementById("php");
  kotlin = document.getElementById("kotlin");
  nube = document.getElementById("nube");
  codigo = document.getElementById("codigo");
  javascript = document.getElementById("javascript");
  engr2 = document.getElementById("engr2");
  sql = document.getElementById("sql");
  getPrefPantalla = window.matchMedia("(prefers-color-scheme: dark)");
  btn = document.getElementById("btn");
  iconMode = document.getElementById("icon-mode");
  modo = document.getElementById("modo");
  contEstrellas = document.getElementsByClassName("estrellas");
  bordeAnimado1 = document.getElementById("borde_animado1");
  bordeAnimado2 = document.getElementById("borde_animado2");
  hora = document.getElementById("hora");
  fecha = document.getElementById("fecha");
}

function moverLenguajes() {
  engr1.style.transform = "translate(-630%, 100%)";
  java.style.transform = "translate(-360%, -100%)";
  php.style.transform = "translate(-320%, -200%)";
  kotlin.style.transform = "translate(-120%, -600%)";
  nube.style.transform = "translate(-0%, -300%)";
  codigo.style.transform = "translate(120%, -550%)";
  javascript.style.transform = "translate(140%, -300%)";
  engr2.style.transform = "translate(400%, 10%)";
  sql.style.transform = "translate(350%, 200%)";
}
function cambiarColor() {
  document.documentElement.classList.toggle("dark");
  if (esModoOscuro()) aplicarEstilosModoOscuro();
  else aplicarEstilosModoClaro();
  cambiarIcono();
  rotarIcono();
}

function rotarIcono() {
  let valorDeRotacion = document.documentElement.classList.contains("dark")
    ? "360deg"
    : "0deg";
  iconMode.style.transform = `rotate(${valorDeRotacion})`;
}
function cambiarIcono() {
  iconMode.classList.toggle("fa-sun");
  iconMode.classList.toggle("fa-moon");
}

function aplicarEstilosModoOscuro() {
  modo.textContent = "dark mode";
  contEstrellas[0].style.display = "block";
}
function aplicarEstilosModoClaro() {
  modo.textContent = "light mode";
  contEstrellas[0].style.display = "none";
}

function esModoOscuro() {
  return document.documentElement.classList.contains("dark");
}
function animacionBordes() {
  const posicion = bordeAnimado1.offsetTop;
  const scrollY = window.scrollY;
  if (scrollY >= posicion) {
    bordeAnimado1.classList.add("animacion");
  }
}

function iniciarHora() {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  hora.textContent = `${hour}:${minutes}:${seconds}`;
}
function iniciarFecha() {
  const hoy = new Date();
  let fechaFormateada = hoy.toLocaleDateString("es-Es", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  fecha.textContent = fechaFormateada;
}
