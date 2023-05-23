import { gql } from '@apollo/client';

export  const SEARCH_COUNTRIES_QUERY = gql`
  query SearchCountries {
    countries {
      name
      native
      phone
      languages {
        name
      }
      code
      continent {
        name
      }
      emoji
      emojiU
    }
  }
`;
