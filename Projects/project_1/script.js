let value = 0;
let valuelbl = document.querySelector("#valuelbl");

function decreaseME(){
    let decrease = document.querySelector("#decrease").onclick;
    value--;
    valuelbl.innerHTML = value;
}
function resetME(){
    let reset = document.querySelector("#reset").onclick;
    value = 0;
    valuelbl.innerHTML= value;
}
function increaseME(){
    let increase = document.querySelector("#increase").onclick;
    value++;
    valuelbl.innerHTML = value;
}

let x;
x = Math.floor(Math.random()*6);

function randomNum(){
    let btnrandom = document.querySelector("#btnRandom").onclick;
    let lblrandomNum = document.querySelector("#lblrandomNum");
    lblrandomNum.innerHTML = Math.floor(Math.random()*100);
}

function sumbit(){
    let subscribe = document.querySelector("#subscribe").Checked;
    let payment = document.querySelector('input[name="payment"]:checked');
    if(!subscribe){
        alert("YOU ARE SUBSCRIBED!");
        alert("AND PAYING WITH " + payment.value)
    }else alert("YOU ARE NOT YET SUBSCRIBE!");
}

let age =18;
let message = age >= 18 ? "YOU ARE A ADULT" : "YOU ARE A MINOR";
alert(message)