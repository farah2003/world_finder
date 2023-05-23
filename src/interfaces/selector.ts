
interface Language {
    name: string;
    __typename: string;
  
  }

export interface SelectorProps {
    title: string;
    data:  Language[] | string[] | any[];
}