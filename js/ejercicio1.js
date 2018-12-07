//**EJERCICIO1 INTERES EN CINCO AÑOS */
/*var consignment=parseInt(prompt("Por digite la cifra a consignar"));
while (isNaN(consignment)) {
    consignment=parseInt(prompt("Por digite la cifra a consignar"));
}
var interesmonth=(consignment*2)/100;
var year5=interesmonth*60;
var total=consignment+year5;
console.log("Valor consignado: ",consignment,);
console.log("Valor mas interes",total);
document.write("<h1>Banco Seguro</h1><br><br>");
document.write(" <p>En Banco Seguro nos aseguramos que tu dinero este seguro y a la mano para cuando lo nesecites</p><br><br><br>");
document.write("<p>Usted ha realizado una consignacion por el valor de:   "+consignment+"<br></p>");
document.write("<p>Dentro de Cinco (5) años ud recibira una bonificacion de:    "+total+"</p>");*/




//**EJERCICIO 2 FRUTERIA Y DESCUENTOS */
/*var quantity=parseInt(prompt("¿Cuantos kg de manzanas desea comprar?"));
while(isNaN(quantity)){
    quantity=parseInt(prompt("Ingrese un valor en numeros"));
}
var price=quantity*4200;
document.write("<h1>Fruteria Olimpo</h1><br><br>");
if(quantity<=2){
    console.log("Descuento de 0%");
    document.write("<p>Por la compra de "+quantity+" de manzanas, recibiras un descuento de 0%</p><p>Valor de la compra: "+price+"</p><p>Descuento de: 0%</p><p>Valor Total a pagar: "+price+"</p>");
}
else if(quantity>2 && quantity<=5){
    var discountmen=(price*10)/100;
    var total=price-discountmen;
    console.log("Descuento de 10%");
    document.write("<p>Por la compra de "+quantity+" kilos de manzanas, recibiras un descuento de 10%</p><p>Valor de la compra: "+price+"</p><p>Descuento de: "+discountmen+"</p><p>Valor Total a pagar: "+total+"</p>");
}
else if(quantity>5 && quantity<=10){
    discountmen=(price*15)/100;
    total=price-discountmen;
    console.log("Descuento de 15%");
    document.write("<p>Por la compra de "+quantity+" kilos de manzanas, recibiras un descuento de 15%</p><p>Valor de la compra: "+price+"</p><p>Descuento de: "+discountmen+"</p><p>Valor Total a pagar: "+total+"</p>");
}
else if(quantity>10){
    discountmen=(price*15)/100;
    total=price-discountmen;
    console.log("Descuento de 20%");
    document.write("<p>Por la compra de "+quantity+" kilos de manzanas, recibiras un descuento de 20%</p><p>Valor de la compra: "+price+"</p><p>Descuento de: "+discountmen+"</p><p>Valor Total a pagar: "+total+"</p>");
}*/




//**EJERCICIO 3 ALGORITMO */
/*var y=0;
var sum=0;
var sum2=0;
var sum3=0;
document.write("<h1>Ejercicio 3</h1><br><br>");
    for (var x = 1; x <=10; x++) {
        y=x*x-(2*x);
        sum=sum+y;
    if(y%3==0){
        sum2=sum2+y;
        console.log(y+" Es multiplo de tres");
        document.write("<p>"+y+" Es multiplo de tres</p>");
       
    }
    if(y%5==0 && y>=15 && y<=35){
        document.write("<p>"+y+" Termina en cinco</p>");
        sum3=sum3+y;
    }
    }
    document.write("<br><p>La suma de todos los multiplos de tres es: "+sum2+"</p>");
    console.log("<br>La suma de todos los valores de y es:",sum);
    document.write("<br><p>La suma de todos los valores de y es: "+sum+"</p>");
    document.write("<br><p>La suma de los valores terminados en cinco es: "+sum3+"</p>");*/




//**EJERCICIO 4 SUMA DE DIGITOS */
/*var sum=0;
var fact=0;
var fact2=0;
var fact3=0;
var fact4=0;
var num=prompt(" Ingrese un número ");
while (isNaN(num)) {
    num=prompt("Ingrese un numero");
}
fact= num/10;
fact2= num%10;
sum= sum+fact2;
fact= fact-(fact2*0.1);
while (fact>0){
    fact3=fact/10;
    fact4 = fact%10;
    sum = sum+fact4;
    fact=fact3-(fact4*0.1);
    }
document.write("<h1>Suma de digitos</h1>");
document.write("<p>El numero ingresado es: "+num+"</p><p>Y la suma de sus digitos es: "+sum+"</p>");*/




