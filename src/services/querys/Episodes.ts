import { DocumentNode, gql } from '@apollo/client';

export const PAGINATE_EPISODES = (page = 1): DocumentNode => gql`
  query {
    episodes(page: ${page}) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        episode
        characters {
          id
          name
          image
        }
      }
    }
  }
`;
