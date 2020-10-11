import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import imgHome from '../../assets/images/rickandmorty.png';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100vh - 80px)',
  },
  imgHome: {
    width: '50%',
    maxWidth: 500,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      justify="center"
      alignItems="center"
      className={classes.container}
      container
    >
      <img className={classes.imgHome} alt="Rick and Morty" src={imgHome} />
    </Grid>
  );
};

export default Home;
