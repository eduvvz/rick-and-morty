import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ICharacterItemList } from '../../models/Characters';
import { IIPaginateList } from '../../models/Requests';
import { PAGINATE_CHARACTERS } from '../../services/querys/Characters';

const useStyles = makeStyles({
  container: {
    minHeight: 'calc(100vh - 70px)',
  },
});

const Characters: React.FC = () => {
  const classes = useStyles();
  const { loading, data } = useQuery<IIPaginateList<ICharacterItemList>>(
    PAGINATE_CHARACTERS()
  );

  return (
    <>
      {loading && (
        <Grid
          justify="center"
          alignItems="center"
          className={classes.container}
          container
        >
          <Typography>Carregando...</Typography>
        </Grid>
      )}
      <List>
        {data?.characters.results.map((character) => (
          <div key={character.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={character.image} />
              </ListItemAvatar>
              <ListItemText
                primary={character.name}
                secondary={character.species}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
};

export default Characters;
