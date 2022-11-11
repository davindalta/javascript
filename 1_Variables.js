// Di dalam bahasa pemrograman variabel berfungsi seperti storage
// penyimpanan untuk menyimpan string, number, boolean dll
// contohnya seperti berikut:

let nama = "Balmond"; // "nama" adalah variabel
console.log(nama); // code untuk menampilkan variabel nama


// di javascript untuk mendeklarasikan variabel, 
// kita dapat menggunakan var, let atau const

var umur = 23;
let tahun = 2022;
const kota = "Surabaya";

// dalam javascript kita dapat menulis variabel dengan satu statement saja
// contohnya seperti berikut:

var a = 1, b = 2, c = 3;
let nama1 = "Kurniawan1", nama2 = "Kurniawan2", nama3 = "Kurniawan3";
const tempat1 = "Jakarta", tempat2 = "Bali", tempat3 = "Bogor";


// jika kita deklarasi variabel tanpa ada isinya maka akan terjadi error
let x; // x adalah variabelnya 
console.log(x); // akan menghasilkan undefiend


// kita dapat mengubah isi variabel yang telah kita deklarasi sebelumnya
// contohnya :
let name = "Tigreal";
console.log(name);

name = "Akai"; // isi variabel name dirubah 
console.log(name); 


// aturan dalam penulisan variabel:
// 1. variabel ditulis menggunakan huruf, underscore (_), atau dollar sign($)
let z = 11;
let _z = 17;
let $z = 20;

// 2. variabel tidak boleh diawali dengan nomor contoh : "1nama", "11kota" dsb.
let 1nama = "Fulan" // variabel invalid

// 3. javascript adalah bahasa pemrograman yang sensitif huruf besar dan huruf kecil,
//    variabel a dan A adalah variabel yang berbeda meskipun hurufnya sama.
let y = 100;
let Y = 200;

// variabel tidak boleh ditulis menggunakan keywords javascript
let new = 1000; // akan menghasilkan error