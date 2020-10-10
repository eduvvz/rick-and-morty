import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './services/apollo';
import List from './components/List';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>
  );
};

export default App;
