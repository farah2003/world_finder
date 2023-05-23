import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Grid, GridItem } from '@chakra-ui/react';
import { CardList, Heading, Navbar, Loader, Error } from './components'
import { SEARCH_COUNTRIES_QUERY } from './helpers/index';
import { useAppContext } from './Context/useAppContext';

const App = () => {
  const { searchedValue, selectedLanguage, selectedContinent, setCountries } = useAppContext();
  const { loading, error, data: searchData } = useQuery(SEARCH_COUNTRIES_QUERY);



  useEffect(() => {
    if (searchData) {

      setCountries(searchData.countries);
    }
  }, [searchData]);

  const handleSearch = () => {
    const filteredCountries = searchData.countries.filter((country: {
      name: string;
      languages: { name: string }[];
      continent: { name: string };
    }) =>
      country.name.toLowerCase().includes(searchedValue.toLowerCase()) &&
      (selectedLanguage === '' || country.languages.some(lang => lang.name.toLowerCase().includes(selectedLanguage.toLowerCase()))) &&
      (selectedContinent === '' || country.continent.name.toLowerCase().includes(selectedContinent.toLowerCase()))
    );
    setCountries(filteredCountries);
  };

  return (
    <Grid templateAreas={{
      base: "'nav' 'main'",
    }}>
      <GridItem gridArea="nav" >
        <Navbar />
      </GridItem>
      <GridItem gridArea="main">
        <Heading
          handleSearch={handleSearch}
        />
        {error ? <Error /> : loading ? <Loader />
          : <CardList />}

      </GridItem>
    </Grid >

  );
};

export default App;