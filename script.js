console.log("Halo, JavaScript!");
const hewan = "Elang";
console.log("Hewan favoritku: " + hewan);
let favorit = prompt("Apa hewan favoritmu?");
alert("Hewan favoritmu: " + favorit + "!");
const judul = document.querySelector("#judul h1");
console.log(judul.textContent);
judul.textContent = "Mengenal Hewan Nusantara";

let jumlahSuka = 0;
const tombolSuka = document.querySelector(".btn-suka");
const teksSuka = document.querySelector(".jumlah-suka");
 
function tambahSuka() {
  jumlahSuka = jumlahSuka + 1;
  teksSuka.textContent = jumlahSuka;
}
 
tombolSuka.addEventListener("click", tambahSuka);


const tombolBaca = document.querySelector(".btn-baca");
const teksLengkap = document.querySelector(".selengkapnya");

function bukaTutup (){
    teksLengkap.classList.toggle("sembunyi");
    if (teksLengkap.classList.contains("sembunyi")){
        tombolBaca.textContent = "Baca selengkapnya";
    } else {
        tombolBaca.textContent = "tutup";

    }
}
tombolBaca.addEventListener("click", bukaTutup);

