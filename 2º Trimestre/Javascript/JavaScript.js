// esto es un comentario
//x=x+2
/*
varias lienas 
de comentarios
*/
/*
var x=5
const y = 4.5 ///es una constante
encontrado = false
texto = "Hola mundo"
alert("Hola mundo") //esto tambien

let x= "Madrid" // let es para q no se sobreescriban
alert(x) //se pueden sobreescribir las variables
*/
/*x = 34.63/12.31
alert(x.toFixed(3)) //to fixed para decimales q quiero q se vean*/
/*texto= "Hola"+" "+"mundo"
alert(texto)*/
// == para comprar === para comparar estrictamente
/*document.write("<h3>Hola mundo</h3>") //para escribir en la web
document.write("Esto es<br/> un <b>párrafo</b><br/>") //se pueden usar etiquetas
encontrado = true*/
/*
if (encontrado)
    document.write("Lo he encontrado!<br/>")
else
    document.write("No lo he encontrado<br/>")
for(i=0,j=20;i<11;i++, j--){
    document.write(i)
    document.write("<br/>")
}
    */

//los Strings
/*
let texto = "Hola Mundo Cruel";//declarar un string
let final = "";//declarar un string vacia
let texto2 = ["H", "o", "l", "a"];
for (i = 0; i < texto.length; i++) {
    if (texto[i] != " ") {
        final += texto[i];//podemos llenar un String nuevo que este vacio
    }
}
texto = final;
document.write(texto + "<br/>");

document.write("<hr>");
for (i = 0; i < texto.length; ++i) {
    document.write(texto[i] + "<br/>");//recorrer un string y mostrarlo
}
texto[5] = "x";//no se puede modificar un string
document.write("<hr>");
document.write(texto[5]);//mostramos el string pero solo en la posición 5
document.write("<hr>");
document.write(texto.charAt(1));//mostramos el string pero solo en la posición 1
document.write(texto.shift());//no se puede hacer un shift a un string, porque los Strings son inmutables
document.write(texto);*/
/*document.write(texto.toLocaleUpperCase() + "<br/>");//pasar a mayúsculas
document.write(texto.toLocaleLowerCase() + "<br/>");//pasar a minúsculas*/
/*
precio = prompt("dame el importe sin IVA")

pvp = parseFloat(precio) * 1.21
pvp= Number(precio) * 1.21 //otra forma
pvpmalo=parseInt(precio) * 1.21

document.write("El PVP es de: " + pvp.toString())
document.write("<br/>El PVP redondeado es de : " + pvp.toFixed(1))
document.write(pvp)

document.write("<br/> el PVP malo Calculado es:")
document.write(pvpmalo)*/

/*numero = "3,4"
n=Number(numero)
if(isNaN(n)==true) //NaN es un not a number, es decir, no es un numero
    document.write("No es un número")
else
    document.write(n)*/

/*function mifuncion(titular){
 /*   texto = prompt("que texto quieres poner")
    titular.innerHTML = "Javascript en DAW1"*/

  /*  parrafo=document.getElementById("parrafo2")
    console.log("Debuggeando...") /*para mostrar en la consola mensajes*/
  /*  x=5
    y=x*4.6
    temporal=titular.innerHTML
    debugger
    titular.innerHTML=parrafo.innerHTML/*innerHTML es para modificar el contenido de las etiquetas*/
  /*  parrafo.innerHTML=temporal/*al hacer click en el titulo cambia por el parrafo*/

 /*   if (titular.className=='rojo') /*className es nombre de clase*/
/*        titular.className='azul'
    else
        titular.className='rojo'
 

}*/