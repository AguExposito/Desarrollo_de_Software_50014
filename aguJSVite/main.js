//ej 1-2
let a1=5
let b1=10
let c=a1+b1
console.log("La suma de a y b es: "+c)

//ej 1-3
let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("Hola, "+ nombre +" Bienvenido/a.");

//ej 2-1
let a = prompt("Ingrese primer numero");
let b = prompt("Ingrese segundo numero");

if (a > b) {
  console.log("El número mayor es a: "+ a);
} else if (b > a) {
  console.log("El número mayor es b:" + b);
} else {
  console.log("a y b son iguales");
}

//ej 2-2
let numeroIngresado = prompt("Por favor, ingresa un número:");

numeroIngresado = Number(numeroIngresado);

if (numeroIngresado % 2 === 0) {
  console.log("El número "+ numeroIngresado + " es par");
} else {
  console.log("El número "+ numeroIngresado + " es impar");
}

//ej 3-1
let numero = 10;

while (numero >= 0) {
  console.log("El valor de la variable es: " +numero);
  numero--;
}


//ej 3-2
let numeroIngresado2;

do {
  numeroIngresado2 = prompt("Por favor, ingresa un número mayor a 100:");

  numeroIngresado2 = Number(numeroIngresado2);

  console.log("El número ingresado es: " + numeroIngresado2);
} while (numeroIngresado2 <= 100);

console.log("¡Has ingresado un número mayor a 100!");


//ej 4-1

function esPar(numero) {
  return numero % 2 === 0;
}

console.log("El número 4 es par: " + esPar(4)); 
console.log("El número 7 es par: " + esPar(7)); 
console.log("El número 10 es par: " + esPar(10)); 

//ej 4-2
function convertirCelsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log("30 grados Celsius son: " + convertirCelsiusAFahrenheit(30) + " grados Fahrenheit"); // 86°F
console.log("0 grados Celsius son: " + convertirCelsiusAFahrenheit(0) + " grados Fahrenheit"); // 32°F
console.log("-10 grados Celsius son: " + convertirCelsiusAFahrenheit(-10) + " grados Fahrenheit"); // 14°F

//ej 5-1
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Mendoza",
  
  cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};

console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

persona.cambiarCiudad("Cordoba");

console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

//ej 5-2
let libro = {
  titulo: "Corazón Delator",
  autor: "Edgar Allan Poe",
  año: 1953,

  esAntiguo: function() {
    let añoActual = new Date().getFullYear();
    if (añoActual - this.año > 10) {
      console.log("El libro '" + this.titulo + "' es antiguo.");
    } else {
      console.log("El libro '" + this.titulo + "' es reciente.");
    }
  }
};

libro.esAntiguo();

//ej 6-1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multiplicados = [];

for (let i = 0; i < numeros.length; i++) {
  multiplicados.push(numeros[i] * 2);
}

console.log("Array original: " + numeros);
console.log("Array multiplicado por 2: " + multiplicados);

//ej 6-2
let pares = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
  
  if (pares.length === 10) {
    break;
  }
}

console.log("Array de los primeros 10 números pares: " + pares);

//ej 7-1
function cambiarColor() {
  let parrafos = document.querySelectorAll("p"); 
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue"; 
  }
}


//ej 7-2
function mostrarAlerta() {
  let nombre = document.getElementById("nombre").value; 
  alert("El valor ingresado es: " + nombre); 
}

//ej 8-1
let elementosLi = document.querySelectorAll("li");

elementosLi.forEach(function(li) {
  li.addEventListener("click", function() {
    console.log("Texto del elemento: " + li.textContent); 
  });
});

//ej 8-2
let input = document.getElementById("miInput");
let deshabilitarBtn = document.getElementById("deshabilitarBtn");
let habilitarBtn = document.getElementById("habilitarBtn");

deshabilitarBtn.addEventListener("click", function() {
  input.disabled = true; 
});

habilitarBtn.addEventListener("click", function() {
  input.disabled = false; 
});

//ej 9

const formulario = document.getElementById("formulario");
const emailInput = document.getElementById("email");
const resultadoDiv = document.getElementById("resultado");
const eliminarBtn = document.getElementById("eliminarBtn");


function mostrarCorreo() {
  const emailGuardado = localStorage.getItem("correo");
  if (emailGuardado) {
    resultadoDiv.textContent = "Correo guardado: " + emailGuardado;
    emailInput.value = emailGuardado;
    eliminarBtn.style.display = "inline"; 
  } else {
    resultadoDiv.textContent = ""; 
    eliminarBtn.style.display = "none"; 
  }
}

mostrarCorreo();

formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = emailInput.value; 
  localStorage.setItem("correo", email);
  mostrarCorreo();
});


eliminarBtn.addEventListener("click", function() {
  localStorage.removeItem("correo");
  mostrarCorreo(); 
});
