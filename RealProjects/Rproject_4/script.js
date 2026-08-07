//---------------fetch data---------//
let pokemonName = document.querySelector("#name");
let pokemonId = document.querySelector("#id");
let pokemonWeight = document.querySelector("#weight");
let pokemonExperience  = document.querySelector("#battleExp");

const inputName = document.querySelector("#pokemonName"); 

inputName.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        document.querySelector("#submit").click();
    }
})


fetchData();
async function fetchData() {
    try{
        
        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
        displayInfo(data);

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.querySelector("#pokemonSprite");
        imgElement.src = pokemonSprite;



    }catch(error){
        console.error(error)
    }
    
    
}

function displayInfo(data){
    const{
        name:name,
        id: id,
        weight: weight,
        base_experience: experience} = data;
        
        if(data != undefined){
            pokemonName.textContent =`Name: ${name.toUpperCase()}`;
            pokemonId.textContent =`Id: ${id}`;
            pokemonWeight.textContent =`Weight: ${weight}`;
            pokemonExperience.textContent =`Battle Experience: ${experience}`;
        }
        


}