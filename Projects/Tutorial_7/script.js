function hello(callback){
    setTimeout(()=>{
        console.log("HELLO")
        callback();
    },2000)
}
function sayhi(){
    setTimeout(() =>{
        console.log("HI");
    },2000)
}

function welcome(){
    console.log("WELCOME")
}
//setInterval(welcome,1000);

//hello(sayhi);

//-----------------Callbacks---------------//
/*function feedtheChicken(callback){
    setTimeout(() =>{
        console.log("I have fed the chicken")
        callback();
    },2000)
}
function washthedishes(callback){
    setTimeout(() =>{
        console.log("I have wash the dishes")
        callback();
    },3000)
}
function throwthetrash(callback){
    setTimeout(() =>{
        console.log("I have throw the trashes")
        callback();
    },4000)
}

feedtheChicken(() =>{
    washthedishes(() => {
        throwthetrash(() => console.log("CHORES ALL DONE"));
    })
});
*/


//----------------PROMISES GAMES------------//
function dungeon_1(){
    let percentage = Math.floor(Math.random() * 5);
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(percentage >= 3){
                resolve("YOU CAN MOVE TO THE NEXT LEVEL(2)");
            }else{
                reject("YOU CANNOT GO TO THE NEXT LEVEL(2)");
            }
            
        }, 2000);
    });
}      

function dungeon_2(){
    let percentage = Math.floor(Math.random() * 5);
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(percentage >= 3){
                resolve("YOU CAN MOVE TO THE NEXT LEVEL(3)");
            }else{
                reject("YOU CANNOT GO TO THE NEXT LEVEL(3)");
            }
            
        }, 2000);
    });
}
function dungeon_3(){
    let percentage = Math.floor(Math.random() * 5);
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(percentage >= 5){
                resolve("YOU CAN PROCEED TO CHAPTER 2!");
            }else{
                reject("YOU CANNOT GO TO THE NEXT CHAPTER!");
            }
           
        }, 2000);
    });
}

/*dungeon_1().then(value => {console.log(value); return dungeon_2()})
        .then(value => {console.log(value); return dungeon_3()})
        .then(value => {console.log(value); console.log("YOU COMPLETED ALL THE DUNGEON")})
        .catch(error => {console.error(error)});
*/


//---------------------ASYNC FUNCTION AND AWAIT

function feedtheChicken(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("I WALK THE DOG");
        }, 1000);
    })
}
function washthedishes(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I ALREADY WASH THE DISHES")
        }, 2000);
    })
}

function throwthetrash(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("I ALREADY THROW THE TRASH")
        }, 2000);
    })
}

async function chores(){
    const FeedChicken = await feedtheChicken();
    console.log(FeedChicken);

    const washdishes = await washthedishes();
    console.log(washdishes);

    const throwtrash = await throwthetrash();
    console.log(throwtrash);


}
chores();