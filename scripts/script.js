var resultado = window.document.getElementById('res')

function somar(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)
var res = n1 + n2
    resultado.innerHTML = `${res}`
}

function multiplicar(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)
var res = n1 * n2
    resultado.innerHTML = `${res}`
}


function dividir(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)
var res = n1 / n2
    resultado.innerHTML = `${res}`
}

function subtrair(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)
var res = n1 - n2
resultado.innerHTML = `${res}`
}

function resto_divisao(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)
var res = n1 % n2
resultado.innerHTML = `${res}`
}

function potencia(){
var numero1 = window.document.getElementById('n1')
var numero2 = window.document.getElementById('n2')
var n1 = Number(numero1.value)
var n2 = Number(numero2.value)
var res = n1 ** n2
resultado.innerHTML = `${res}`
}




