let currentPokemonId = 1;
const totalPokemon = 898;

const pokemonDisplay = document.getElementById('pokemon-display');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonTypes = document.getElementById('pokemon-types');
const pokemonImage = document.getElementById('pokemon-image');
const randomBtn = document.getElementById('random-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

randomBtn.addEventListener('click', fetchRandomPokemon);
prevBtn.addEventListener('click', fetchPreviousPokemon);
nextBtn.addEventListener('click', fetchNextPokemon);

fetchPokemon(currentPokemonId);

async function fetchPokemon(id) {
    try {
        loadingElement.classList.remove('hidden');
        pokemonDisplay.classList.add('hidden');
        errorMessage.classList.add('hidden');

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }

        const data = await response.json();
        displayPokemon(data);
        
        currentPokemonId = id;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        showError();
    }
}

async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * totalPokemon) + 1;
    await fetchPokemon(randomId);
}

async function fetchPreviousPokemon() {
    if (currentPokemonId > 1) {
        await fetchPokemon(currentPokemonId - 1);
    } else {
        await fetchPokemon(totalPokemon);
    }
}

async function fetchNextPokemon() {
    if (currentPokemonId < totalPokemon) {
        await fetchPokemon(currentPokemonId + 1);
    } else {
        await fetchPokemon(1);
    }
}

function displayPokemon(pokemon) {
    pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonId.textContent = `Pokémon n° ${pokemon.id}`;
    pokemonHeight.textContent = `Height: ${pokemon.height / 10}m`;
    pokemonWeight.textContent = `Weight: ${pokemon.weight / 10}kg`; 
    
    pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default || 
                      pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
    
    pokemonTypes.innerHTML = '';
    
    pokemon.types.forEach(typeInfo => {
        const type = document.createElement('span');
        type.textContent = typeInfo.type.name;
        type.classList.add('type', typeInfo.type.name);
        pokemonTypes.appendChild(type);
    });
    
    loadingElement.classList.add('hidden');
    pokemonDisplay.classList.remove('hidden');
}

function showError() {
    loadingElement.classList.add('hidden');
    pokemonDisplay.classList.add('hidden');
    errorMessage.classList.remove('hidden');
}