//ejer 1
for(i=0;i<=10;i++){
    document.write(i+" ")
}

//ejer 2
document.write("<hr>")
for(i=0;i<=50;i++){
    if(i%2==0){
        document.write(i+" ")
    }
}

//ejer 3
/*document.write("<hr>")
numero=prompt("Dame un numero")

for(i=1;i<=5;i++){
    resultado=numero*i
    document.write(resultado+" ")
}*/

//ejer 4
/*document.write("<hr>")
for(i=0;i<10000;i++){
    if(i%7==0){
        document.write(i+" ")
    }
}*/
//ejer 5
/*document.write("<hr>")
numero=prompt("Dame un numero: ")
if(numero%2==0){
    document.write("Es par")
}else{
    document.write("Es impar")
}*/

//ejer 6
/*document.write("<hr>")
numero=prompt("Dame un numero: ")
if(numero%3==0){
    document.write("Es divisible entre 3")
}else{
    document.write("No es divisible entre 3")
}*/

//ejer 7
/*document.write("<hr>")
numero=prompt("Dame un numero: ")
numero=numero*0.21
document.write(numero)*/

//ejer 8
/*document.write("<hr>")
numero=prompt("Dame un numero: ")
cont=0
for(i=1;i<=numero;i++){
    if(numero%i==0){
        cont++;
    }
}
if(cont==2){
    document.write("Es primo ")
}else{
    document.write("No es primo")
}*/

//ejer 9
/*document.write("<hr>")
numero=Math.random()*50
document.write(numero)*/

//ejer 10
/*document.write("<hr>")
for(i=0;i<2;i++){
    numero=(Math.random()*6)+1
    document.write(numero.toFixed(0)+" ")

}*/

//ejer 11
/*document.write("<hr>")
numero1=parseInt(prompt("Dame el primer numero: "))
numero2=parseInt(prompt("Dame el segundo numero: "))
numero=Math.floor(Math.random()*(numero2-numero1+1))+numero1
document.write(numero)*/

//ejer 12
/*document.write("<hr>")
numero1=parseInt(prompt("Dame el primer numero: "))
numero2=parseInt(prompt("Dame el segundo numero: "))
if(numero1>numero2){
    numero=Math.floor(Math.random()*(numero1-numero2+1))+numero2
    document.write(numero)
}else{
    numero=Math.floor(Math.random()*(numero2-numero1+1))+numero1
    document.write(numero)
}*/

//ejer 13
/*document.write("<hr>")
for(i=0;i<6;i++){
    numero=Math.floor(Math.random()*48)+1
    document.write(numero+" ")
}*/

//ejer 14
/*document.write("<hr>")
for(i=0;i<15;i++){
    numero=Math.floor(Math.random()*3)+1
    if(numero==3){
        document.write("X ")
    }else{
        document.write(numero+" ")
    }
}*/

//ejer 15
document.write("<hr>")
numero=0
while(numero!=666){
    numero=Math.floor(Math.random()*1000)+1
    document.write(numero+" ")
}