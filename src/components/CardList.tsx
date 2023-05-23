import { SimpleGrid } from '@chakra-ui/react';
import { useAppContext } from '../Context/useAppContext'
import CountryCard from './Card'

const CardList = () => {
    const { countries } = useAppContext();
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={20} p={20}>
            {countries.map((item) => <CountryCard item={item} />)}
        </SimpleGrid>
    )
}
export default CardList;