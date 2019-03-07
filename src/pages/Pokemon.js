import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_POKEMON } from '../queries';

const PokeList = ({ id, ...props }) => {
  const { data, error, loading } = useQuery(GET_POKEMON, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const { name } = data.pokemon;

  return (
    <div className="App">
      <h2>Pokemon: {name}</h2>
      <table>
        <tr>
          <td>Feature</td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </div>
  );
};

export default PokeList;
