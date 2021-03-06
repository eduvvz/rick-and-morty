import React from 'react';
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <AppBar position="static">
      <Grid justify="space-between" container>
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">R & M</Link>
          </Typography>
        </Toolbar>
        <Toolbar>
          <Button color="inherit">
            <Link to="/episodes">Episodios</Link>
          </Button>
          <Button color="inherit">
            <Link to="characters">Personagens</Link>
          </Button>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

export default Menu;
