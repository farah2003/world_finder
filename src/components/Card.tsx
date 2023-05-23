import { Card, Heading, CardBody, CardHeader, Box, Stack, StackDivider, List, ListItem } from '@chakra-ui/react';
import CardHeading from "./CardHeading";
import { CardInterfaces } from '../interfaces';

const CountryCard = ({ item: { languages, emoji, name, phone, native, continent: { name: containtName } } }: CardInterfaces.CountryCardProps) => {
    return (

        <Card boxShadow="2xl">
            <CardHeader>
                <Heading size='sm'>{emoji} { } {name}</Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <CardHeading title={native} word={"native"} />
                    <CardHeading title={containtName} word={"containt"} />
                    <CardHeading title={phone} word={"phone"} />
                    <Box>
                        <Heading size='sm'>
                            languages
                            {languages.map((item) =>
                                <List spacing={2}>
                                    <ListItem pl={20} color="#484a94">
                                        {item.name}
                                    </ListItem>
                                </List>
                            )}
                        </Heading>

                    </Box>
                </Stack>
            </CardBody>
        </Card>

    )
}
export default CountryCard; 