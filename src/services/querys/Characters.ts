import { DocumentNode, gql } from '@apollo/client';

export const PAGINATE_CHARACTERS = (page: number | null): DocumentNode => gql`
  query {
    characters(page: ${page}) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;
