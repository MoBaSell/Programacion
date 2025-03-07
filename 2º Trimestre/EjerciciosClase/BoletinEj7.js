numeroAle=Math.floor(Math.random()*10)+1
document.getElementById("numeros").innerHTML=numeroAle
function operar(){
    resultado=(numeroAle*numeroAle)+1
    document.getElementById("numeros").innerHTML=resultado
}
function generarNum(){
    numeroAle=Math.floor(Math.random()*10)+1
    document.getElementById("numeros").innerHTML=numeroAle
}