const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`


// Gera as li dos pokemons para o html
const generateHTML = (pokemons) => {
    return pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name);
        const stats = pokemon.stats.map(statsInfo => statsInfo.base_stat);

        accumulator +=
            `
        <li class="card ${types[0]}" onclick="modal(${pokemon.id});">
            <h2 class="card-title">${pokemon.name}</h2>
            <div class="card-pokemon-box ${types[0]}"></div>
            <div class="card-box-id">Nº<p>${pokemon.id}</p></div>
            <img class="card-image" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"  >
            <p class="card-subtitle"> hp : ${stats[0]}<br> attaque: ${stats[1]}<br> defesa: ${stats[2]}</p>
            <p>Altura: ${pokemon.height} Peso: ${pokemon.weight}</p>
        </li>
        `
        return accumulator;
    }, '')
}

const generatePokemonPromises = () => Array(151).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json())
)

//insere as li ao html
const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = pokemons;
}

const pokemonsPromises = generatePokemonPromises();

Promise.all(pokemonsPromises)
    .then(generateHTML)
    .then(insertPokemonsIntoPage)
// --------------------------Search----------------------------------------

search.addEventListener("input", function () {
    const navMenu = document.querySelector('[data-type="nav-menu"]'); 
    const lisCard = Array.from(navMenu.querySelectorAll(".card")); 

    const str = this.value;
    if (str) {
        filterData(str,lisCard);
    } else {
        showAllItens(lisCard);
    }
})

    function filterData(str,lisCard) {
        console.log(lisCard)
         showAllItens(lisCard);

    lisCard.forEach(liCard => {
        const cardName = liCard.querySelector("h2");
        const cardId = liCard.querySelector(".card-box-id p");

        if (cardName.textContent.toLocaleLowerCase().includes(str.toLocaleLowerCase()) || cardId.textContent == str){
             liCard.classList.remove("hide");
        }else{
            liCard.classList.add("hide");
        }
    })
}

function showAllItens(lisCard) {
    lisCard.forEach(liCard => liCard.classList.remove("hide"));
    console.log(lisCard)
}

//

// -------------------------MODAL---------------------------------

const modal = id =>{

    const showModal = document.getElementById("modal");
    showModal.classList.remove("hidden");
    const container = document.querySelector(".container");
    container.classList.add("blur");

    const pokemonName = document.querySelector('.pokemon-name');
    const pokemonId = document.querySelector('.pokemon-id');
    const pokemonImg = document.querySelector('.pokemon-img');

    const form = document.querySelector('.form');
    const input = document.querySelector('.pokemon_search');
    const btnPrev = document.querySelector('.button-prev');
    const btnNext = document.querySelector('.button-next');

    let pokemonSearch = id;

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
}

const btnfechar = document.querySelector(".btn-fechar");

btnfechar.addEventListener('click',() => {
    const showModal = document.getElementById("modal");
    showModal.classList.add("hidden");

    const container = document.querySelector(".container");
    container.classList.remove("blur");
})