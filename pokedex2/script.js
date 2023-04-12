const pokemonName = document.querySelector('.pokemon-name');
const pokemonId = document.querySelector('.pokemon-id');
const pokemonImg = document.querySelector('.pokemon-img');

const form = document.querySelector('.form');
const input = document.querySelector('.pokemon_search');
const btnPrev = document.querySelector('.button-prev');
const btnNext = document.querySelector('.button-next');

let pokemonSearch = 1;

                    //async define que a função é assincrona
const fetchPokemon = async (pokemon) => {
                        //Await faz o programa esperar a linha ser lida para depois passar para as demais
    const APIResponce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);


    if (APIResponce.status == 200) {
                                     //metodo json para extrar os dados em json da API
        const data = await APIResponce.json()
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'loading';
    pokemonId.innerHTML = '';
    pokemonImg.src = '';
    const data = await fetchPokemon(pokemon);

    if(data){
        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`;
        input.value = "";
        pokemonSearch = data.id;
    }else{
        pokemonName.innerHTML = 'Not found';
        pokemonId.innerHTML = ':(';
    }
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

btnNext.addEventListener('click', () => {
    pokemonSearch++;
    renderPokemon(pokemonSearch);
})

btnPrev.addEventListener('click', () => {
    if(pokemonSearch > 1){
        pokemonSearch--;
        renderPokemon(pokemonSearch);
    }
})

renderPokemon(pokemonSearch);


