import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_POKEMONS } from '../queries';
import { Link } from '@reach/router';

const Pokemon = ({ name, id }) => (
  <li key={name}>
    <Link to={`/pokemon/${id}`}>{name}</Link>
  </li>
);

const PokeList = () => {
  const { data, error, loading } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="App">
      <h2>These are your Pokemon</h2>
      <ul>{data.pokemons.map(Pokemon)}</ul>
    </div>
  );
};

export default PokeList;
