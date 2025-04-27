import { Flex } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    return (
        <Flex alignItems="center" fontSize="20px">
            <BsCart4 size={25} />0
        </Flex>
    );
};

export default CartWidget;