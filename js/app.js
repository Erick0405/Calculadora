var resultado = document.getElementById("display");
var on = document.getElementById("on");
var sign = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var suma = document.getElementById("mas");
var restar = document.getElementById("menos");
var multiplicacion = document.getElementById("por");
var igual = document.getElementById("igual");
var dividido = document.getElementById("dividido");
var punto = document.getElementById("punto");
var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var display = "0" ;
var valorpendiente;
var stringarray = [];
var operandoA;
var operandoB;
var operacion;
var resetear;



Calculadora = (function init (){


cero.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "0"
    } else {
      resultado.innerHTML += "0";
    }
  }
  }


uno.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
        if (resultado.innerHTML == "0") {
          resultado.innerHTML = "1"
    }
    else {
      resultado.innerHTML += "1";
    }
  }
  ejecutar();
  }

dos.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "2"
    } else {
      resultado.innerHTML += "2";
    }
  }
  ejecutar();
  }


tres.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "3"
    } else {
      resultado.innerHTML += "3";
    }
  }
  ejecutar();
  }



cuatro.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "4"
    } else {
      resultado.innerHTML += "4";
    }
  }
  ejecutar();
  }


cinco.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "5"
    } else {
      resultado.innerHTML += "5";
    }
  }
  ejecutar();
  }


seis.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "6"
    } else {
      resultado.innerHTML += "6";
    }
  }
  ejecutar();
  }


siete.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "7"
    } else {
      resultado.innerHTML += "7";
    }
  }
  ejecutar();
  }


ocho.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "8"
    } else {
      resultado.innerHTML += "8";
    }
  }
  ejecutar();
  }


nueve.onclick = function (e) {
  if (resultado.innerHTML.length < 8) {
    if (resultado.innerHTML == "0") {
      resultado.innerHTML = "9"
    } else {
      resultado.innerHTML += "9";
    }
  }
  ejecutar();
  }

  punto.onclick = function(e) {
  if (resultado.innerHTML.indexOf(".") == -1) {
  resultado.innerHTML += ".";
  }
  ejecutar();
  }

on.onclick = function (e) {
    display = "0";
    valorpendiente= undefined;
    stringarray = [];
    resultado.innerHTML = display;
    ejecutar();
}

suma.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "+";
  limpiar();
  ejecutar();
}

multiplicacion.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "*";
  limpiar();
  ejecutar();
}

restar.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "-";
  limpiar();
  ejecutar();
}

  sign.onclick = function (e) {
  resultado.textContent= resultado.textContent*-1;
  ejecutar();
}

dividido.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "/";
  limpiar();

}

igual.onclick = function (e) {
  operandoB= resultado.textContent;
  resolver();
}

function limpiar(){
    resultado.textContent = "";
}





function resolver(){
 var res="";

  switch (operacion) {

    case "+":
    res = parseFloat(operandoA) + parseFloat(operandoB);
      resultado.innerHTML = res;

    break;

    case "-":
    res = parseFloat(operandoA) - parseFloat(operandoB);
    resultado.innerHTML = res;

    break;

    case "*":
    res = parseFloat(operandoA) * parseFloat(operandoB);
    resultado.innerHTML = res;
    break;

    case "/":
    res = parseFloat(operandoA) / parseFloat(operandoB);
    resultado.innerHTML = res;
    break;
  }
}

function presionar(tecla) {
    tecla.target.style.transform = "scale(0.9,0.9)";
}

function soltar(tecla) {
    tecla.target.style.transform = "scale(1,1)";
}

function ejecutar() {
    var teclas = document.getElementsByTagName('img');
    for (i = 0; i < teclas.length; i++) {
        teclas[i].addEventListener("mousedown", presionar);
        teclas[i].addEventListener("mouseup", soltar);
    }
}

ejecutar();



 }) ()
