import { Flex, Text, MenuButton, Menu, MenuList, MenuItem, Button } from "@chakra-ui/react";
import CartWidget from "./CartWidget";



const NavBar = () => {
    return (
        <Flex 
            alignItems="center" 
            justifyContent="space-between" 
            width="100vw" 
            height="7%" 
            padding="0 20px" 
            backgroundColor="red" 
            color="white"
        >
            
            <Text fontSize={20}>Online Store</Text>
            <Menu>
                <MenuButton as={Button}>
                    Menú
                </MenuButton>
                <MenuList fontSize="20px" color="black">
                    <MenuItem>Calzados</MenuItem>
                    <MenuItem>Remeras</MenuItem>
                    <MenuItem>Buzos</MenuItem>
                    <MenuItem>Pantalones</MenuItem>
                    <MenuItem>Medias</MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
        </Flex>
    );
};

export default NavBar;
