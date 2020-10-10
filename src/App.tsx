import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import client from './services/apollo';
import List from './components/Episodes';
import Menu from './components/Menu';
import Characters from './components/Characters';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Menu />
        <Switch>
          <Route path="/episodes">
            <List />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
