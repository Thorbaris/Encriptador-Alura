let textoSinEncriptar = document.getElementById("txtSinEncriptar");
let textoEncriptado = document.getElementById("txtEncriptado");


let letras = ["e", "i", "a", "o", "u"];
let letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];

function fEncriptar(){
    let texto = textoSinEncriptar.value;
    for(let i = 0; i < letras.length; i++){
        let expresionRegular = new RegExp(letras[i], "g");
        texto = texto.replace(expresionRegular, letrasEncriptadas[i]);
    }
    textoEncriptado.value = texto;
}

function fDesencriptar(){
    let texto = textoEncriptado.value;
    for(let i = 0; i < letras.length; i++){
        let expresionRegular = new RegExp(letrasEncriptadas[i], "g");
        texto = texto.replace(expresionRegular, letras[i]);
    }
    textoSinEncriptar.value = texto;
}

function fCopiarEncriptado(){
    copyToClipboard(textoEncriptado.value)
}

function fCopiarDesencriptado(){
    copyToClipboard(textoSinEncriptar.value)
}

function copyToClipboard(text) {
    console.log(text);
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }
