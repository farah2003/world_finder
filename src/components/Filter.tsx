import { useEffect, useState } from 'react';
import { Flex, Button, } from '@chakra-ui/react';
import { useQuery } from "@apollo/client";
import { GET_LANGUAGES_QUERY } from '../helpers/index'
import Selector from './Selector';
import Search from './Search'
import { HeadingInterfaces } from '../interfaces'

const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "Oceania", "South America"];


const Filter: React.FC<HeadingInterfaces.FilterProps> = ({ handleSearch }) => {

    const [languages, setLanguages] = useState([])
    const { data } = useQuery(GET_LANGUAGES_QUERY);

    useEffect(() => {
        if (data && data.languages) {
            setLanguages(data.languages);
        }
    }, [data]);


    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
        >
            <Selector data={continents} title="Continents" />
            <Selector data={languages} title="Languages" />
            <Search />
            <Button
                colorScheme="red"
                height="40px"
                width="100%"
                maxWidth={{ base: '300px', md: '130px' }}
                onClick={() => handleSearch()}
            >
                Let's go
            </Button>
        </Flex>
    )
}

export default Filter;
