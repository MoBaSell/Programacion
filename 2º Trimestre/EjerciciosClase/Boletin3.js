function alternarEstado(){
    parrafo=document.getElementById("parrafo")
    if(parrafo.innerHTML==="Abierto")
        parrafo.innerHTML="Cerrado"
    else
        parrafo.innerHTML="Abierto"
}
function aleatorio(){
    num=Math.floor(Math.random()*100)+1
    document.getElementById("numero").innerHTML="Numero aleatorio: "+num
}
function intercambio(){
    p1=document.getElementById("p1").innerHTML
    p2=document.getElementById("p2").innerHTML
    p3=document.getElementById("p3").innerHTML
    p4=document.getElementById("p4").innerHTML

    textos=[p1,p2,p3,p4]

    for(i=0;i<textos.length;i++){
        j=Math.floor(Math.random()*(i+1))
        temp=textos[i]
        textos[i]=textos[j]
        textos[j]=temp
    }
    document.getElementById("p1").innerHTML = textos[0];
    document.getElementById("p2").innerHTML = textos[1];
    document.getElementById("p3").innerHTML = textos[2];
    document.getElementById("p4").innerHTML = textos[3];
}
function generarCaracterAleatorio() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?";
    return caracteres.charAt(Math.floor(Math.random() * caracteres.length));
}
function caracteres() {
    car = generarCaracterAleatorio();

    parrafo=document.getElementById("parrafo2")
    parrafo.innerHTML += car
}
function generarNumeroAleatorio(){
    return Math.floor(Math.random()*10)+1
}
let numeroTotal=generarNumeroAleatorio()
document.getElementById("titulo").innerHTML=numeroTotal

function generarYSumar(){
    nuevoNumero=generarNumeroAleatorio()
    numeroTotal+=nuevoNumero
    if(numeroTotal>500)
        numeroTotal=0
    document.getElementById("titulo").innerHTML=numeroTotal
}