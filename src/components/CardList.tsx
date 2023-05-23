import { SimpleGrid } from '@chakra-ui/react';
import { useAppContext } from '../Context/useAppContext'
import CountryCard from './Card'

const CardList = () => {
    const { countries } = useAppContext();
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={20} px={{ base: 20, md: 30 }} py={20}>
            {countries.map((item) => <CountryCard item={item} />)}
        </SimpleGrid>
    )
}
export default CardList;