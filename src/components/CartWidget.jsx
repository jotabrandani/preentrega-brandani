import { Flex } from "@chakra-ui/react";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

const CartWidget = () => {

    const { getTotalCount, cart } = useContext(CartContext);
    const totalCount = getTotalCount();

    const navigate = useNavigate();
    console.log(cart)

    return (
        <Flex alignItems="center" fontSize="20px" onClick={() => navigate('/cart')}>
            <BsCart4 size={25} />{totalCount}
        </Flex>
    );
};

export default CartWidget;