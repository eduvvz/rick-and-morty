import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IEpisode } from '../../models/Episode';
import { IIPaginateList } from '../../models/Requests';
import { PAGINATE_EPISODES } from '../../services/querys/Episodes';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 'calc(100vh - 70px)',
  },
  charactersSection: {
    display: 'flex',
    padding: theme.spacing(2),
    maxWidth: '50%',
    overflowY: 'auto',
  },
  characterAvatar: {
    margin: theme.spacing(0, 1),
  },
}));

const Episodes: React.FC = () => {
  const classes = useStyles();
  const { data, loading } = useQuery<IIPaginateList<IEpisode>>(
    PAGINATE_EPISODES()
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
        {data?.episodes.results.map((episode) => (
          <div key={episode.id}>
            <ListItem>
              <ListItemText
                primary={episode.name}
                secondary={episode.episode}
              />
              <div className={classes.charactersSection}>
                {episode.characters.map((character) => (
                  <Tooltip key={character.id} title={character.name}>
                    <Avatar
                      className={classes.characterAvatar}
                      alt={character.name}
                      src={character.image}
                    />
                  </Tooltip>
                ))}
              </div>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
};

export default Episodes;
