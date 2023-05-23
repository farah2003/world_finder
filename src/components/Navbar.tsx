
import { Flex, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo2.png';
const Navbar = () => {
    return (
        <Flex direction="row" align="center" px={7} py={1} >
            <Image src={logo} boxSize="50px" mb={2} mr={2} />
            <Text fontWeight="bold" fontSize="2xl">World Finder</Text>
        </Flex>
    );
};

export default Navbar;