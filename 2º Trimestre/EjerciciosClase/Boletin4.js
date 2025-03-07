function cambiarFondo(){
    if(window.innerWidth>500){
        document.body.style.background="green"
    }else{
        document.body.style.background="red"
    }
}
function cambioColor(){
    if(document.getElementById("red")){
        document.body.style.background="red"
        document.getElementById("red").id="green"
    }
    else{
        document.body.style.background="green"
        document.getElementById("green").id="red"        
    }
}
window.onload=cambiarFondo
window.onresize=cambiarFondo

