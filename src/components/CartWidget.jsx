import { Flex } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const { getTotalCount } = useContext(CartContext);
    const totalCount = getTotalCount();

    return (
        <Flex alignItems="center" fontSize="20px">
            <BsCart4 size={25} />{totalCount}
        </Flex>
    );
};

export default CartWidget;