//**EJERCICIO 5 INCREMENTO SALARIAL */
/*var name=prompt("Nombre del vendedor");
var documen=prompt("Cedula");
var salary=prompt("Ingrese el valor de su sueldo mensual");
var days=prompt("Dias Laborados");
var value=prompt("Valor de sus ventas")
var lending=prompt("Prestamos dilingenciados");
while (isNaN(documen) || isNaN(salary) || isNaN(days) || isNaN(value) || isNaN(lending)) {
    documen=prompt("Cedula");
    salary=prompt("Ingrese el valor de su sueldo mensual");
    days=prompt("Dias Laborados");
    value=prompt("Valor de sus ventas")
    lending=prompt("Prestamos dilingenciados");
}
if (days>0 && days<=31) {
    if(salary<=1562484){
        var work=(salary*days)/30;
        var commission=value*0.2;
        var help=(88.211*days)/30;
        var debt=lending;
        var result=(work+commission+help)-lending;
    }else if(salary>1562484){
        var commission=value*0.2;
        var work=(salary*days)/30;
        var debt=lending;
        var result=(work+commission)-lending;
}
}
document.write("<h1>Almacen el Pigar</h1><br><br>");
document.write("<p>Señor(a): "+name+"</p><p> Con cedula No. "+documen+"</p><p>Salario basico: "+salary+"</p><p>Su auxilio de trasnporte es de: "+help+"</p><p>Comision de ventas: "+commission+"</p><p>Prestamos: "+debt+"</p><br><p>Total salario: "+result+"</p>");*/




//**EJERCICIO 6 */
/*var increase=1;
document.write("<h1>Incremento en Serie</h1><br><br><br>");
document.write("<tt>"+increase+"</tt>");
for (index = 2; index < 21; index++) {
    increase=increase+index
    document.write("<tt>, "+increase+"</tt>");
}*/




//**EJERCICIO 7 FIESTA */
/*var sex=prompt("Por favor ingrese su genero");
var age=parseInt(prompt("Por favor ingrese su edad"));
debugger;
while(sex!=isNaN && isNaN(age)){
    alert("Por favor ingrese valores validos");
    sex=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}
while (age<18){
    alert("Lo sentimos pero no puedes ingresar a la fiesta")
    sex=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}
var countmen=0;
var countwomen=0;
var agewomen=0;
var agemen=0;
while (age!=0) {
    if(sex=="hombre"){
        countmen++;
        agemen=agemen+age;
    }
    else if(sex=="mujer"){
        countwomen++;
        agewomen=agewomen+age; 
    }
    sex=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}

var sum=countmen+countwomen;
var avgwomen=agewomen/countwomen;
var avgmen=agemen/countmen;
document.write("<p>A la fiesta ingresaron "+sum+"</p><p>Ingresaron "+countmen+" hombres</p><p>Ingresaron "+countwomen+" mujeres");
document.write("<p>El promedio de edad por hombres es de: "+avgmen+"</p><p>El promedio de edad por mujeres es de: "+avgwomen+"</p>");*/




//**EJERCICIO 8 LLAMADA */
/*var call=prompt("Ingrese la duracion de su llamada en minutos");
var result=0;
var additional=0;
var add=0;
while (isNaN(call) || call<=0) {
    call=prompt("Ingrese un valor valido")
}
if (call<=3) {
   result=200*call 
}
else if (call>3) {
    additional=call-3;
    add=additional*30;
    result=(3*200)+add;
}
document.write("<h1>Claro</h1>");
document.write("<p>La duracion de su llamada fue de: "+call+" minutos</p><p>Por lo tanto tiene un costo de: "+result+"</p>");*/




//**EJERCICIO 9 ESTUDIENTES */
/*var count=0;
var count1=0;
var count2=0;
var count3=0;
var value=prompt("Ingrese su calificacion");
while (isNaN(value)) {
    var value=prompt("Ingrese un valor valido"); 
}
for (var index = 1; index < 11 ; index++) {
        if(value<50){
            count++;
        }
        else if(value>=50 && value<70){
            count1++;
        }
        else if(value>=70 && value<80){
            count2++;
        }
        else if(value>=80 && value<=100){
            count3++;
        }
        value=prompt("Ingrese su calificacion");
    } 
document.write("<p>El numero de estudiantes con notas menores a 50 fue: "+count+"</p>");
document.write("<p>El numero de estudiantes con notas entre 50 y 70 fue: "+count1+"</p>");
document.write("<p>El numero de estudiantes con notas entre 70 y 80 fue: "+count2+"</p>");
document.write("<p>El numero de estudiantes con notas entre 80 y 100 fue: "+count3+"</p>");*/