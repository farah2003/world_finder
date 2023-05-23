import { Input, Box, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { BsSearch } from "react-icons/bs";
import { useAppContext } from '../Context/useAppContext'
export const Search = () => {
    const { searchedValue, setSearchedValue } = useAppContext()
    return (
        <InputGroup
            mx={10}
            maxWidth="250px"
            my={{ base: 3 }}>
            <InputLeftElement>
                <Box mt={2}>
                    <Icon as={BsSearch} boxSize={6} fontWeight="bolder" my={20} />
                </Box>
            </InputLeftElement>

            <Input
                value={searchedValue}
                placeholder="Search"
                variant="filled"
                onChange={({ target: { value } }) => setSearchedValue(value)}
            />
        </InputGroup>

    )
}
export default Search;  