export interface CountryInterface {
    AD: string;
    continent: {
      __typename: string;
      name: string;
    };
    emoji: string;
    emojiU: string;
    languages: {
      name: string;
    }[];
    name: string;
    native: string;
    phone: string;
    __typename: string;
  }