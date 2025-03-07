//ejer 1
/*nums =new Array(100)
for(i=0;i<nums.length;i++){
    numero=Math.floor(Math.random()*1000)+1
    nums[i]=numero
}
for(i=0;i<nums.length;i++){
   if(nums[i]>=500){
    document.write(nums[i]+" ")
   }
}*/

//ejer 2
/*document.write("<hr>")
Texto=prompt("Escribe un texto: ")
cont=0
for(i=0;i<Texto.length;i++){
    if(Texto[i]!=" "){
        document.write(Texto[i])
    }
    if(Texto[i]==" "){
        cont++;
    }
}
document.write("<br> Había "+cont+" espacios eliminados")*/

//ejer 3
/*document.write("<hr>")
Texto=prompt("Escribe un texto: ")
for(i=Texto.length-1;i>=0;i--){
    document.write(Texto[i])
}*/

//ejer 4
/*document.write("<hr>")
Texto=prompt("Escribe un texto: ")
for(i=0;i<Texto.length;i++){
    if(i%2==0){
        document.write(Texto[i])
    }
}
document.write("  ")
for(i=0;i<Texto.length;i++){
    if(i%2!=0){
        document.write(Texto[i])
    }
}*/

//ejer 5
/*
texto=prompt("Introduce un texto: ")
nuevotexto=""
for(i=0;i<texto.length;i++){
    if(texto[i]=="a"){
        nuevotexto+="4"
    }
    if(texto[i]=="e"){
       nuevotexto+="3"
    }
    if(texto[i]=="i"){
        nuevotexto+="1"
    }
    if(texto[i]=="o"){
        nuevotexto+="0"
    }else{
        nuevotexto+=texto[i]
    }
}
document.write(nuevotexto)*/

//ejer 6
/*
nums =new Array(100)
numMayor=0
numMenor=1000
for(i=0;i<nums.length;i++){
    numero=Math.floor(Math.random()*1000)+1
    nums[i]=numero
}
for(i=0;i<nums.length;i++){
   if(nums[i]>numMayor)
    numMayor=nums[i]
   
   if(nums[i]<numMenor)
    numMenor=nums[i]
}
document.write("Numero mayor "+numMayor+" Numero menor "+numMenor)
*/

//ejer 7 y ejer 8
/*
function funcion7(num1,num2,num3,num4) {
  numMayor=num1

  if(num2>numMayor)
    numMayor=num2
  if(num3>numMayor)
    numMayor=num3
  if(num4>numMayor)
    numMayor=num4

  numMenor=num1
  if(num2<numMenor)
    numMenor=num2
  if(num3<numMenor)
    numMenor=num3
  if(num4<numMenor)
    numMenor=num4

document.write("El numero mayor es "+numMayor)
document.write("El numero menor es "+numMenor)
}
*/

//ejer 9
/*
function funcion9(cantidad,tiempo){
    distribucion=cantidad/tiempo
    document.write("Tienes que pagar "+distribucion+" euros al mes")
}
*/

//ejer 10
function funcion10(texto){
    vocales="aeiou"
    for(i=0;i<texto.length;i++){
       if(vocales.indexOf(texto[i]===-1)){
        resultado+=texto[i];
       }
    }
    document.write(resultado);
}