let inputWeight = document.querySelector("#inputWeight");
let kgtograms = document.querySelector("#KgtoGrams");
let Gramstokg = document.querySelector("#GramstoKilos");
let KgtoTons = document.querySelector("#KgtoTons");
let tonsToKilos = document.querySelector("#tonsToKilos");
let lblconvert  = document.querySelector("#lblconvert");
let weight = 0;

function convertTheWeight(){

    let currentWeight = Number(inputWeight.value);

    if(kgtograms.checked){
        weight = currentWeight * 1000;
        lblconvert.innerHTML = weight + "grams";
        lblconvert.style.color = "green";
    }else if(Gramstokg.checked){
        weight = currentWeight / 1000;
        lblconvert.innerHTML = weight + "kg";
        lblconvert.style.color = "yellow";
    }else if(KgtoTons.checked){
        weight = currentWeight / 1000;
        lblconvert.innerHTML = weight + "tons";
        lblconvert.style.color = "blue";
    }else if(tonsToKilos.checked){
        weight = currentWeight * 1000;
        lblconvert.innerHTML = weight + "kg";
        lblconvert.style.color = "red";
    }else lblconvert.innerHTML = "SELECT CONVESION TYPES";


}




