import {CountryInterface} from './country';
export interface AppContext {
    searchedValue: string;
    setSearchedValue: (value: string) => void;
    selectedLanguage: string;
    setSelectedLanguage: (value: string) => void;
    selectedContinent: string;
    setSelectedContinent: (value: string) => void;
    countries: CountryInterface[];
    setCountries: (countries: CountryInterface[]) => void;
}
