// import { Flex, Text, MenuButton, Menu, MenuList, MenuItem, Button } from "@chakra-ui/react";
// import CartWidget from "./CartWidget";
// import { useNavigate } from "react-router";



// const NavBar = () => {

//     const navigate = useNavigate()

//     return (
//         <Flex 
//             alignItems="center" 
//             justifyContent="space-between" 
//             width="100vw" 
//             height="7%" 
//             padding="0 20px" 
//             backgroundColor="red" 
//             color="white"
//         >

//             <Text fontSize={20} onClick={() => navigate("/")} cursor={"pointer"}>Online Store</Text>
//             <Menu>
//                 <MenuButton as={Button}>
//                     Menú
//                 </MenuButton>
//                 <MenuList fontSize="20px" color="black">
//                     <MenuItem>Calzados</MenuItem>
//                     <MenuItem>Remeras</MenuItem>
//                     <MenuItem>Buzos</MenuItem>
//                     <MenuItem>Pantalones</MenuItem>
//                     <MenuItem>Medias</MenuItem>
//                 </MenuList>
//             </Menu>
//             <CartWidget />
//         </Flex>
//     );
// };

// export default NavBar;

import {
    Flex,
    Text,
    MenuButton,
    Menu,
    MenuList,
    Button,
    MenuItem,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/products.service";

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllCategories()
            .then((res) => setCategories(res.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            width="100vw"
            padding="0 20px"
            height="7vh"
            border="1px solid #2e2e2e"
            backgroundColor="red"
            color="white"
        >
            <Text className="test" onClick={() => navigate("/")} cursor={"pointer"}>
                Coder's Store
            </Text>
            <Menu height={"200px"}>
                <MenuButton as={Button}>Categorias</MenuButton>
                <MenuList color="black">
                    {categories.map((item) => {
                        return <MenuItem key={item.slug} onClick={() => navigate(`/category/${item.slug}`)}>{item.name}</MenuItem>;
                    })}

                </MenuList>
            </Menu>
            <CartWidget />
        </Flex>
    );
};

export default NavBar;