//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log ("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log ("El area del cuadrado es: " + areaCuadrada +"cm");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log ("Los lados del Triangulo miden " 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2 
+ "cm, " 
+ baseTriangulo 
+ "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + "cm");
console.groupEnd();


//Codigo del circulo
console.group("circulos");

// radio
const radioCirculo = 4;
console.log ("El radio del circulo es: " + radioCirculo + "cm");

// diametro
const diametroCirculo = radioCirculo * 2;
console.log ("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;

console.log ("PI es: " + PI + "cm");
// Circunferencia
const perimetroCirculo = PI * diametroCirculo;

console.log ("La circunferencia del circulo es: " + perimetroCirculo + "cm");

// area
const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log ("El area del circulo es: " + areaCirculo + "cm");

console.groupEnd();