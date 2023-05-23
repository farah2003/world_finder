import { gql } from '@apollo/client';
export const GET_LANGUAGES_QUERY = gql`
query Languages {
  languages {
    name
  }
}
  `;