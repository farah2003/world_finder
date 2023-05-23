import { Heading, Box } from '@chakra-ui/react';
import { CardInterfaces } from '../interfaces';

const CardHeading: React.FC<CardInterfaces.CardHeadingProps> = ({ title, word }) => {
    return (
        <Box>
            <Heading size='sm'>
                {word}: <Box as="span" color="#484a94">{title}</Box>
            </Heading>
        </Box>
    )
}
export default CardHeading;