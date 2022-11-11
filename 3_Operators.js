// Operator dalam javascript seperti pada matematika pada umumnya
// ---------------------------------------------------------------------------------------------------------------
// untuk basic operatornya seperti penjumlahan (+), pengurangan (-) perkalian (*) dan pembagian (/) 
// langsung pada contohnya:

// penjumlahan (+)
let a = 5;
let b = 10;
console.log(a + b); // hasilnya 15


// pengurangan (-)
let c = 100;
let d = 50;
console.log(c - d); // hasilnya 50


// perkalian (*)
// kita gunakan variabel a dan b di atas sebelumnya:
console.log(a * b); // hasilnya 50


// pembagian (/)
// kita gunakan variabel c dan d di atas sebelumnya:
console.log(c / d); //hasilnya 2


// -----------------------------------------------------------------------------------------------------------------

// selain basic operator matematika
// ada juga assignment operator
// assignment operator seperti +=, -=, *=, ++, --
// contoh:
let x = 10 + 5; // nilai x = 15
x += 10;
console.log(x); // hasilnya 25

let y = 20
y -= 5;
console.log(y); // hasilnya 15

let z = 1;
z++;
console.log(z); // hasilnya 2

let n = 2;
n--;
console.log(n); // hasilnya 1


// ------------------------------------------------------------------------------------------------------------------

// comparison operators
// ini adalah operator yang berfungsi untuk membandingkan nilai suatu variabel atau objek
// operatornya yaitu >, <, >=, <=
// contoh:
let angka1 = 100;
let angka2 = 1000;
console.log(angka1 > angka2); // hasilnya false
console.log(angka1 < angka2); // hasilnya true

let angka3 = 21
let angka4 = 21;
console.log(angka3 <= angka4); // hasilnya true
console.log(angka3 >= angka4); // hasilnya true

