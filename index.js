import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

const tablazatElem = document.getElementById("feladat_1");
tablazatElem.innerHTML = letrehozTablazat(FUTOK);
// 1. feladat
function letrehozTablazat(FUTOK) {
  let txt = "<table>";
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `<tr id="sor"><td>${FUTOK[index].nev}</td>
    <td>${FUTOK[index].nemzetiseg}</td>
    <td>${FUTOK[index].versenySzam}</td></tr>`;
  }
  txt += "</table";
  return txt;
}

const osszesitoElem = document.getElementById("feladat_2");
osszesitoElem.innerHTML += `<p>Félmaraton: ${osszesit(FUTOK).dbFel} db<br>Maraton: ${osszesit(FUTOK).dbMa} db<br>10 km: ${osszesit(FUTOK).db10} db`;
// 2. feladat
function osszesit(FUTOK) {
    var dbFel=0;
    var dbMa=0;
    var db10=0;
    for (let index = 0; index < FUTOK.length; index++) {
        if(FUTOK[index].versenySzam == "félmaraton"){
            dbFel += 1;
        }else if(FUTOK[index].versenySzam == "maraton"){
            dbMa += 1;
        }else if(FUTOK[index].versenySzam == "10 km"){
            db10 += 1;
        }
    }return{dbFel:dbFel, dbMa:dbMa, db10:db10};
}

// 3. feladat
const befutottElem = document.querySelectorAll("#sor");

function befutott(befutottElem) {
    for (let index = 0; index < befutottElem.length; index++) {
        befutottElem[index].addEventListener("click", kattintas) 
    }
    function kattintas(event){
        console.log(event.target.innerHTML)
    }
}
befutott(befutottElem)


// 4. feladat
function torolEsemeny() {}

// 5. feladat
function ellenoriz() {}
