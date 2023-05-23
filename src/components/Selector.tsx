
import { Menu, MenuButton, MenuItem, MenuList, Button, Box } from '@chakra-ui/react';
import { BsChevronDown } from "react-icons/bs";
import { useAppContext } from '../Context/useAppContext'
import { SelectorInterfaces } from '../interfaces'


export const Selector: React.FC<SelectorInterfaces.SelectorProps> = ({ title, data }) => {
    console.log(data[0]);
    const { selectedLanguage, setSelectedLanguage, selectedContinent, setSelectedContinent } = useAppContext();
    return (
        <Menu>
            <MenuButton
                mx={10}
                my={{ base: 3 }}
                as={Button}
                width="100%"
                maxWidth={{ base: '360px', md: '225px' }}
                height="40px"
                rightIcon={<BsChevronDown />}
                borderRadius="5px"
            >
                {(title === "Continents" ? selectedContinent : selectedLanguage) || title}
            </MenuButton>
            <MenuList>
                <Box maxHeight="300px" overflowY="auto">
                    {data.length && data.map((item) => {
                        return (
                            <MenuItem onClick={() => typeof item === 'string' ? setSelectedContinent(item) :
                                setSelectedLanguage(item.name)}>{item.name || item}</MenuItem>
                        )
                    })}name
                </Box>
            </MenuList>
        </Menu>
    )
}
export default Selector;