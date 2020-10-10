import React, { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import {
  Avatar,
  Button,
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

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 'calc(100vh - 70px)',
  },
  containerMoreBtn: {
    padding: theme.spacing(2, 0),
  },
}));

const Characters: React.FC = () => {
  const classes = useStyles();
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState<number | null>(1);
  const [characters, setCharacters] = useState<ICharacterItemList[]>([]);

  useEffect(() => {
    getMoreItems();
  }, []);

  async function getMoreItems() {
    setIsLoading(true);
    const { data } = await client.query<IIPaginateList<ICharacterItemList>>({
      query: PAGINATE_CHARACTERS(nextPage),
    });

    const newCharacters = data.characters.results || [];

    setIsLoading(false);
    setCharacters((prevState) => prevState.concat(newCharacters));
    setNextPage(data.characters.info.next);
  }

  function onClickMoreBtn(): void {
    getMoreItems();
  }

  return (
    <>
      {isLoading && (
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
        {characters.map((character) => (
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
      <Grid justify="center" className={classes.containerMoreBtn} container>
        <Button
          disabled={!nextPage || isLoading}
          onClick={onClickMoreBtn}
          size="large"
        >
          Buscar mais
        </Button>
      </Grid>
    </>
  );
};

export default Characters;
