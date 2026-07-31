
function generatePass(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    let lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    let uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberchars = "0123456789";
    let symbolchars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercasechars : "";
    allowedChars += includeUppercase ? uppercasechars : "";
    allowedChars += includeNumbers ? numberchars : "";
    allowedChars += includeSymbols ? symbolchars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
    } 

    for(let i = 0; i <length; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

let passwordlength = 10;
let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = true;
let includeSymbols = true;

let password = generatePass(passwordlength, 
                            includeLowercase, 
                            includeUppercase, 
                            includeNumbers, 
                            includeSymbols
                        );
console.log(password)