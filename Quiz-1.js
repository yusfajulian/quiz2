import chalk from "chalk";
const array = ['yusfa', 'julian', 'uye'];
// const cek = array.map(function(a) {
//     if

// });

const map = array.map(function(b) {
    return b + 'w';
});
console.log(map);

let nama = [...map, '20']
console.log(nama);

let namaDepan;
let namaTengah;
let namaBelakang;
let umur;

[namaDepan, namaTengah, namaBelakang, umur] = nama;

console.log(namaDepan, namaTengah, namaBelakang, umur);

let mahasiswa = {
    nama: namaDepan +
        namaTengah +
        namaBelakang,
    umur: umur
}

console.log(mahasiswa.nama)
console.log(mahasiswa.umur)

let namaLengkap = mahasiswa.nama;
console.log(namaLengkap);

function cetak(cb) {
    console.log(namaLengkap);
    cb();
}
cetak(function() {
    console.log(umur);
})