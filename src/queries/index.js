import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      name
      id
    }
  }
`;

export const GET_POKEMON = gql`
  query getPokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      name
      id
      image
    }
  }
`;
