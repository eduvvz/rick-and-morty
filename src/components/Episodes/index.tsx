import React from 'react';
import { useQuery } from '@apollo/client';
import { IEpisode } from '../../models/Episode';
import { IPaginate } from '../../models/Requests';
import { PAGINATE_EPISODES } from '../../services/querys/Episodes';

const Episodes: React.FC = () => {
  const { loading, data } = useQuery<IPaginate<IEpisode>>(PAGINATE_EPISODES());

  return <div />;
};

export default Episodes;
