import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import { Router } from '@reach/router';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Home from './pages/Home';
import Navigation from './components/Navigation';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'https://graphql-pokemon.now.sh/graphql' }),
});

ReactDOM.render(
  <ApolloHooksProvider client={client}>
    <Navigation />
    <Router>
      <Home path="/" />
      <Pokemon path="/pokemon/:id" />
      <Pokemons path="/pokemon" />
    </Router>
  </ApolloHooksProvider>,
  document.getElementById('root'),
);
