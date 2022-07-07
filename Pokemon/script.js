let button = document.querySelector(".gallery-btn")

button.addEventListener('click',redirect);

function redirect(){
    let text = ("Are you sure you want to view the gallery?")
    if(confirm(text)==true){
        location.href= "https://pokemondb.net/pokedex/national";
    }
}