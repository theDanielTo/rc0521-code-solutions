/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  const $colThird = document.createElement('div');
  $colThird.setAttribute('class', 'column-third');

  const $pokeCard = document.createElement('div');
  $pokeCard.setAttribute('class', 'pokemon-card');

  const $pokeImg = document.createElement('img');
  $pokeImg.setAttribute('src', pokemon.imageUrl);

  const $cardText = document.createElement('div');
  $cardText.setAttribute('class', 'pokemon-card-text');
  const $pokeName = document.createElement('h2');
  $pokeName.textContent = pokemon.name;
  const $pokeIndex = document.createElement('h3');
  $pokeIndex.textContent = pokemon.number;
  const $pokeDesc = document.createElement('p');
  $pokeDesc.textContent = pokemon.description;

  $colThird.appendChild($pokeCard);
  $pokeCard.appendChild($pokeImg);
  $pokeCard.appendChild($cardText);
  $cardText.appendChild($pokeName);
  $cardText.appendChild($pokeIndex);
  $cardText.appendChild($pokeDesc);

  return $colThird;
}

const $rowEl = document.querySelector('.row');

for (const pokemon of pokedex) {
  $rowEl.appendChild(renderPokemon(pokemon));
}
