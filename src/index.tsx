import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
