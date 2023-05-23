
import { Flex, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo2.png';
const Navbar = () => {
    return (
        <Flex direction="row" align="center" px={7}>
            <Image src={logo} boxSize="40px" mb={2} mr={3} />
            <Text fontWeight="bold" fontSize="xl">World Finder</Text>
        </Flex>
    );
};

export default Navbar;