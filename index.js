import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];
let befutottVersenyzokHossz=0;
const tablazatElem = document.getElementById("feladat_1");
tablazatElem.innerHTML = letrehozTablazat(FUTOK);
// 1. feladat
function letrehozTablazat(FUTOK) {
  let txt = "<table>";
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `<tr class="sor"><td>${FUTOK[index].nev}</td>
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
    let dbFel=0;
    let dbMa=0;
    let db10=0;
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
const befutottakElem = document.querySelectorAll("#feladat_1 tr");
for (let index = 0; index < befutottakElem.length; index++) {
    befutottakElem[index].addEventListener("click", function(event){
        event.target.closest("tr").classList.add("befutott")
        
        if(befutottVersenyzok.indexOf(FUTOK[index].nev) == -1){
            befutottVersenyzok.push(FUTOK[index].nev, FUTOK[index].versenyIdo, FUTOK[index].nemzetiseg)
        }console.log(befutottVersenyzok)
        ellenoriz()
    }) 
    
    befutottakElem[index].addEventListener("click", letrehozTablazatBefutott)
}



let befutottakTablazatElem = document.querySelector("#feladat_3");
function letrehozTablazatBefutott(lista) {
    lista=befutottVersenyzok
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        if(index==0 | index%3==0){
            txt+="<tr>"
        }
        txt += `<td>${lista[index]}</td>`;
        if((index+1)%3==0){
            txt+="</tr>"
        }
    }
    console.log(txt)
    befutottakTablazatElem.innerHTML=txt
    return txt;
  }



// 4. feladat
let gombElem=document.querySelector("#options button")
gombElem.addEventListener("click", torolEsemeny)
function torolEsemeny() {
    for (let index = 0; index < befutottakElem.length; index++) {
        befutottakElem[index].classList.remove("befutott")
        }
    befutottVersenyzok.splice(0)
    console.log(befutottVersenyzok)
    befutottakTablazatElem.innerHTML=""
}



// 5. feladat

function ellenoriz() {
    if((befutottVersenyzok.length/3)==FUTOK.length){
        alert("Verseny véget ért!")
    }
}

