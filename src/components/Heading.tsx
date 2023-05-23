import { Text, Box, Center } from '@chakra-ui/react';
import Filter from './Filter'
import { HeadingInterfaces } from '../interfaces'
const color = 'linear-gradient(.647turn,#1a0a47cc,#0d1b4599 .01%,#0d1b45cc 51.04%,#0d1b45 99.1%)'


const Heading: React.FC<HeadingInterfaces.HeadingProps> = ({ handleSearch }) => {
    return (
        <Box bg={color} py={20} >
            <Center flexDirection="column" alignItems="center">
                <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="white">Explore countries around the globel</Text>
            </Center>
            <Filter handleSearch={handleSearch} />

        </Box>
    )
}
export default Heading;