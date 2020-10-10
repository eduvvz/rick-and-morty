import { useQuery } from '@apollo/client';
import React from 'react';
import { IEpisode } from '../../models/Episode';
import { IPaginate } from '../../models/Requests';
import { PAGINATE_EPISODES } from '../../services/querys/Episodes';

const List: React.FC = () => {
  const { loading, data } = useQuery<IPaginate<IEpisode>>(PAGINATE_EPISODES());

  return <div />;
};

export default List;
