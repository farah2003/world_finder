import { Flex, Spinner } from "@chakra-ui/react";
const Loader = () => {
    return < Flex align="center" justify="center" height="50vh">
        <Spinner size="xl" />
    </Flex>
}
export default Loader;