
//ID de personaje. Comenzamos con el personaje 1 y puede navegar por los 591 peronajes existentes
var id = 1;

async function getdata(){
    //URL de donde vamos a sacar nuestros datos
    var api_url = 'https://rickandmortyapi.com/api/character/' + id;
    //Fetching data from Rick and Morty API
    const response = await fetch(api_url);
    const data = await response.json();

    //Using data in webpage
    var characterImg = data.image;
    var name = data.name;
    var status = data.status;
    var species = data.species;
    var origin = data.origin.name;

    document.getElementById('portrait').setAttribute("src", characterImg);
    document.getElementById('name').textContent = name;
    document.getElementById('origin').textContent = origin;
    document.getElementById('status').textContent = status;
    document.getElementById('species').textContent = species;
}

getdata();

function nextChar(){
    if (id <591){ //Existen 591 characteres en el API hasta la fecha
        id += 1;
        getdata();
    }
}

function previousChar(){
    if (id > 1){
        id -= 1;
        getdata();
    }   
}

