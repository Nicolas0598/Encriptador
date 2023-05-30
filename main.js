const mensajeRecibido=document.querySelector("#mensaje");
const resultadoMostrado=document.querySelector("#resultado");

const botonE=document.querySelector("#encriptar");
const botonD=document.querySelector("#desencriptar");
const botonC=document.querySelector("#copiar")

function encriptar(){
    var mensaje=mensajeRecibido.value;
    var mensajeEncriptado=mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("a","ai").replaceAll("u","ufat");
    resultadoMostrado.value=mensajeEncriptado;
}
function desencriptar(){
    var mensaje=mensajeRecibido.value;
    var mensajeDesencriptado=mensaje.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ai","a").replaceAll("ufat","u");
    resultadoMostrado.value=mensajeDesencriptado
}
function limpiar(){
    document.getElementById("resultado").style.display="inline";
}
function limpiar2(){
    document.getElementById("copiar").style.display="inline";
}
function encriptarFinal(){
    encriptar();
    limpiar();
    limpiar2();
}
function desencriptarFinal(){
    desencriptar();
    limpiar();
    limpiar2();
}
function copiar(){
    var mensajeEncriptado=resultadoMostrado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}
botonE.onclick=encriptarFinal;
botonD.onclick=desencriptarFinal;
botonC.onclick=copiar;
