import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makeList = () => {
    const pokedex = this.props.pokedex;
    return pokedex.map(pokemon =>
      <li
        key={pokemon.number}
        value={pokemon.name}>
        {pokemon.name}
      </li>
    );
  }

  render() {
    return (
      <ul>{this.makeList()}</ul>
    );
  }
}

ReactDOM.render(
  <PokeList pokedex={pokedex}/>,
  document.querySelector('#root')
);
