let inputBox = document.querySelector("#inputBox");
let value;


function appendToDisplay(input){
    inputBox.value +=input;
}

function del(){
    inputBox.value = inputBox.value.slice(0, -1);
}

function AC(){
    inputBox.value = "";
}

function Compute(){
    try{
        inputBox.value = eval(inputBox.value);
    }catch(error){
        setTimeout(() => {
        inputBox.value = "ERROR"
        }, 500);
    }
    
}


