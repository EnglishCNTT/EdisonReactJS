import axios from "axios";

let pokemons = []

async function getData() {
    try{
        axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
            pokemons = res.data; 
            console.log(pokemons.results); 
        })
    }
    catch(err){
        console.log(err);
    }
}

getData()